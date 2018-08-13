import * as R from "ramda";

export const getSphereInterval: (state) => number = R.path([
  "sphere",
  "interval"
]);
