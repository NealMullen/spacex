import launchListReducer from "./launchList";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  launchList: launchListReducer
});

export default allReducers;
