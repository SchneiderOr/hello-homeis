import React from "react";
import ReactDOM from "react-dom";

import { ConnectedRouter } from "react-router-redux";
import { Route, Switch } from "react-router";

import { Provider } from "react-redux";
import configureStore, { history } from "./store/create";

import App from "./App";
import Home from "./routes/Home";
import NotFound from "./components/NotFound";

import registerServiceWorker from "./registerServiceWorker";

import { ThemeProvider } from "styled-components";

import theme from "./config/theme";
import "./config/base-style";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
