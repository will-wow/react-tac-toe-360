import * as Location from "./location";

export const START_GAME = "sphere/START_GAME";
export const END_GAME = "sphere/END_GAME";
export const MOVE = "sphere/MOVING";
export const START_INTERVAL = "sphere/START_INTERVAL";
export const CLEAR_INTERVAL = "sphere/CLEAR_INTERVAL";

const timeToMove = 2000;

export const onStartPlaying = () => dispatch => {
  const dispatchRandomMove = makeRandomMove(dispatch);

  dispatchRandomMove();
  const interval = setInterval(dispatchRandomMove, timeToMove);

  dispatch(onStartInterval(interval));
  dispatch(onStartGame());
};

export const onStopPlaying = () => (dispatch, getState) => {
  const {
    sphere: { interval }
  } = getState();

  clearInterval(interval);

  dispatch(onClearInterval());
  dispatch(onEndGame());
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

const makeRandomMove = dispatch => () => dispatch(onMove(Location.random()));
