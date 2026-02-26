import * as THREE from "three";
import type { Intrinsics, Pose, Distortion } from "../types";
import { R_fromYPR, worldToCamera, projectPoint } from "./camera";

function bilinearSample(src: Uint8ClampedArray, w: number, h: number, u: number, v: number) {
  const x0 = Math.floor(u), y0 = Math.floor(v);
  const x1 = x0 + 1, y1 = y0 + 1;
  if (x0 < 0 || y0 < 0 || x1 >= w || y1 >= h) return [0, 0, 0, 0] as const;

  const ax = u - x0, ay = v - y0;
  const idx = (x: number, y: number) => (y * w + x) * 4;

  const p00 = idx(x0, y0), p10 = idx(x1, y0), p01 = idx(x0, y1), p11 = idx(x1, y1);

  const out = [0, 0, 0, 0];
  for (let k = 0; k < 4; k++) {
    const v0 = src[p00 + k] * (1 - ax) + src[p10 + k] * ax;
    const v1 = src[p01 + k] * (1 - ax) + src[p11 + k] * ax;
    out[k] = v0 * (1 - ay) + v1 * ay;
  }
  return out as [number, number, number, number];
}

/**
 * Bird’s-eye view on world ground plane Y=0 (Three GridHelper plane).
 * BEV forward is toward negative Z.
 */
export function renderBEV(
  srcImg: ImageData,
  outW: number,
  outH: number,
  halfWidthMeters: number,
  forwardMeters: number,
  pose: Pose,
  K: Intrinsics,
  dist: Distortion
): ImageData {
  const out = new ImageData(outW, outH);
  const dst = out.data;

  const R = R_fromYPR(pose.yaw, pose.pitch, pose.roll);

  for (let j = 0; j < outH; j++) {
    //const z = -forwardMeters * (j / (outH - 1)); // 0 .. -forward
    const z = -forwardMeters * (1 - j / (outH - 1)); // top=far, bottom=near
    for (let i = 0; i < outW; i++) {
      const x = (i / (outW - 1) * 2 - 1) * halfWidthMeters;

      const Xw = new THREE.Vector3(x, 0, z);
      const Xc = worldToCamera(Xw, pose, R);
      const proj = projectPoint(Xc, K, dist);
      if (!proj) continue;

      const [r, g, b, a] = bilinearSample(srcImg.data, srcImg.width, srcImg.height, proj.u, proj.v);

      const p = (j * outW + i) * 4;
      dst[p + 0] = r;
      dst[p + 1] = g;
      dst[p + 2] = b;
      dst[p + 3] = a;
    }
  }
  return out;
}