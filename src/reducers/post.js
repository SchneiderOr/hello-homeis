import { handle } from "redux-pack";

const LOAD_GUIDE_POST = "LOAD_GUIDE_POST";
const initialState = {
  isLoading: false,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_GUIDE_POST:
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

export function loadPost() {
  return {
    type: LOAD_GUIDE_POST,
    promise: fetch(
      "https://gist.githubusercontent.com/asafda/487838553bd12070f46acb028e69a4ac/raw/c6de80cde02ca17231ce68992a5311e2b358aa30/getPost.js"
    ).then(res => res.json())
  };
}
