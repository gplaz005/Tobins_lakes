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
    const [Nobackdrops, setNoBackdrops] = useState();
    const [UserId, setUserId] = useUserId();

    let actualDate = new Date()
    let backdropsarray = []
    let backdropsId = []


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
        let timeDueObject
        //get first user backdrops Id's
    const docRef = firebase.firestore().collection("users").doc(UserId);
    await docRef.get().then(function(doc) {
        if (doc.exists) {
            backdropsId = doc.data().Abackdrops
            timeDueObject = doc.data().due.toDate()
            console.log(timeDueObject)
            console.log(actualDate)
            console.log("backdrop ids getter")
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document (userId)!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    console.log(backdropsId)

    if(actualDate < timeDueObject){
        console.log("you are on time")
    //get backdrops from list of ids
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images');

        for(let i = 0; i < backdropsId.length; i++){
        console.log(backdropsId[i])
        await imagesRef.child(backdropsId[i]).getDownloadURL().then(function(url) {
            backdropsarray = [...backdropsarray, url]
            
        }).catch(function(error) {
        console.log("not right backdrop id")
        });
        }
    }else{
        setNoBackdrops("you have no Backdrops to show")
    }
    console.log(backdropsarray)
    // this function send backdrops to redux store
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
        <div className ="presentationTitle">
            <h4>{Nobackdrops}</h4>
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