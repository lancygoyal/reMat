import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import configureStore from "./config/configureStore";

import Routes from "./config/routes";

const history = createBrowserHistory();
const store = configureStore(history);

export default () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes {...store} />
      </ConnectedRouter>
    </Provider>
  );
};
