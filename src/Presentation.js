import React, {useState} from 'react';
import { hot } from 'react-hot-loader';
import snow from '../snow.png';
import snow2 from '../snow2.png';
import snow3 from '../snow3.png';
import snow4 from '../snow4.png';
import snow5 from '../snow5.png';
import reel from '../reel.png';
import reelBack from '../reelBack.jpg';
import './App.css';



const Presentation = () => {

    const [counter, setCounter] = useState([snow,snow2,snow3,snow4,snow5]);
    
    return(
        <div className= "container" >
        <h1>presentationComponent</h1>
        <h3>here are your Backdrops:</h3>
            <div className = "imageStyle" >
            <img src ={reel} height = "80" width = "600" />
            {counter.map((ki, index)=>
            <img src ={ki}  key = {index} height = "300" width = "600" />
            )}
            </div>

    </div>
    );

}
       


export default hot(module)(Presentation);