import * as R from "ramda";
import { AudioPosition } from "./audio-module";
import { PositionTrasnsforms } from "./transforms";

import * as SphericalCoordinates from "./spherical-coordinates";

export interface t {
  x: number;
  y: number;
  z: number;
}

export const random = (): t =>
  SphericalCoordinates.toLocation(SphericalCoordinates.random());

export const toPositionTransforms = ({ x, y, z }: t): PositionTrasnsforms => [
  { translateX: x },
  { translateY: y },
  { translateZ: z }
];

export const toAudioPosition = ({ x, y, z }: t): AudioPosition => [x, y, z];
