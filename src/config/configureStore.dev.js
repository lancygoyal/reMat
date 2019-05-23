import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createRootReducer from "../redux";

export default history => {
  return createStore(
    createRootReducer(history),
    composeWithDevTools(
      applyMiddleware(logger, thunk, routerMiddleware(history))
    )
  );
};
