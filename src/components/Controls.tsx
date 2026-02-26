import type { Params } from "../types";

type LockKey = NonNullable<import("../lessons/lessons").LessonStep["lock"]>[number];

function Slider(props: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  disabled?: boolean;
  fmt?: (v: number) => string;
}) {
  const { label, value, min, max, step, onChange, disabled, fmt } = props;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "90px 1fr 70px", gap: 8, alignItems: "center", margin: "8px 0" }}>
      <div>{label}</div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div style={{ textAlign: "right", fontFamily: "ui-monospace, Menlo, monospace" }}>
        {fmt ? fmt(value) : value.toFixed(2)}
      </div>
    </div>
  );
}

export default function Controls(props: {
  params: Params;
  setParams: (updater: (p: Params) => Params) => void;
  locked?: Set<LockKey>;
}) {
  const { params, setParams, locked } = props;
  const lock = (k: LockKey) => locked?.has(k) ?? false;

  return (
    <div style={{ padding: 12, borderBottom: "1px solid #ddd", overflow: "auto" }}>
      <div style={{ fontWeight: 800, margin: "6px 0" }}>Intrinsics (K)</div>

      <Slider label="fx" value={params.K.fx} min={200} max={1600} step={1} disabled={lock("fx")}
        fmt={(v) => v.toFixed(0)}
        onChange={(v) => setParams(p => ({ ...p, K: { ...p.K, fx: v } }))}
      />
      <Slider label="fy" value={params.K.fy} min={200} max={1600} step={1} disabled={lock("fy")}
        fmt={(v) => v.toFixed(0)}
        onChange={(v) => setParams(p => ({ ...p, K: { ...p.K, fy: v } }))}
      />
      <Slider label="cx" value={params.K.cx} min={0} max={params.K.width} step={1} disabled={lock("cx")}
        fmt={(v) => v.toFixed(0)}
        onChange={(v) => setParams(p => ({ ...p, K: { ...p.K, cx: v } }))}
      />
      <Slider label="cy" value={params.K.cy} min={0} max={params.K.height} step={1} disabled={lock("cy")}
        fmt={(v) => v.toFixed(0)}
        onChange={(v) => setParams(p => ({ ...p, K: { ...p.K, cy: v } }))}
      />
      <Slider label="skew" value={params.K.skew} min={-200} max={200} step={1} disabled={lock("skew")}
        fmt={(v) => v.toFixed(0)}
        onChange={(v) => setParams(p => ({ ...p, K: { ...p.K, skew: v } }))}
      />

      <div style={{ fontWeight: 800, margin: "12px 0 6px" }}>Extrinsics (pose)</div>

      <Slider label="Cx" value={params.pose.Cx} min={-5} max={5} step={0.01} disabled={lock("Cx")}
        onChange={(v) => setParams(p => ({ ...p, pose: { ...p.pose, Cx: v } }))}
      />
      <Slider label="Cy" value={params.pose.Cy} min={-5} max={5} step={0.01} disabled={lock("Cy")}
        onChange={(v) => setParams(p => ({ ...p, pose: { ...p.pose, Cy: v } }))}
      />
      <Slider label="Cz" value={params.pose.Cz} min={-5} max={8} step={0.01} disabled={lock("Cz")}
        onChange={(v) => setParams(p => ({ ...p, pose: { ...p.pose, Cz: v } }))}
      />

      <Slider label="yaw" value={params.pose.yaw} min={-Math.PI} max={Math.PI} step={Math.PI/180} disabled={lock("yaw")}
        fmt={(v) => `${(v * 180/Math.PI).toFixed(0)}°`}
        onChange={(v) => setParams(p => ({ ...p, pose: { ...p.pose, yaw: v } }))}
      />
      <Slider label="pitch" value={params.pose.pitch} min={-1.55} max={1.55} step={Math.PI/180} disabled={lock("pitch")}
        fmt={(v) => `${(v * 180/Math.PI).toFixed(0)}°`}
        onChange={(v) => setParams(p => ({ ...p, pose: { ...p.pose, pitch: v } }))}
      />
      <Slider label="roll" value={params.pose.roll} min={-Math.PI} max={Math.PI} step={Math.PI/180} disabled={lock("roll")}
        fmt={(v) => `${(v * 180/Math.PI).toFixed(0)}°`}
        onChange={(v) => setParams(p => ({ ...p, pose: { ...p.pose, roll: v } }))}
      />

      <div style={{ fontWeight: 800, margin: "12px 0 6px" }}>Distortion</div>

      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            type="checkbox"
            checked={params.dist.enabled}
            disabled={lock("dist")}
            onChange={(e) => setParams(p => ({ ...p, dist: { ...p.dist, enabled: e.target.checked } }))}
          />
          Enable distortion
        </label>
      </div>

      <Slider label="k1" value={params.dist.k1} min={-1.0} max={1.0} step={0.01} disabled={!params.dist.enabled || lock("dist")}
        onChange={(v) => setParams(p => ({ ...p, dist: { ...p.dist, k1: v } }))}
      />
      <Slider label="k2" value={params.dist.k2} min={-1.0} max={1.0} step={0.01} disabled={!params.dist.enabled || lock("dist")}
        onChange={(v) => setParams(p => ({ ...p, dist: { ...p.dist, k2: v } }))}
      />
      <Slider label="k3" value={params.dist.k3} min={-1.0} max={1.0} step={0.01} disabled={!params.dist.enabled || lock("dist")}
        onChange={(v) => setParams(p => ({ ...p, dist: { ...p.dist, k3: v } }))}
      />
      <Slider label="p1" value={params.dist.p1} min={-0.5} max={0.5} step={0.001} disabled={!params.dist.enabled || lock("dist")}
        onChange={(v) => setParams(p => ({ ...p, dist: { ...p.dist, p1: v } }))}
      />
      <Slider label="p2" value={params.dist.p2} min={-0.5} max={0.5} step={0.001} disabled={!params.dist.enabled || lock("dist")}
        onChange={(v) => setParams(p => ({ ...p, dist: { ...p.dist, p2: v } }))}
      />

      <div style={{ marginTop: 10, fontSize: 12, color: "#666" }}>
        Tip: negative k1 often looks like barrel distortion; positive k1 like pincushion.
      </div>
    </div>
  );
}