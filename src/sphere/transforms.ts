export type PositionTrasnsforms = TranslateTransform[];

type TranslateTransform = TranslateX | TranslateY | TranslateZ;

interface TranslateX {
  translateX: number;
}

interface TranslateY {
  translateY: number;
}

interface TranslateZ {
  translateZ: number;
}
