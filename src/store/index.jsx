import { combineReducers, createStore } from "redux";
import authenReducer from "./authenReducer";
import userReducer from "./userReducer";

const store = createStore(
  combineReducers({
    auth: authenReducer,
    user: userReducer,
  })
);

export default store;
