import { Reducer } from "redux";
import * as R from "ramda";
import * as Location from "./location";

import {
  START_GAME,
  END_GAME,
  MOVE,
  START_INTERVAL,
  CLEAR_INTERVAL,
  SPHERE_FOUND
} from "./actions";

interface SphereState {
  gameStarted: boolean;
  interval: number | null;
  location: Location.t;
  sphereMoves: number;
  spheresFound: number;
}

const initialState: SphereState = {
  gameStarted: false,
  interval: null,
  location: Location.create(),
  sphereMoves: 0,
  spheresFound: 0
};

const reducer: Reducer<SphereState> = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME: {
      return {
        ...state,
        gameStarted: true
      };
    }
    case END_GAME: {
      return initialState;
    }
    case SPHERE_FOUND: {
      return R.evolve({ spheresFound: R.add(1) }, state);
    }
    case MOVE: {
      const location: Location.t = action.data;
      return R.evolve(
        {
          location: R.always(location),
          sphereMoves: R.add(1)
        },
        state
      );
    }
    case START_INTERVAL: {
      const interval = action.data;
      return { ...state, interval };
    }
    case CLEAR_INTERVAL: {
      return { ...state, interval: false };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
