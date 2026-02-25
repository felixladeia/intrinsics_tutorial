export type Intrinsics = {
  fx: number;
  fy: number;
  cx: number;
  cy: number;
  skew: number; // keep for completeness; default 0
  width: number;
  height: number;
};

export type Pose = {
  // Camera position in world coords
  Cx: number;
  Cy: number;
  Cz: number;
  // yaw/pitch/roll in radians
  yaw: number;
  pitch: number;
  roll: number;
};

export type Distortion = {
  enabled: boolean;
  k1: number;
  k2: number;
  k3: number;
  p1: number;
  p2: number;
};

export type Params = {
  K: Intrinsics;
  pose: Pose;
  dist: Distortion;
};