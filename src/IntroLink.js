import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import './firebase/config';
import firebase from 'firebase/app';
import 'firebase/storage';

import {useUserId} from './firebase/UserProvider';

import tblogo from './pictures/tblogo.png';



const IntroLink = props => {

    const [UserId, setUserId] = useUserId();

    const [user, setUser] = useState('');
    //const [enroll,setenroll] = useState(false);
    const [noUser,setNoUser] = useState("");

    

    

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let enroll = false
        
        const docRef = firebase.firestore().collection("users");
        
         await docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                if(doc.data().userName == user && enroll == false ){  
                    enroll = true
                    setUserId(doc.id)
                    console.log("inside handleeach")
                    //props.history.push(`/Intro/${doc.id}`);
                    props.history.push("/Intro");
                }
            });
            if(!enroll){
                console.log("notfound")
                setNoUser('not user was found \nUser name is case sensitive \nTry again or Contact Us')
            }
            
        });
        
    }
    

    return(
    
        <div className = "IntroBack">
            <img src ={tblogo} className = "logoHome" />
        
       
        <div className = "welcomeBooth">
        <form onSubmit={handleSubmit}>
        <label>
            User Name:
            <input
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            />
         </label>
        <input type="submit" value="Submit" />
        </form>
        </div>
        <div className = "welcomeAlert">
        <h3>{noUser}</h3>
        </div>       
        
        <div>
        <h3>{UserId}</h3>
        </div>

        

     </div>
    ) 
}

export default hot(module)(IntroLink);