import { combineReducers, createStore } from "redux";
import userService from "../service/userService";
// import userService from "../service/userService";
import authenReducer from "./authenReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  auth: authenReducer,
  user: userReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store = createStore(
//   reducer
//   // applyMiddleware(sagaMiddleware)
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const token = JSON.parse(localStorage.getItem("token"));
if (token) {
  userService.getInfo().then((user) => {
    store.dispatch({
      type: "GET_INFO",
      payload: user.data,
    });
  });
}

export default store;
