import React, {useState} from 'react';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Presentation from './Presentation';
import Nav from './Nav';
import './App.scss';

import snow from '../snow.png';
import snow2 from '../snow2.png';
import snow3 from '../snow3.png';
import snow4 from '../snow4.png';
import snow5 from '../snow5.png';


const ShowTime = () => {

    const [backdrops, setCounter] = useState([snow,snow2,snow3,snow4,snow5]);

    const [axis, setAxis] = useState(0);
    const goLeft = () => {
        axis === 0 ? setAxis(-100 * (backdrops.length - 1)) : setAxis(axis+100);
    }
    const goRight = () => {
        axis === -100 * (backdrops.length - 1) ? setAxis(0) : setAxis(axis-100);
    }

    return(
        <div className ="showTime">
        {/*<img src ={snow}  />*/}
        
            {
               backdrops.map((item,index)=>
            <img className = "backdrop" 
            src = {item}    
            key = {index}  
                    style = {{transform: `translateX(${axis}%)`}} /> 
                )
            }
        
        <button id= "goleft" onClick ={goLeft} >left</button>
        <button id = "goright" onClick ={goRight}>right</button>

        
    </div>
    );
    


}

    
    


export default hot(module)(ShowTime);