import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import WatchListReducer from "./watchListReducer";

const rootReducer = combineReducers({ watchListReducer: WatchListReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
