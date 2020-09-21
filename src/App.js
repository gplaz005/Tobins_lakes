import React from 'react';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Presentation from './Presentation';
import Nav from './Nav';
import './App.scss';

import tblogo from '../tblogo.png';
import stage from '../stage.jpg'


const App = () => (
   
    
    <div className = "example">
    <img src ={stage} className = "AppBack" />
        <img src ={tblogo} className = "logoHome" />
        
        <div className = "welcome">
            <h2>Hello Dennis, the show is about to start!</h2>
     </div>
     <div className = "welcomeLink">
            <Router>
        <Nav/>
        <Route path= "/presentation" component = {Presentation} />
        </Router>
        </div>
    </div>
    
    
);

export default hot(module)(App);