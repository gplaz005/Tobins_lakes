import React from 'react';
import { hot } from 'react-hot-loader';
import {Link} from 'react-router-dom';



const NavToIntro = props => {


    

        return(
            <nav className = "positionLink">
            <div >
                <ul >
                    
                    <Link to="/intro">
                    <li className = "welcomeLink">Login</li>
                    </Link>
                </ul>
            </div>
            </nav>
            );
    
    
}

export default hot(module)(NavToIntro);