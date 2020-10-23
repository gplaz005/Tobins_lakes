import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({

    apiKey: "AIzaSyDM4BTJMQt793FcCRNXjGxpsA5uVt9JwN8",
    authDomain: "tobinslake-45d4a.firebaseapp.com",
    databaseURL: "https://tobinslake-45d4a.firebaseio.com",
    projectId: "tobinslake-45d4a",
    storageBucket: "tobinslake-45d4a.appspot.com",
    messagingSenderId: "112256588109",
    appId: "1:112256588109:web:8db62f388ab9ff96b1bf04"
    
});

console.log(firebase.app().options);

export const firestore = firebase.firestore(); 