import * as R from "ramda";

export const log = (...args) => data => {
  const logArgs = args.concat([data]);
  console.log(...logArgs);
  return data;
};

export const logIf = (predicate, ...args) => data =>
  predicate(data) ? log(...args)(data) : data;

export const mapIndexed = R.addIndex(R.map);

export const intersects = (xs, ys) =>
  R.pipe(
    R.map(x => R.contains(x, ys)),
    R.all(R.identity)
  )(xs);

export const maxOf = <T>(fn: (x: T) => any): ((xs: T[]) => T) =>
  R.pipe(
    R.sortBy(fn),
    lastElement
  );

export const square = (x: number): number => x * x;

export const sample = <T>(list: T[]): T => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};

const lastElement: <T>(xs: T[]) => T = R.last;
