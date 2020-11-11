import { createStore, combineReducers } from 'redux';
import { backdrops } from './reducers.js';

import './firebase/config';
import firebase from 'firebase/app';
import 'firebase/storage';

 const reducers = {
     backdrops,
 };

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);