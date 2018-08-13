import { NativeModules } from "react-360";
const { AudioModule } = NativeModules;

export interface AudioOptions {
  source: any;
  autoPlay?: boolean;
  is3d?: boolean;
  muted?: boolean;
  volume?: number;
  loop?: boolean;
  position?: AudioPosition;
}

export type AudioPosition = [number, number, number];

export const playSound = (
  handle: string,
  defaultAudioOptions: AudioOptions,
  position: AudioPosition
): void => {
  const audioOptions: AudioOptions = { ...defaultAudioOptions, position };

  AudioModule.destroy(handle);
  AudioModule.createAudio(handle, audioOptions);
  AudioModule.play(handle);
};

export const stopSound = (handle: string): void => AudioModule.destroy(handle);
