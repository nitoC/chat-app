import React, {Component} from 'react';
import {useEffect, useState} from 'react';
import db from './firebase.js';
import firebase from 'firebase';
var auth=firebase.auth();
var Storage ;
var user = [];
var picture = [];
var pics;


const Loggedin = () => {
 /* useEffect(()=>{
    Storage = firebase.storage().ref('users/'+auth.user.uid+'/profileImage')
    Storage.getDownloadUrl().then(url=>{
     var image=url;
     pics=url;
    })
  })*/
  db.collection('users').onSnapshot((snapshot) => {
    user = snapshot.docs.map((doc) => doc.data().name);
    picture = snapshot.docs.map((doc) => doc.data().image);
    console.log(user);
   
    });
  return (
    <div id="Loggedusers">
      <div id="space"></div>
      {user.map((user, index) => {
        return <h6 key={index}>{user}<span><img id="pics" src={pics} alt="profile picture"/></span></h6>;
      })}
    </div>
  );
};

export default Loggedin;
