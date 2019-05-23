import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import app from "./modules/app";

export default history =>
  combineReducers({
    router: connectRouter(history),
    app // rest of your reducers
  });
