import { useEffect, useRef, useState } from "react";
import type { Params } from "../types";
import { renderBEV } from "../math/bev";
import Controls from "./Controls"; // ✅ reuse existing controls

export default function BevDemo(props: {
  params: Params;
  setParams: (updater: (p: Params) => Params) => void;
}) {
  const { params, setParams } = props;

  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [halfWidthMeters, setHalfWidthMeters] = useState(6);
  const [forwardMeters, setForwardMeters] = useState(20);
  const [outSize, setOutSize] = useState(512);

  const srcCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const outCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!fileUrl) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const srcCanvas = srcCanvasRef.current;
      if (!srcCanvas) return;

      const { width, height } = params.K;
      srcCanvas.width = width;
      srcCanvas.height = height;

      const ctx = srcCanvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
    };
    img.src = fileUrl;
  }, [fileUrl, params.K.width, params.K.height]);

  useEffect(() => {
    const srcCanvas = srcCanvasRef.current;
    const outCanvas = outCanvasRef.current;
    if (!srcCanvas || !outCanvas) return;

    const srcCtx = srcCanvas.getContext("2d");
    const outCtx = outCanvas.getContext("2d");
    if (!srcCtx || !outCtx) return;

    const srcImg = srcCtx.getImageData(0, 0, srcCanvas.width, srcCanvas.height);

    const outW = outSize, outH = outSize;
    const bev = renderBEV(
      srcImg,
      outW,
      outH,
      halfWidthMeters,
      forwardMeters,
      params.pose,
      params.K,
      params.dist
    );

    outCanvas.width = outW;
    outCanvas.height = outH;
    outCtx.putImageData(bev, 0, 0);
  }, [params, halfWidthMeters, forwardMeters, outSize]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "420px 1fr", gap: 16, padding: 12, height: "100%" }}>
      <div style={{ overflow: "auto", borderRight: "1px solid #eee", paddingRight: 12 }}>
        <h3 style={{ margin: "0 0 8px 0" }}>BEV / Inverse Perspective Mapping</h3>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (!f) return;
            const url = URL.createObjectURL(f);
            setFileUrl(url);
          }}
        />

        <div style={{ marginTop: 12 }}>
          <label>Half-width (m): {halfWidthMeters.toFixed(1)}</label>
          <input
            type="range"
            min={1}
            max={20}
            step={0.5}
            value={halfWidthMeters}
            onChange={(e) => setHalfWidthMeters(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <label>Forward (m): {forwardMeters.toFixed(1)}</label>
          <input
            type="range"
            min={2}
            max={60}
            step={1}
            value={forwardMeters}
            onChange={(e) => setForwardMeters(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <label>Output size: {outSize}px</label>
          <input
            type="range"
            min={256}
            max={1024}
            step={64}
            value={outSize}
            onChange={(e) => setOutSize(parseInt(e.target.value, 10))}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginTop: 12, fontSize: 12, opacity: 0.8 }}>
          <div><b>Ground:</b> Y=0</div>
          <div><b>Forward:</b> -Z</div>
          <div style={{ marginTop: 6, fontFamily: "ui-monospace, Menlo, monospace" }}>
            fx={params.K.fx.toFixed(0)} fy={params.K.fy.toFixed(0)} cx={params.K.cx.toFixed(0)} cy={params.K.cy.toFixed(0)}
            <br />
            C=({params.pose.Cx.toFixed(2)}, {params.pose.Cy.toFixed(2)}, {params.pose.Cz.toFixed(2)})
            <br />
            ypr=({(params.pose.yaw * 180/Math.PI).toFixed(0)}°, {(params.pose.pitch * 180/Math.PI).toFixed(0)}°, {(params.pose.roll * 180/Math.PI).toFixed(0)}°)
          </div>
        </div>

        {/* ✅ Reuse your existing sliders */}
        <div style={{ marginTop: 12 }}>
          <Controls params={params} setParams={setParams} />
        </div>

        <canvas ref={srcCanvasRef} style={{ width: "100%", marginTop: 12, border: "1px solid #ddd" }} />
      </div>

      <div style={{ height: "100%", minHeight: 0 }}>
        <h4 style={{ margin: "0 0 8px 0" }}>Bird’s-eye view</h4>
        <canvas ref={outCanvasRef} style={{ width: "100%", border: "1px solid #ddd" }} />
      </div>
    </div>
  );
}