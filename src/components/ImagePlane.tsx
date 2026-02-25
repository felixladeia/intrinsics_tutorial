import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { Params } from "../types";
import { makeHouse } from "../scene/objects";
import { makeTorusKnotSampled } from "../scene/complex";
import { R_fromYPR, worldToCamera, projectPoint, pixelToNormalized, undistortNormalized, camDirToWorld } from "../math/camera";

export default function ImagePlane(props: {
  params: Params;
  onPixelClickRay: (ray: { origin: THREE.Vector3; dir: THREE.Vector3 } | null) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  //const house = useMemo(() => makeHouse(), []);
  const torus = useMemo(() => makeTorusKnotSampled(900), []);

  // draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { K, pose, dist } = props.params;
    const R = R_fromYPR(pose.yaw, pose.pitch, pose.roll);

    // clear
    ctx.clearRect(0, 0, K.width, K.height);

    // border
    ctx.strokeStyle = "#ddd";
    ctx.strokeRect(0.5, 0.5, K.width - 1, K.height - 1);

    // principal point crosshair
    ctx.strokeStyle = "#999";
    ctx.beginPath();
    ctx.moveTo(K.cx - 10, K.cy); ctx.lineTo(K.cx + 10, K.cy);
    ctx.moveTo(K.cx, K.cy - 10); ctx.lineTo(K.cx, K.cy + 10);
    ctx.stroke();

    const proj = torus.points.map((Xw) => {
      const Xc = worldToCamera(Xw, pose, R);
      return projectPoint(Xc, K, dist);
    });

    // Draw projected points
    for (const P of proj) {
      if (!P) continue;
      const inside = P.u >= 0 && P.u < K.width && P.v >= 0 && P.v < K.height;
      ctx.fillStyle = inside ? "#111" : "#bbb";
      ctx.beginPath();
      ctx.arc(P.u, P.v, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // // project vertices
    // const proj = house.vertices.map((Xw) => {
    //   const Xc = worldToCamera(Xw, pose, R);
    //   return projectPoint(Xc, K, dist);
    // });

    // // draw wireframe edges
    // ctx.lineWidth = 2;
    // ctx.strokeStyle = dist.enabled ? "#444" : "#222";
    // for (const [a, b] of house.edges) {
    //   const A = proj[a], B = proj[b];
    //   if (!A || !B) continue;

    //   ctx.beginPath();
    //   ctx.moveTo(A.u, A.v);
    //   ctx.lineTo(B.u, B.v);
    //   ctx.stroke();
    // }

    // // draw vertices
    // for (let i = 0; i < proj.length; i++) {
    //   const P = proj[i];
    //   if (!P) continue;
    //   ctx.fillStyle = "#111";
    //   ctx.beginPath();
    //   ctx.arc(P.u, P.v, 4, 0, Math.PI * 2);
    //   ctx.fill();
    // }

    // Distortion hint overlay (optional grid)
    if (dist.enabled) {
      ctx.globalAlpha = 0.25;
      ctx.strokeStyle = "#888";
      ctx.lineWidth = 1;

      // simple grid in pixel space to show warping by mapping grid pixels -> normalized -> undistort? (visual aid)
      // Here we just draw a pixel grid reference; the actual warped appearance is in the projected object itself.
      for (let x = 0; x <= K.width; x += 80) {
        ctx.beginPath(); ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, K.height); ctx.stroke();
      }
      for (let y = 0; y <= K.height; y += 60) {
        ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(K.width, y + 0.5); ctx.stroke();
      }
      ctx.globalAlpha = 1.0;
    }
  }, [props.params, torus.vertices, torus.edges]);

  // click -> ray
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onClick = (ev: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const u = (ev.clientX - rect.left) * (canvas.width / rect.width);
      const v = (ev.clientY - rect.top) * (canvas.height / rect.height);

      const { K, pose, dist } = props.params;
      const R = R_fromYPR(pose.yaw, pose.pitch, pose.roll);

      // pixel -> normalized (distorted)
      let n = pixelToNormalized(u, v, K);

      // If distortion is enabled, undistort to get the ideal normalized direction
      if (dist.enabled) {
        const und = undistortNormalized(n.x, n.y, dist, 10);
        n = { x: und.x, y: und.y };
      }

      // Camera ray in camera coords (OpenGL style forward -Z in our projection, but for direction we can use z = -1)
      // Since our projection assumed points in front have z < 0, a forward ray points towards -Z.
      const dirCam = new THREE.Vector3(n.x, n.y, -1).normalize();

      const originWorld = new THREE.Vector3(pose.Cx, pose.Cy, pose.Cz);
      const dirWorld = camDirToWorld(dirCam, R).normalize();

      props.onPixelClickRay({ origin: originWorld, dir: dirWorld });
    };

    canvas.addEventListener("click", onClick);
    return () => canvas.removeEventListener("click", onClick);
  }, [props.params, props.onPixelClickRay]);

  return (
    <canvas
      ref={canvasRef}
      width={props.params.K.width}
      height={props.params.K.height}
      style={{ width: "100%", height: "100%", display: "block", background: "#fafafa" }}
    />
  );
}