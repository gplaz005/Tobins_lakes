import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route, Link,Redirect,
    useHistory,
    useLocation,
    BrowserRouter} from 'react-router-dom';
import Presentation from './Presentation';
import Nav from './Nav';
import Intro from './Intro';
import ShowTime from './ShowTime';
import './App.scss';
import './firebase/config';
import NavToIntro from './NavToIntro';

import {firestore} from './firebase/config';
import firebase from 'firebase/app';
import IntroLink from './IntroLink';


const App = () => (
   

    
        
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={IntroLink}/>
    <Route exact path= "/intro" component = {Intro} />
    <Route path= "/presentation" component = {Presentation} />
    <Route path= "/ShowTime" component = {ShowTime} />
    </Switch>
    </BrowserRouter>
    


    
);

export default hot(module)(App);