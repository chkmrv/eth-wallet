import { combineReducers } from "redux";
import dataReducer from "./global-reducers/data-reducer";
import urlReducer from "./global-reducers/url-reducer";

export const makeRootReducer = () =>
  combineReducers({
    eth: dataReducer,
    url: urlReducer,
  });

export default makeRootReducer;
