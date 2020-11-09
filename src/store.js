import { createStore, combineReducers } from 'redux';
import { backdrops } from './reducers.js';

import snow from './pictures/snow.png';
import snow2 from './pictures/snow2.png';
import snow3 from './pictures/snow3.png';
import snow4 from './pictures/snow4.png';
import snow5 from './pictures/snow5.png';

import './firebase/config';
import firebase from 'firebase/app';
import 'firebase/storage';

const initial = {
  backdrops :[]
}

var storage = firebase.storage();
var storageRef = storage.ref();

storageRef.child('images/01.png').getDownloadURL().then(function(url) {

    initial.backdrops = [url]

}).catch(function(error) {
  // Handle any errors
});



const reducers = {
    backdrops,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer,initial);