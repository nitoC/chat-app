import React, {Component} from 'react';
import firebase from 'firebase';
import {Link} from 'react-router-dom';
var auth=firebase.auth();

const Menu = () => {
    function signOut(){
auth.onAuthStateChange(user=>{
    if(user){
  auth.signOut().then(user=>console.log(user.displayName + 'signout success')).catch(error=>console.log(error))
    }
   }
 )
 .catch(error=>console.log(error))
}  
  return (
    <div id="menu">
      <div>
        <Link>
          <i className="fas fa-home" /> Home
        </Link>
      </div>
      <div>
        <Link>
          <i className="fas fa-address-card" /> people
        </Link>
      </div>
      <div>
        <Link>
          <i className="fas fa-users" /> Crew
        </Link>
      </div>
      <div id="signout" onClick={signOut}>
        <Link>
          <i className="fas fa-paper-plane" /> signout
        </Link>
      </div>
    </div>
  );
};

export default Menu;
