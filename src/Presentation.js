import React, {useState} from 'react';
import { hot } from 'react-hot-loader';
import snow from '../snow.png';
import snow2 from '../snow2.png';


const Presentation = () => {

    

    const [counter, setCounter] = useState([snow,snow2]);
    
    return(
        <div className="pres">
        <h1>presentationComponent</h1>
        <h3>here are your Backdrops:</h3>
        {counter.map((ki, index)=>
        <img src ={ki} key = {index}/>
        )}

    </div>
    );

}


       

export default hot(module)(Presentation);