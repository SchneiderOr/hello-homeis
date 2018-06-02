import { combineReducers } from "redux";
import guide from "./guide";
import guides from "./guides";
const rootReducer = combineReducers({
  guide,
  guides
});

export default rootReducer;
