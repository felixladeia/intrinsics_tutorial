import { useMemo, useState } from "react";
import * as THREE from "three";
import type { Params } from "../types";
import Controls from "../components/Controls";
import Lessons from "../components/Lessons";
import ThreeView from "../components/ThreeView";
import ImagePlane from "../components/ImagePlane";
import { LESSONS } from "../lessons/lessons";

export default function IntrinsicsPage(props: {
  params: Params;
  setParams: (updater: (p: Params) => Params) => void;
}) {
  const { params, setParams } = props;

  const [lessonIdx, setLessonIdx] = useState(0);
  const [ray, setRay] = useState<{ origin: THREE.Vector3; dir: THREE.Vector3 } | null>(null);

  const lesson = LESSONS[lessonIdx];
  const locked = useMemo(() => new Set(lesson.lock ?? []), [lesson]);

  const applyLesson = (idx: number) => {
    const l = LESSONS[idx];
    setLessonIdx(idx);
    setRay(null);
    // Apply lesson to shared params
    props.setParams((_prev) => l.apply(_prev));
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", height: "100%" }}>
      {/* Left: 3D */}
      <div style={{ position: "relative" }}>
        <ThreeView params={params} ray={ray} />
        <div
          style={{
            position: "absolute",
            left: 12,
            top: 12,
            padding: "8px 10px",
            background: "rgba(255,255,255,0.9)",
            border: "1px solid #eee",
            borderRadius: 10,
            fontSize: 12,
            color: "#333",
          }}
        >
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
          <ImagePlane params={params} onPixelClickRay={(r) => setRay(r)} />

          <div
            style={{
              position: "absolute",
              left: 12,
              bottom: 12,
              padding: "8px 10px",
              background: "rgba(255,255,255,0.9)",
              border: "1px solid #eee",
              borderRadius: 10,
              fontSize: 12,
              color: "#333",
            }}
          >
            <div style={{ fontWeight: 800 }}>2D Image Plane ({params.K.width}×{params.K.height})</div>
            <div>fx/fy zoom, cx/cy shifts principal point.</div>
            <div>Distortion warps normalized coords before K.</div>
          </div>

          <div
            style={{
              position: "absolute",
              right: 12,
              bottom: 12,
              padding: "8px 10px",
              background: "rgba(255,255,255,0.9)",
              border: "1px solid #eee",
              borderRadius: 10,
              fontSize: 12,
              color: "#333",
              width: 260,
            }}
          >
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