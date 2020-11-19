import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import reel from './pictures/reel.png';
import './App.scss';
import NavToShow from './NavToShow'; //router
import ShowTime from './ShowTime';
import BackdropOnList from './BackdropOnList';
import {useUserId} from './firebase/UserProvider';

import './App.scss';
import './firebase/config';

import firebase from 'firebase/app';


const Presentation = ({backdrops}) => {

    const [UserId, setUserId] = useUserId();
    //var timeDue = ""
    const [timeDue, setTimeDue] = useState();

    // get due time to display for backdrops
    const getDueTime = async () => {
    const docRef = firebase.firestore().collection("users").doc(UserId);
    await docRef.get().then(function(doc) {
        if (doc.exists) {
            let timeDueObject = doc.data().due.toDate()
            setTimeDue(timeDueObject.toString())
            console.log(typeof timeDue)
            console.log("time to display")
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document (userId)!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
    }  

   useEffect(() =>{
       getDueTime()
   },[])
        
    
    
    return(
        
        
    <div className ="presentation">
        
        <div className = "presentationTitle">  <h1>Backdrops Sequence</h1>
        
        </div>
        <div className = "welcomeLink">
        <Router>
        <NavToShow/>
        <Route path= "/ShowTime" component = {ShowTime} />
        </Router>
        </div>

            <div className = "imageStyle" >
            <img src ={reel} height = "80" width = "600" />
            {backdrops.map((ki, index)=>
            <BackdropOnList image = {ki} dropKey = {index} />
            )}
            </div>
        <h3 className = "presentationTitle"> Your backdrops are available until:</h3>
        <h3 className = "presentationTitle">{timeDue}</h3>
        
    </div>
    );

}
       
const mapStateToProps = state => ({
    backdrops: state.backdrops,
});

const mapDispatchToProps = dispatch => ({
   
});


export default connect(mapStateToProps)(hot(module)(Presentation));