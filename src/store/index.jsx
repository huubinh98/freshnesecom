import { combineReducers, createStore } from 'redux';
import authenReducer from './authenReducer';

const store = createStore(combineReducers({
    auth: authenReducer
}));

export default store