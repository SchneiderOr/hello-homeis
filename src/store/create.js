import createHistory from "history/createBrowserHistory";

import { routerMiddleware } from "react-router-redux";

import { createStore, applyMiddleware, compose } from "redux";

// Middlewares
import { middleware as reduxPackMiddleware } from "redux-pack";
import { createLogger } from "redux-logger";

// import api from "../helpers/fetch";
import rootReducer from "../reducers";

export const history = createHistory();
const router = routerMiddleware(history);
const logger = createLogger();
const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(router, reduxPackMiddleware, logger))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
