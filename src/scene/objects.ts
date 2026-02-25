import * as THREE from "three";

export type WireObject = {
  vertices: THREE.Vector3[];
  edges: Array<[number, number]>;
};

export function makeHouse(): WireObject {
  const V = [
    new THREE.Vector3(-1, 0, -1), // 0
    new THREE.Vector3( 1, 0, -1), // 1
    new THREE.Vector3( 1, 0,  1), // 2
    new THREE.Vector3(-1, 0,  1), // 3
    new THREE.Vector3(-1, 2, -1), // 4
    new THREE.Vector3( 1, 2, -1), // 5
    new THREE.Vector3( 1, 2,  1), // 6
    new THREE.Vector3(-1, 2,  1), // 7
    new THREE.Vector3(0, 3, -1),  // 8 roof ridge
    new THREE.Vector3(0, 3,  1),  // 9 roof ridge
  ];

  const E: Array<[number, number]> = [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7],
    [4,8],[5,8],[7,9],[6,9],
    [8,9]
  ];

  return { vertices: V, edges: E };
}