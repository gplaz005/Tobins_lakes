import React from 'react';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Presentation from './Presentation';
import Nav from './Nav';


const App = () => (

    <Router>
    <div className="App">
        <h1>Let's create</h1>
        <Nav/>
        <Route path= "/presentation" component = {Presentation} />
    </div>
    </Router>
);

export default hot(module)(App);