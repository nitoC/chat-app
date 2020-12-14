 //import firebase from'firebaase';
 import firebase from 'firebase';
 const config={
    apiKey: "AIzaSyAHVdOGmBbSGEA5LP9_DUmCAyNKkOrxYnc",
    authDomain: "chatapp-cd573.firebaseapp.com",
    databaseURL: "https://chatapp-cd573.firebaseio.com",
    projectId: "chatapp-cd573",
    storageBucket: "chatapp-cd573.appspot.com",
    messagingSenderId: "683545509775",
    appId: "1:683545509775:web:12c5a38e14a56b2125d5fa",
    measurementId: "G-MXVWBB6N0W"
 }
 firebase.initializeApp(config);
  firebase.analytics();
 const db = firebase.firestore();
 
 export default db;