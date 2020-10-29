import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Presentation from './Presentation';
import Nav from './Nav';
import './App.scss';
import './firebase/config';
import tblogo from './pictures/tblogo.png';

import {firestore} from './firebase/config';
import firebase from 'firebase/app';

import {useUserId} from './firebase/UserProvider';

const Intro = () => {
   
    const [nameOfUser, setNameofUser] = useState();

    const [UserId, setUserId] = useUserId();

    const docRef = firebase.firestore().collection("users").doc(UserId);
    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data().name);
            setNameofUser(doc.data().name);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document (userId)!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    return(
    <div className = "AppBack">
        
        
        <div className = "welcomeIntro">
            <h2>Hello {nameOfUser}, the show is about to start!</h2>
        
        </div>
        <div >
        <Router>
        <Nav/>
        <Route path= "/presentation" component = {Presentation} />
        </Router>
        </div>
    </div>
    )
    
    
};

export default hot(module)(Intro);