import { createStore, combineReducers } from "redux";
import { nameReducer } from './reducers/nameReducer';

export const store = createStore(combineReducers({
  name: nameReducer
}));