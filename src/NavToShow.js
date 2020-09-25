import React from 'react';
import { hot } from 'react-hot-loader';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const NavToShow = () => (
    <nav>
    <div >
        <ul>
            <Link to="/ShowTime">
            <li className = "welcomeLink">click here to start your presentation</li>
            </Link>
        </ul>
    </div>
    </nav>
);

export default hot(module)(NavToShow);