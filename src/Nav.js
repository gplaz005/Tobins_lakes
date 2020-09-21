import React from 'react';
import { hot } from 'react-hot-loader';
import {Link} from 'react-router-dom';



const Nav = () => (
    <nav>
    <div >
        <ul>
            <Link to="/presentation">
            <li>Click here to see your backsrops</li>
            </Link>
        </ul>
    </div>
    </nav>
);

export default hot(module)(Nav);