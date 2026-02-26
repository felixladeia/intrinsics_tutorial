import { useMemo, useState } from "react";
import * as THREE from "three";
import type { Params } from "./types";
import Controls from "./components/Controls";
import Lessons from "./components/Lessons";
import ThreeView from "./components/ThreeView";
import ImagePlane from "./components/ImagePlane";
import { LESSONS } from "./lessons/lessons";

import { yprLookAt } from "./math/camera";

const TORUS_CENTER = new THREE.Vector3(0, 1.2, 5.0);

const IMG_W = 640;
const IMG_H = 480;

const defaultParams: Params = {
  K: { fx: 800, fy: 800, cx: IMG_W / 2, cy: IMG_H / 2, skew: 0, width: IMG_W, height: IMG_H },
  pose: { Cx: 2, Cy: 2, Cz: 4, yaw: -25 * Math.PI/180, pitch: -10 * Math.PI/180, roll: 0 },
  //pose: { Cx: 2, Cy: 2, Cz: 8, yaw: 0, pitch: -10 * Math.PI/180, roll: 0 },
  dist: { enabled: false, k1: 0, k2: 0, k3: 0, p1: 0, p2: 0 }
};

// For TorusKnotGeometry(0.9, 0.28, ...), a safe bounding radius is ~ (0.9 + 0.28) plus margin.
const TORUS_RADIUS = 1.25;

function frameTorusAtStartup(p: Params): Params {
  const H = p.K.height;
  const W = p.K.width;

  // fovY from fy (pixel units)
  const fovY = 2 * Math.atan((H / 2) / p.K.fy);
  const fovX = 2 * Math.atan((W / 2) / p.K.fx);

  // Use the tighter half-FOV to guarantee full visibility both horizontally and vertically
  const half = Math.min(fovY, fovX) / 2;

  // Distance to fit a sphere of radius r with a margin
  const dist = (TORUS_RADIUS / Math.tan(half)) * 1.2;

  // Place camera "in front" along +Z (you can choose other directions)
  const C = TORUS_CENTER.clone().add(new THREE.Vector3(0, 0, dist));

  // Compute yaw/pitch to look at the torus
  const { yaw, pitch } = yprLookAt(C, TORUS_CENTER);

  return {
    ...p,
    pose: {
      ...p.pose,
      Cx: C.x,
      Cy: C.y,
      Cz: C.z,
      yaw,
      pitch,
      roll: 0
    }
  };
}

export default function App() {
  //const [params, setParamsRaw] = useState<Params>(defaultParams);
  const [params, setParamsRaw] = useState<Params>(() => frameTorusAtStartup(defaultParams));
  const [lessonIdx, setLessonIdx] = useState(0);
  const [ray, setRay] = useState<{ origin: THREE.Vector3; dir: THREE.Vector3 } | null>(null);

  const lesson = LESSONS[lessonIdx];
  const locked = useMemo(() => new Set(lesson.lock ?? []), [lesson]);

  const setParams = (updater: (p: Params) => Params) => {
    setParamsRaw(prev => updater(prev));
  };

  const applyLesson = (idx: number) => {
    const l = LESSONS[idx];
    setLessonIdx(idx);
    setRay(null);
    setParamsRaw(prev => l.apply(prev));
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", height: "100vh" }}>
      {/* Left: 3D */}
      <div style={{ position: "relative" }}>
        <ThreeView params={params} ray={ray} />
        <div style={{
          position: "absolute", left: 12, top: 12, padding: "8px 10px",
          background: "rgba(255,255,255,0.9)", border: "1px solid #eee", borderRadius: 10,
          fontSize: 12, color: "#333"
        }}>
          <div style={{ fontWeight: 800 }}>3D World</div>
          <div>Click pixels on the right to cast a ray.</div>
        </div>
      </div>

      {/* Right: lesson + controls + 2D */}
      <div style={{ display: "grid", gridTemplateRows: "auto auto 1fr", borderLeft: "1px solid #ddd" }}>
        <Lessons
          lesson={lesson}
          index={lessonIdx}
          total={LESSONS.length}
          onPrev={() => applyLesson(Math.max(0, lessonIdx - 1))}
          onNext={() => applyLesson(Math.min(LESSONS.length - 1, lessonIdx + 1))}
          onReset={() => applyLesson(lessonIdx)}
        />

        <Controls params={params} setParams={setParams} locked={locked} />

        <div style={{ position: "relative" }}>
          <ImagePlane
            params={params}
            onPixelClickRay={(r) => setRay(r)}
          />
          <div style={{
            position: "absolute", left: 12, bottom: 12, padding: "8px 10px",
            background: "rgba(255,255,255,0.9)", border: "1px solid #eee", borderRadius: 10,
            fontSize: 12, color: "#333"
          }}>
            <div style={{ fontWeight: 800 }}>2D Image Plane ({params.K.width}×{params.K.height})</div>
            <div>fx/fy zoom, cx/cy shifts principal point.</div>
            <div>Distortion warps normalized coords before K.</div>
          </div>

          <div style={{
            position: "absolute", right: 12, bottom: 12, padding: "8px 10px",
            background: "rgba(255,255,255,0.9)", border: "1px solid #eee", borderRadius: 10,
            fontSize: 12, color: "#333", width: 260
          }}>
            <div style={{ fontWeight: 900 }}>K</div>
            <pre style={{ margin: 0 }}>
{`[ ${params.K.fx.toFixed(0)}  ${params.K.skew.toFixed(0)}  ${params.K.cx.toFixed(0)} ]
[ 0  ${params.K.fy.toFixed(0)}  ${params.K.cy.toFixed(0)} ]
[ 0   0    1 ]`}
            </pre>
            <div style={{ height: 6 }} />
            <div style={{ fontWeight: 900 }}>C (world)</div>
            <pre style={{ margin: 0 }}>
{`(${params.pose.Cx.toFixed(2)}, ${params.pose.Cy.toFixed(2)}, ${params.pose.Cz.toFixed(2)})`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}