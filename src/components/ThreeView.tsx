import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { Params } from "../types";
import { R_fromYPR } from "../math/camera";
//import { makeHouse } from "../scene/objects";
import { makeTorusKnotSampled } from "../scene/complex";

export default function ThreeView(props: {
  params: Params;
  ray?: { origin: THREE.Vector3; dir: THREE.Vector3 } | null;
}) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  // Keep these as refs so we don't re-create scene each render
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const viewCamRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<any>(null);

  const camAxesRef = useRef<THREE.AxesHelper | null>(null);
  const rayLineRef = useRef<THREE.Line | null>(null);

  const teachCamRef = useRef<THREE.PerspectiveCamera | null>(null);
  const teachHelperRef = useRef<THREE.CameraHelper | null>(null);
  //const house = useMemo(() => makeHouse(), []);
  const torus = useMemo(() => makeTorusKnotSampled(900), []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio ?? 1);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const viewCam = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.01, 200);
    viewCam.position.set(6, 5, 8);

    const controls = new OrbitControls(viewCam, renderer.domElement);
    controls.target.set(0, 1.2, 0);
    controls.update();

    scene.add(new THREE.GridHelper(10, 10));
    scene.add(new THREE.AxesHelper(2));

    // Teaching camera (separate from the viewer camera)
    const teachCam = new THREE.PerspectiveCamera(60, 1, 0.01, 100);
    teachCam.position.set(2, 2, 4);

    // Frustum helper
    const teachHelper = new THREE.CameraHelper(teachCam);
    scene.add(teachHelper);

    // Optional: a small camera body so you can "see" it even without helper
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.12, 0.24),
      new THREE.MeshBasicMaterial({ color: 0x111111 })
    );
    body.name = "teachCamBody";
    teachCam.add(body);

    // Add the camera object (so its children render)
    scene.add(teachCam);

    teachCamRef.current = teachCam;
    teachHelperRef.current = teachHelper;

    // TorusKnot mesh
    scene.add(torus.mesh);

    // "Teaching camera" axes (shows pose C + orientation)
    const camAxes = new THREE.AxesHelper(0.6);
    scene.add(camAxes);

    // Ray line placeholder
    const rayGeom = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(0, 0, -1)]);
    const rayMat = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const rayLine = new THREE.Line(rayGeom, rayMat);
    scene.add(rayLine);

    rendererRef.current = renderer;
    sceneRef.current = scene;
    viewCamRef.current = viewCam;
    controlsRef.current = controls;
    camAxesRef.current = camAxes;
    rayLineRef.current = rayLine;

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const m = mountRef.current;
      if (!m) return;
      if (rendererRef.current && viewCamRef.current && sceneRef.current) {
        const w = m.clientWidth, h = m.clientHeight;
        rendererRef.current.setSize(w, h, false);
        viewCamRef.current.aspect = w / h;
        viewCamRef.current.updateProjectionMatrix();
        rendererRef.current.render(sceneRef.current, viewCamRef.current);
      }
    };
    tick();

    const onResize = () => { /* handled in tick */ };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [props.params, torus.mesh, torus.points]);

  // Update teaching camera axes + ray when params/ray change
  useEffect(() => {
    const scene = sceneRef.current;
    const camAxes = camAxesRef.current;
    const rayLine = rayLineRef.current;
    if (!scene || !camAxes || !rayLine) return;

    // // pose
    // camAxes.position.set(props.params.pose.Cx, props.params.pose.Cy, props.params.pose.Cz);

    // const R = R_fromYPR(props.params.pose.yaw, props.params.pose.pitch, props.params.pose.roll);

    // // Set camAxes orientation from R (approx visual)
    // const e = R.elements;
    // const M4 = new THREE.Matrix4().set(
    //   e[0], e[1], e[2], 0,
    //   e[3], e[4], e[5], 0,
    //   e[6], e[7], e[8], 0,
    //   0,    0,    0,    1
    // );
    // camAxes.setRotationFromMatrix(M4);

    // // ray
    // if (props.ray) {
    //   const origin = props.ray.origin;
    //   const dir = props.ray.dir.clone().normalize();
    //   const p1 = origin.clone();
    //   const p2 = origin.clone().add(dir.multiplyScalar(50)); // long ray
    //   (rayLine.geometry as THREE.BufferGeometry).setFromPoints([p1, p2]);
    //   rayLine.visible = true;
    // } else {
    //   rayLine.visible = false;
    // }

    const teachCam = teachCamRef.current;
    const teachHelper = teachHelperRef.current;
    if (!teachCam || !teachHelper) return;

    // Position from extrinsics
    teachCam.position.set(props.params.pose.Cx, props.params.pose.Cy, props.params.pose.Cz);

    // Orientation from yaw/pitch/roll (same R you already compute)
    const R = R_fromYPR(props.params.pose.yaw, props.params.pose.pitch, props.params.pose.roll);
    const e = R.elements;

    // Build a Matrix4 from R
    const M4 = new THREE.Matrix4().set(
      e[0], e[1], e[2], 0,
      e[3], e[4], e[5], 0,
      e[6], e[7], e[8], 0,
      0,    0,    0,    1
    );

    // Apply rotation
    teachCam.setRotationFromMatrix(M4);

    // Update helper geometry
    teachHelper.update();
  }, [props.params, props.ray]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}