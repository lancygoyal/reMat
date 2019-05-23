import { applyMiddleware, createStore, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import createRootReducer from "../redux";

export default history => {
  return createStore(
    createRootReducer(history),
    compose(applyMiddleware(thunk, routerMiddleware(history)))
  );
};
