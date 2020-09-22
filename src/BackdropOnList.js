import React from 'react';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';




const BackdropOnList = ({image,dropKey}) => (
   
    
    <div className = "sideButtons">
        <img src ={image}  key = {dropKey} height = "300" width = "600" />
        <div>
        <button onClick = {upButton}>Up</button>
        <h3>{dropKey}</h3>
        <button onClick ={downButton}>down</button>
    
        </div>
    </div>
  
);

const upButton = () => {
    return(
        console.log("you cliked up")
    );
}

const downButton = () => {
    return(
        console.log("you cliked Down")
    );
}

export default hot(module)(BackdropOnList);