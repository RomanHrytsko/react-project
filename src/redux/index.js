import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reduces";

import thunk from 'redux-thunk'
export const store = createStore(reducer,applyMiddleware(thunk))