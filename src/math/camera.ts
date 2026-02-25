import * as THREE from "three";
import type { Intrinsics, Pose, Distortion } from "../types";

// Rotation convention used here:
// yaw around Y, pitch around X, roll around Z, composed R = Rz * Rx * Ry
export function R_fromYPR(yaw: number, pitch: number, roll: number): THREE.Matrix3 {
  const cy = Math.cos(yaw), sy = Math.sin(yaw);
  const cx = Math.cos(pitch), sx = Math.sin(pitch);
  const cz = Math.cos(roll), sz = Math.sin(roll);

  const Ry = new THREE.Matrix3().set(
    cy, 0, sy,
    0,  1, 0,
    -sy,0, cy
  );

  const Rx = new THREE.Matrix3().set(
    1, 0,  0,
    0, cx, -sx,
    0, sx, cx
  );

  const Rz = new THREE.Matrix3().set(
    cz, -sz, 0,
    sz,  cz, 0,
    0,    0, 1
  );

  return Rz.clone().multiply(Rx).multiply(Ry);
}

export function yprLookAt(from: THREE.Vector3, to: THREE.Vector3): { yaw: number; pitch: number } {
  const d = to.clone().sub(from).normalize();

  // Camera forward is -Z in our setup => use -d.z
  const yaw = Math.atan2(d.x, -d.z);

  // Pitch: tilt up/down. Keep as-is unless you notice vertical inversion.
  const pitch = -Math.asin(THREE.MathUtils.clamp(d.y, -1, 1));

  return { yaw, pitch };
}

// World -> camera
export function worldToCamera(Xw: THREE.Vector3, pose: Pose, R: THREE.Matrix3): THREE.Vector3 {
  const C = new THREE.Vector3(pose.Cx, pose.Cy, pose.Cz);
  const v = Xw.clone().sub(C);
  const e = v.toArray();
  const m = R.elements;
  return new THREE.Vector3(
    m[0] * e[0] + m[1] * e[1] + m[2] * e[2],
    m[3] * e[0] + m[4] * e[1] + m[5] * e[2],
    m[6] * e[0] + m[7] * e[1] + m[8] * e[2]
  );
}

// Camera -> world direction: dirWorld = R^T * dirCam
export function camDirToWorld(dirCam: THREE.Vector3, R: THREE.Matrix3): THREE.Vector3 {
  const m = R.elements;
  // R^T
  return new THREE.Vector3(
    m[0] * dirCam.x + m[3] * dirCam.y + m[6] * dirCam.z,
    m[1] * dirCam.x + m[4] * dirCam.y + m[7] * dirCam.z,
    m[2] * dirCam.x + m[5] * dirCam.y + m[8] * dirCam.z
  );
}

// --- Distortion model (Brown–Conrady) on normalized coords (x,y) ---
export function distortNormalized(x: number, y: number, d: Distortion): { xd: number; yd: number } {
  const r2 = x * x + y * y;
  const r4 = r2 * r2;
  const r6 = r4 * r2;

  const radial = 1 + d.k1 * r2 + d.k2 * r4 + d.k3 * r6;

  const xTangential = 2 * d.p1 * x * y + d.p2 * (r2 + 2 * x * x);
  const yTangential = d.p1 * (r2 + 2 * y * y) + 2 * d.p2 * x * y;

  return { xd: x * radial + xTangential, yd: y * radial + yTangential };
}

// Iterative undistortion: given distorted (xd, yd), solve for (x,y)
export function undistortNormalized(xd: number, yd: number, d: Distortion, iters = 8): { x: number; y: number } {
  // start with distorted as initial guess
  let x = xd, y = yd;
  for (let i = 0; i < iters; i++) {
    const { xd: fx, yd: fy } = distortNormalized(x, y, d);
    // simple fixed-point correction
    x += (xd - fx);
    y += (yd - fy);
  }
  return { x, y };
}

// Project camera coords -> pixel.
// NOTE: we treat "in front" as z < 0 (OpenGL/Three camera forward is -Z).
export function projectPoint(
  Xc: THREE.Vector3,
  K: Intrinsics,
  dist: Distortion
): { u: number; v: number; xn: number; yn: number; z: number } | null {
  const { x, y, z } = Xc;
  if (z >= -1e-6) return null;

  const zn = -z;
  let xn = x / zn;
  let yn = y / zn;

  if (dist.enabled) {
    const dd = distortNormalized(xn, yn, dist);
    xn = dd.xd; yn = dd.yd;
  }

  const u = K.fx * xn + K.skew * yn + K.cx;
  const v = K.fy * yn + K.cy;

  return { u, v, xn, yn, z };
}

// Pixel -> normalized (distorted) using K^{-1}
export function pixelToNormalized(u: number, v: number, K: Intrinsics): { x: number; y: number } {
  // With skew:
  // u = fx*x + s*y + cx
  // v = fy*y + cy
  const y = (v - K.cy) / K.fy;
  const x = (u - K.cx - K.skew * y) / K.fx;
  return { x, y };
}