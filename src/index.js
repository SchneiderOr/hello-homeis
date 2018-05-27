import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { ConnectedRouter } from "react-router-redux";

import { Provider } from "react-redux";
import configureStore, { history } from "./store/create";
import { Route } from "react-router";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <Route component={App}>
        {/*<Route exact path="/" component={Home} />*/}
        {/*<Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />*/}
      </Route>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
