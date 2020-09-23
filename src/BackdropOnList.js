import React from 'react';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import {connect} from 'react-redux';
import {buttonUp} from './actions.js';
import {buttonDown} from './actions';


const BackdropOnList = ({image,dropKey, upButtonClick, downButtonClik}) => (
   
    
    <div className = "sideButtons">
        <img src ={image}  key = {dropKey} height = "300" width = "600" />
        <div>
        <button onClick = { () => upButtonClick(dropKey)}>Up</button>
        <h3>{dropKey}</h3>
        <button onClick ={() => downButtonClik(dropKey)}>down</button>
    
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