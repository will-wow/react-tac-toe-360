export interface AudioOptions {
  source: any;
  autoPlay?: boolean;
  is3d?: boolean;
  muted?: boolean;
  volume?: number;
  loop?: boolean;
  position: AudioPosition;
}

export type AudioPosition = [number, number, number];
