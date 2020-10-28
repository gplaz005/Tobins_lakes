import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route, Link,Redirect,
    BrowserRouter} from 'react-router-dom';
import Presentation from './Presentation';

import Intro from './Intro';
import ShowTime from './ShowTime';
import './App.scss';
import './firebase/config';
import IntroLink from './IntroLink';
import {UserProvider} from './firebase/UserProvider';


const App = () => (
   

    
    <UserProvider>
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={IntroLink}/>
        <Route exact path= "/intro/:id" component = {Intro} />
        <Route path= "/presentation" component = {Presentation} />
        <Route path= "/ShowTime" component = {ShowTime} />
        </Switch>
        </BrowserRouter>
    </UserProvider>


    
);

export default hot(module)(App);