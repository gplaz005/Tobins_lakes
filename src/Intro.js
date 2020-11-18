import React, { useState , useEffect } from 'react';
import {connect} from 'react-redux';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Presentation from './Presentation';
import Nav from './Nav';
import './App.scss';
import './firebase/config';

import firebase from 'firebase/app';

import {useUserId} from './firebase/UserProvider';
import {fillarray} from './actions';

const Intro = ({backdrops, onFillArray}) => {
   
    
    //getting user from firebase
    const [nameOfUser, setNameofUser] = useState();
    const [UserId, setUserId] = useUserId();

    let backdropsarray = []


    const getUser = async () =>{
        const docRef = firebase.firestore().collection("users").doc(UserId);
        await docRef.get().then(function(doc) {
        if (doc.exists) {
            //console.log("Document data:", doc.data().name);
            setNameofUser(doc.data().name);
            console.log("user getter")
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document (userId)!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    }
    
    
    //getting backdrops from firebase to redux store
    
    const getBackdrops = async () => {
        var storageRef = firebase.storage().ref();

    var imagesRef = storageRef.child('images');
     await imagesRef.child('01.png').getDownloadURL().then(function(url) {
        backdropsarray = [url]
        
    }).catch(function(error) {
    // Handle any errors
    });

     await imagesRef.child('02.png').getDownloadURL().then(function(url) {
        backdropsarray = [...backdropsarray, url]
    }).catch(function(error) {
    // Handle any errors
    });
    
    console.log(backdropsarray)
    onFillArray(backdropsarray)
    }

    
    
    useEffect(() =>{
        getUser()
        getBackdrops()
    },[])


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

const mapStateToProps = state => ({
    backdrops: state.backdrops,
});

const mapDispatchToProps = dispatch => ({
   onFillArray: text => dispatch(fillarray(text)),
});


export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(Intro));