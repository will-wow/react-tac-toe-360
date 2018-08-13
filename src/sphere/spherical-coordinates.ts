import * as _ from "lodash";
import * as Location from "./location";

interface t {
  radius: number;
  theta: number;
  phi: number;
}

export const random = (): t => {
  const radius = _.random(5, 10, true);
  const theta = _.random(0, Math.PI, true);
  const phi = _.random(0, Math.PI, true);

  return {
    radius,
    theta,
    phi
  };
};

export const toLocation = ({ radius, theta, phi }: t): Location.t => {
  const x = radius * Math.sin(theta) * Math.cos(phi);
  const y = radius * Math.sin(theta) * Math.sin(phi);
  const z = radius * Math.cos(theta);

  return { x, y, z };
};
