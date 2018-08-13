import { combineReducers } from "redux";

import mainMenu from "./main-menu/reducer";
import sphere from "./sphere/reducer";

const rootReducer = combineReducers({ mainMenu, sphere });

export default rootReducer;
