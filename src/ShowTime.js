import React, {useState} from 'react';
import { hot } from 'react-hot-loader';
import {connect} from 'react-redux';
import './App.scss';

const ShowTime = ({backdrops}) => {

    const [axis, setAxis] = useState(0);
    const goLeft = () => {
        axis === 0 ? setAxis(-100 * (backdrops.length - 1)) : setAxis(axis+100);
    }
    const goRight = () => {
        axis === -100 * (backdrops.length - 1) ? setAxis(0) : setAxis(axis-100);
    }

    return(
        <div className ="showTime">
        
            {
               backdrops.map((item,index)=>
            <img className = "backdrop" 
            src = {item}    
            key = {index}  
                    style = {{transform: `translateX(${axis}%)`}} /> 
                )
            }
        
        <button id= "goleft" onClick ={goLeft} >left</button>
        <button id = "goright" onClick ={goRight}>right</button>

        
    </div>
    );

}

const mapStateToProps = state => ({
    backdrops: state.backdrops,
});

const mapDispatchToProps = dispatch => ({
   
});


export default connect(mapStateToProps)(hot(module)(ShowTime));
