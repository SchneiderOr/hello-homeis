import { handle } from "redux-pack";
import { endpoints } from "../config";
const LOAD_GUIDE = "LOAD_GUIDE";
const initialState = {
  isLoading: false,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_GUIDE:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isLoading: true,
          error: null
        }),
        finish: prevState => ({ ...prevState, isLoading: false }),
        failure: prevState => ({ ...prevState, error: payload }),
        success: prevState => ({ ...prevState, payload }),
        always: prevState => prevState // unnecessary, for the sake of example
      });
    default:
      return state;
  }
}

export function loadGuide() {
  return {
    type: LOAD_GUIDE,
    promise: fetch(endpoints.guide).then(res => res.json())
  };
}
