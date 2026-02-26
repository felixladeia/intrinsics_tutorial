import * as THREE from "three";

// Sample N points from a BufferGeometry surface
export function samplePointsFromGeometry(geom: THREE.BufferGeometry, n: number): THREE.Vector3[] {
  // Ensure we have indexed triangles
  const g = geom; // TorusKnotGeometry is indexed; no need for BufferGeometryUtils
  const pos = g.getAttribute("position");
  const idx = g.index;

  if (!pos || !idx) {
    // fallback: just take some vertices
    const out: THREE.Vector3[] = [];
    for (let i = 0; i < Math.min(n, pos.count); i++) {
      out.push(new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i)));
    }
    return out;
  }

  // Build triangle areas for weighted sampling
  const triCount = idx.count / 3;
  const areas = new Float32Array(triCount);
  let total = 0;

  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  const ab = new THREE.Vector3(), ac = new THREE.Vector3(), cross = new THREE.Vector3();

  for (let t = 0; t < triCount; t++) {
    const i0 = idx.getX(3 * t);
    const i1 = idx.getX(3 * t + 1);
    const i2 = idx.getX(3 * t + 2);

    a.set(pos.getX(i0), pos.getY(i0), pos.getZ(i0));
    b.set(pos.getX(i1), pos.getY(i1), pos.getZ(i1));
    c.set(pos.getX(i2), pos.getY(i2), pos.getZ(i2));

    ab.subVectors(b, a);
    ac.subVectors(c, a);
    cross.crossVectors(ab, ac);

    const area = 0.5 * cross.length();
    total += area;
    areas[t] = total; // cumulative
  }

  function pickTri(r: number) {
    // binary search cumulative areas
    let lo = 0, hi = triCount - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (r <= areas[mid]) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }

  const out: THREE.Vector3[] = [];
  for (let k = 0; k < n; k++) {
    const r = Math.random() * total;
    const t = pickTri(r);

    const i0 = idx.getX(3 * t);
    const i1 = idx.getX(3 * t + 1);
    const i2 = idx.getX(3 * t + 2);

    a.set(pos.getX(i0), pos.getY(i0), pos.getZ(i0));
    b.set(pos.getX(i1), pos.getY(i1), pos.getZ(i1));
    c.set(pos.getX(i2), pos.getY(i2), pos.getZ(i2));

    // random barycentric
    let u = Math.random();
    let v = Math.random();
    if (u + v > 1) { u = 1 - u; v = 1 - v; }
    const w = 1 - u - v;

    out.push(
      new THREE.Vector3(
        a.x * w + b.x * u + c.x * v,
        a.y * w + b.y * u + c.y * v,
        a.z * w + b.z * u + c.z * v
      )
    );
  }

  return out;
}

// Create an impressive object:
// - 3D: TorusKnot mesh
// - 2D: sampled points from its surface (no edges)
export function makeTorusKnotSampled(nPoints = 900): { mesh: THREE.Mesh; points: THREE.Vector3[] } {
  const geom = new THREE.TorusKnotGeometry(0.9, 0.28, 260, 36);
  const mat = new THREE.MeshNormalMaterial({ flatShading: false });
  const mesh = new THREE.Mesh(geom, mat);
  mesh.position.set(0, 1.2, 0);

  // Sample points in the mesh's local space, then offset to world
  const localPts = samplePointsFromGeometry(geom, nPoints);
  const worldPts = localPts.map(p => p.clone().add(mesh.position));

  return { mesh, points: worldPts };
}