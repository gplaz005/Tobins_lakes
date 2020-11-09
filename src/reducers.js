import {BUTTON_UP, BUTTON_DOWN } from './actions';

export const backdrops = (state = [] , action) => {
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