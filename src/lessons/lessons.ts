import type { Params } from "../types";

export type LessonStep = {
  id: string;
  title: string;
  body: string;
  apply: (p: Params) => Params;
  // list of control keys to lock while this step is active
  lock?: Array<
    | "fx" | "fy" | "cx" | "cy" | "skew"
    | "Cx" | "Cy" | "Cz" | "yaw" | "pitch" | "roll"
    | "dist"
  >;
};

function clone<T>(x: T): T {
  return structuredClone(x);
}

export const LESSONS: LessonStep[] = [
  {
    id: "intro",
    title: "Welcome: What is projection?",
    body:
      "We project 3D points to pixels with u = fx*x + cx and v = fy*y + cy (after dividing by depth). " +
      "Try moving the camera (extrinsics) vs changing fx/fy (intrinsics).",
    apply: (p) => {
      const q = clone(p);
      q.K.fx = 800; q.K.fy = 800; q.K.cx = 320; q.K.cy = 240; q.K.skew = 0;
      q.pose.Cx = 2; q.pose.Cy = 2; q.pose.Cz = 4;
      q.pose.yaw = -25 * Math.PI / 180;
      q.pose.pitch = -10 * Math.PI / 180;
      q.pose.roll = 0;
      q.dist.enabled = false;
      return q;
    }
  },
  {
    id: "focal",
    title: "Intrinsics: Focal length (fx, fy)",
    body:
      "Increase fx/fy: the image zooms in (narrower field of view). " +
      "Decrease fx/fy: zoom out (wider view). Notice pixels move away/toward the principal point.",
    apply: (p) => {
      const q = clone(p);
      q.pose.Cx = 2; q.pose.Cy = 2; q.pose.Cz = 4;
      q.pose.yaw = -20 * Math.PI / 180;
      q.pose.pitch = -10 * Math.PI / 180;
      q.dist.enabled = false;
      return q;
    },
    lock: ["Cx","Cy","Cz","yaw","pitch","roll","dist"]
  },
  {
    id: "principal",
    title: "Intrinsics: Principal point (cx, cy)",
    body:
      "Move cx/cy: you're shifting where the optical axis hits the image. " +
      "Everything appears translated relative to the new principal point crosshair.",
    apply: (p) => {
      const q = clone(p);
      q.K.fx = 800; q.K.fy = 800;
      q.K.cx = 320; q.K.cy = 240;
      q.dist.enabled = false;
      return q;
    },
    lock: ["fx","fy","Cx","Cy","Cz","yaw","pitch","roll","dist"]
  },
  {
    id: "extrinsics",
    title: "Extrinsics: Move & rotate the camera",
    body:
      "Extrinsics change the camera pose in the world. " +
      "Translate (Cx,Cy,Cz) and rotate (yaw,pitch,roll) to see perspective changes without changing K.",
    apply: (p) => {
      const q = clone(p);
      q.K.fx = 800; q.K.fy = 800; q.K.cx = 320; q.K.cy = 240; q.K.skew = 0;
      q.dist.enabled = false;
      return q;
    },
    lock: ["fx","fy","cx","cy","skew","dist"]
  },
  {
    id: "distortion",
    title: "Lens distortion",
    body:
      "Enable distortion to see barrel/pincushion warping. " +
      "k1 < 0 often looks like barrel; k1 > 0 like pincushion. Tangential (p1,p2) creates asymmetric warp.",
    apply: (p) => {
      const q = clone(p);
      q.dist.enabled = true;
      q.dist.k1 = -0.25; q.dist.k2 = 0.08; q.dist.k3 = 0.0;
      q.dist.p1 = 0.0; q.dist.p2 = 0.0;
      return q;
    }
  },
  {
    id: "ray",
    title: "Click pixel → 3D ray",
    body:
      "Click a pixel on the image plane. We'll compute a 3D ray from the camera center through that pixel. " +
      "If distortion is enabled, we undistort the clicked normalized point before creating the ray.",
    apply: (p) => clone(p)
  }
];