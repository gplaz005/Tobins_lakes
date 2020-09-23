import React, {useState} from 'react';
import {connect} from 'react-redux';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import snow from './pictures/snow.png';
import snow2 from './pictures/snow2.png';
import snow3 from './pictures/snow3.png';
import snow4 from './pictures/snow4.png';
import snow5 from './pictures/snow5.png';
import reel from './pictures/reel.png';
import './App.scss';
import NavToShow from './NavToShow'; //router
import ShowTime from './ShowTime';
import BackdropOnList from './BackdropOnList';

const Presentation = ({backdrops}) => {


    
    return(

    <div className ="presentation">
        <div className= "container" >
        <h1 className = "presentationTitle">Here are your backdrops</h1>
        <Router>
        <NavToShow/>
        <Route path= "/ShowTime" component = {ShowTime} />
        </Router>
        
            <div className = "imageStyle" >
            <img src ={reel} height = "80" width = "600" />
            {backdrops.map((ki, index)=>
            <BackdropOnList image = {ki} dropKey = {index} />
            )}
            </div>

        </div>
    </div>
    );

}
       
const mapStateToProps = state => ({
    backdrops: state.backdrops,
});

const mapDispatchToProps = dispatch => ({
   
});


export default connect(mapStateToProps)(hot(module)(Presentation));