import {applyMiddleware, combineReducers, createStore} from "redux";
import booksReducer from '../reducers/booksReducer';
import thunk from "redux-thunk";

let reducers = {
    books: booksReducer
};

export const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
