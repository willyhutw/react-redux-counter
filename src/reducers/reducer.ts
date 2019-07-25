import { combineReducers } from "redux"
import { counterStore } from './counter';
import { postsStore } from './posts';

export default combineReducers({
  counterStore,
  postsStore
})