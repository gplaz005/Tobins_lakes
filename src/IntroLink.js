import {Link} from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Presentation from './Presentation';
import Nav from './Nav';
import Intro from './Intro';
import './App.scss';
import './firebase/config';
import NavToIntro from './NavToIntro';

import {firestore} from './firebase/config';
import firebase from 'firebase/app';

import {useUserId} from './firebase/UserProvider';



const IntroLink = props => {

    const [UserId, setUserId] = useUserId();

    const [user, setUser] = useState('');
    const [enroll,setenroll] = useState(false);
    const [noUser,setNoUser] = useState("");


    useEffect(() => {
        setenroll()
    },[user])

    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        const docRef = firebase.firestore().collection("users");
        
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                if(doc.data().userName == user){
                    //console.log("found")
                    //console.log(UserId);
                    setUserId("25")
                    props.history.push(`/Intro/${doc.id}`);
                    setenroll(true);
                }
            }
            );
        });
        if(!enroll){
            console.log("notfound")
            setNoUser("not user was found")
        }
    }

    return(
    
        <div>
        <form onSubmit={handleSubmit}>
        <label>
            Frirst Name:
            <input
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            />
         </label>
        <input type="submit" value="Submit" />
        </form>       
        <div>
        <h3>{UserId}</h3>
        <h3>{noUser}</h3>
        </div>

        

     </div>
    ) 
}

export default hot(module)(IntroLink);