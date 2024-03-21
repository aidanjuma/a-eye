import { Vector2, Vector3 } from "three";

export interface RegistryEntry {
  name: string;
  path: string;
}

export interface Depth {
  position: Vector2 | Vector3; // V2 (Screen Space) | V3 (World Space)
  isVertexVisible: boolean;
}

export interface Space {
  cameraPosition: Vector3;
  screenSpace?: Depth;
  worldSpace?: Depth;
}

export interface SceneMetadata {
  canvasSize: Vector2;
  space: Space;
}

export interface NLPosition {
  objectName?: string;
  objectPath?: string;
  positionalKeywords: string[];
}
