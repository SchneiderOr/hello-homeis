import { combineReducers } from "redux";
import post from "./post";
import guides from "./guides";
const rootReducer = combineReducers({
  post,
  guides
});

export default rootReducer;
