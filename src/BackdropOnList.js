import React from 'react';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import {connect} from 'react-redux';
import {buttonUp} from './actions.js';
import {buttonDown} from './actions';


const BackdropOnList = ({image,dropKey, upButtonClick, downButtonClik}) => (
   
    
    <div className = "sidePanel">
        <img src ={image}  key = {dropKey} height = "300" width = "600" />
    
        <div className = "sideButtons">
        <button className = "buttons" onClick = { () => upButtonClick(dropKey)}>UP</button>
        <h3 style={{color: 'white', textAlign: 'center'}}>{dropKey}</h3>
        <button className = "buttons"  onClick ={() => downButtonClik(dropKey)}>DOWN</button>
        
        </div>
    </div>
  
);



const mapStateToProps = state => ({
    backdrops: state.backdrops,
});

const mapDispatchToProps = dispatch => ({
    upButtonClick: text => dispatch(buttonUp(text)),
    downButtonClik: text => dispatch(buttonDown(text))
});

export default connect(mapStateToProps,mapDispatchToProps)(hot(module)(BackdropOnList));