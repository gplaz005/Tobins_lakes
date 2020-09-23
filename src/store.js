import { createStore, combineReducers } from 'redux';
import { backdrops } from './reducers.js';

const reducers = {
    backdrops,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);