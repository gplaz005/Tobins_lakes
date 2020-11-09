import React, {useState} from 'react';
import {connect} from 'react-redux';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import reel from './pictures/reel.png';
import './App.scss';
import NavToShow from './NavToShow'; //router
import ShowTime from './ShowTime';
import BackdropOnList from './BackdropOnList';


import './firebase/config';



const Presentation = ({backdrops}) => {
    
    
    console.log(backdrops);
    return(
        
        
    <div className ="presentation">
        
        <div className = "presentationTitle">  <h1>Backdrops Sequence</h1>
    
        </div>
        <div className = "welcomeLink">
        <Router>
        <NavToShow/>
        <Route path= "/ShowTime" component = {ShowTime} />
        </Router>
        </div>

            <div className = "imageStyle" >
            <img src ={reel} height = "80" width = "600" />
            {backdrops.map((ki, index)=>
            <BackdropOnList image = {ki} dropKey = {index} />
            )}
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