import * as Location from "./location";

import { getSphereInterval } from "./selectors";

export const START_GAME = "sphere/START_GAME";
export const END_GAME = "sphere/END_GAME";
export const MOVE = "sphere/MOVING";
export const START_INTERVAL = "sphere/START_INTERVAL";
export const CLEAR_INTERVAL = "sphere/CLEAR_INTERVAL";
export const SPHERE_FOUND = "sphere/SPHERE_FOUND";

const timeToMove = 2000;

export const onStartPlaying = () => (dispatch, getState) => {
  restartInterval(dispatch, getState());
  dispatch(onStartGame());
};

export const onStopPlaying = () => (dispatch, getState) => {
  const interval = getSphereInterval(getState());
  clearInterval(interval);

  dispatch(onClearInterval());
  dispatch(onEndGame());
};

export const onSphereFound = () => (dispatch, getState) => {
  restartInterval(dispatch, getState());
  dispatch({ type: SPHERE_FOUND });
};

const onStartGame = () => ({ type: START_GAME });
const onEndGame = () => ({ type: END_GAME });

const onStartInterval = (interval: number) => ({
  type: START_INTERVAL,
  data: interval
});

const onClearInterval = () => ({
  type: CLEAR_INTERVAL
});

const onMove = (location: Location.t) => ({
  type: MOVE,
  data: location
});

const makeRandomMove = dispatch => () => {
  dispatch(onMove(Location.random()));
};

const restartInterval = (dispatch, state) => {
  const oldInterval = getSphereInterval(state);

  const dispatchRandomMove = makeRandomMove(dispatch);

  clearInterval(oldInterval);

  dispatchRandomMove();
  const interval = setInterval(dispatchRandomMove, timeToMove);

  dispatch(onStartInterval(interval));
};
