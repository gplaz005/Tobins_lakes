import React ,{useState} from 'react';
import snow from './pictures/snow.png';
import snow2 from './pictures/snow2.png';
import snow3 from './pictures/snow3.png';
import snow4 from './pictures/snow4.png';
import snow5 from './pictures/snow5.png';
import {BUTTON_UP, BUTTON_DOWN } from './actions';

//const [backdropsInit, setBackdrops] = useState([snow,snow2,snow3,snow4,snow5]);

let backdropss = [snow,snow2,snow3,snow4,snow5];

export const backdrops = (state = backdropss, action) => {
    const { type, payload } = action;

    switch (type) {
    case BUTTON_UP: {
        var number  = payload;
        var position = number.index
        
        if(position > 0){
        var copiedArray = state;
        [copiedArray[position -1], copiedArray[position]] = 
        [copiedArray[position], copiedArray[position - 1]];

        const temp = [
         ...state.slice(0 ,state.length)
        ]
        return state = temp;
        }
        
      return state;  
    }
    case BUTTON_DOWN: {
        var number  = payload;
        var position = number.index
        
        if(position < state.length - 1){
        var copiedArray = state;
        [copiedArray[position], copiedArray[position + 1]] = 
        [copiedArray[position + 1], copiedArray[position]];

        const temp = [
         ...state.slice(0 ,state.length)
        ]
        return state = temp;
        }
        
      return state;  
    }
    
    default:
        return state;
    }
}