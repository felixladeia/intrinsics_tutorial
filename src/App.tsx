import { useState } from "react";
import * as THREE from "three";
import type { Params } from "./types";
import LandingPage from "./pages/LandingPage";
import IntrinsicsPage from "./pages/IntrinsicsPage";
import BevDemo from "./components/BevDemo";
import { yprLookAt } from "./math/camera";

const TORUS_CENTER = new THREE.Vector3(0, 1.2, 5.0);
const IMG_W = 640;
const IMG_H = 480;

// For TorusKnotGeometry(0.9, 0.28, ...), safe bounding radius
const TORUS_RADIUS = 1.25;

const defaultParams: Params = {
  K: { fx: 800, fy: 800, cx: IMG_W / 2, cy: IMG_H / 2, skew: 0, width: IMG_W, height: IMG_H },
  pose: { Cx: 2, Cy: 2, Cz: 4, yaw: (-25 * Math.PI) / 180, pitch: (-10 * Math.PI) / 180, roll: 0 },
  dist: { enabled: false, k1: 0, k2: 0, k3: 0, p1: 0, p2: 0 },
};

function frameTorusAtStartup(p: Params): Params {
  const H = p.K.height;
  const W = p.K.width;

  const fovY = 2 * Math.atan((H / 2) / p.K.fy);
  const fovX = 2 * Math.atan((W / 2) / p.K.fx);
  const half = Math.min(fovY, fovX) / 2;

  const dist = (TORUS_RADIUS / Math.tan(half)) * 1.2;
  const C = TORUS_CENTER.clone().add(new THREE.Vector3(0, 0, dist));

  const { yaw, pitch } = yprLookAt(C, TORUS_CENTER);

  return {
    ...p,
    pose: { ...p.pose, Cx: C.x, Cy: C.y, Cz: C.z, yaw, pitch, roll: 0 },
  };
}

export default function App() {
  const [view, setView] = useState<"landing" | "intrinsics" | "bev">("landing");
  const [params, setParamsRaw] = useState<Params>(() => frameTorusAtStartup(defaultParams));

  const setParams = (updater: (p: Params) => Params) => {
    setParamsRaw((prev) => updater(prev));
  };

  if (view === "landing") {
    return <LandingPage onSelect={(id) => setView(id)} />;
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 12px",
          borderBottom: "1px solid #eee",
          background: "white",
        }}
      >
        <button onClick={() => setView("landing")}>← Home</button>

        <div style={{ fontWeight: 900 }}>
          {view === "intrinsics" ? "Camera Intrinsics" : "BEV / IPM Demo"}
        </div>

        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button onClick={() => setView("intrinsics")} disabled={view === "intrinsics"}>
            Intrinsics
          </button>
          <button onClick={() => setView("bev")} disabled={view === "bev"}>
            BEV
          </button>
        </div>
      </div>

      <div style={{ flex: 1, minHeight: 0 }}>
        {view === "intrinsics" ? (
          <IntrinsicsPage params={params} setParams={setParams} />
        ) : (
          <BevDemo params={params} setParams={setParams} />
        )}
      </div>
    </div>
  );
}