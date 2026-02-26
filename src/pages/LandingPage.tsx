export default function LandingPage(props: {
  onSelect: (id: "intrinsics" | "bev") => void;
}) {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ width: "min(960px, 100%)" }}>
        <h1 style={{ margin: 0, fontSize: 36 }}>Camera Geometry Playground</h1>
        <p style={{ marginTop: 8, opacity: 0.8 }}>
          Select a tutorial.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 16,
            marginTop: 20,
          }}
        >
          <button
            onClick={() => props.onSelect("intrinsics")}
            style={{
              textAlign: "left",
              padding: 18,
              borderRadius: 14,
              border: "1px solid #ddd",
              background: "white",
              cursor: "pointer",
              boxShadow: "0 1px 10px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 800 }}>Camera Intrinsics</div>
            <div style={{ marginTop: 8, opacity: 0.8, lineHeight: 1.35 }}>
              Understand K (fx, fy, cx, cy, skew), rays, distortion, and 3D↔2D projection.
            </div>
          </button>

          <button
            onClick={() => props.onSelect("bev")}
            style={{
              textAlign: "left",
              padding: 18,
              borderRadius: 14,
              border: "1px solid #ddd",
              background: "white",
              cursor: "pointer",
              boxShadow: "0 1px 10px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 800 }}>BEV / IPM Demo</div>
            <div style={{ marginTop: 8, opacity: 0.8, lineHeight: 1.35 }}>
              Build a bird’s-eye view from a single camera using intrinsics + pose on the ground plane.
            </div>
          </button>
        </div>

        <div style={{ marginTop: 18, fontSize: 12, opacity: 0.65 }}>
          Tip: Start with Intrinsics, then jump into BEV once the pose feels intuitive.
        </div>
      </div>
    </div>
  );
}