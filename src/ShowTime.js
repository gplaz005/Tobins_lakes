import React from 'react';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Presentation from './Presentation';
import Nav from './Nav';
import './App.css';

import snow from '../snow.png';


const ShowTime = () => (

    
    <div className ="showTime">
        <img src ={snow}  />
        <h1>SHow TIME !!!</h1>

        
    </div>
    
);

export default hot(module)(ShowTime);