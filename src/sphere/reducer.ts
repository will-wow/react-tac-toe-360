import { Reducer } from "redux";
import * as Location from "./location";

import {
  START_GAME,
  END_GAME,
  MOVE,
  START_INTERVAL,
  CLEAR_INTERVAL
} from "./actions";

interface SphereState {
  gameStarted: boolean;
  interval: number | null;
  location: Location.t;
}

const initialState: SphereState = {
  gameStarted: false,
  interval: null,
  location: Location.create()
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
      return {
        ...state,
        gameStarted: false
      };
    }
    case MOVE: {
      const location = action.data;
      return { ...state, location };
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
