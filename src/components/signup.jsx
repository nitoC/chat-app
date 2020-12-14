import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import db from './firebase.js';
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
var Storage;
var imgName;
var image;
var id;
console.log(firebase);
console.log(firebase.auth());
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pass: '',
      email: '',
      mobile: '',
      gender: '',
      image: {},
    };
    this.signup = this.signup.bind(this);
    this.asignN = this.asignN.bind(this);
    this.asignE = this.asignE.bind(this);
    this.asignM = this.asignM.bind(this);
    this.asignP = this.asignP.bind(this);
    this.asignI = this.asignI.bind(this);
    this.asignG = this.asignG.bind(this);
    this.GoogleSign = this.GoogleSign.bind(this);
  }
  GoogleSign() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  asignN(event) {
    this.setState({
      name: event.target.value,
    });
  }
  asignE(event) {
    this.setState({
      email: event.target.value,
    });
  }
  asignM(event) {
    this.setState({
      mobile: event.target.value,
    });
  }
  asignP(event) {
    this.setState({
      pass: event.target.value,
    });
  }
  asignI(event) {
   // image = event.target.files[0];
    this.setState({
     // image: event.target.files[0],
    });
   // imgName = image.name;
   // console.log(typeof this.state.image);
    //console.log(imgName);
  }
  asignG(event) {

    this.setState({
      gender: event.target.id,
    });
  }
  signup(event) {
    event.preventDefault()
    var email = this.state.email;
    var password = this.state.pass;
    db.collection('users').add(this.state);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        id = user.uid;
        console.log(id);
        console.log(user);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorCode + errorMessage);
      });

    window.location.href = 'Login';
  }
  componentDidMount() {}
  render() {
    return (
      <div id="form">
        <h1>signup</h1>
        <label
          id="imag"
          htmlFor="file"
          style={{display: 'block', textAlign: 'center'}}
        >
          <i className="far fa-user-circle" style={{fontSize: '6em'}} />
        </label>
        <form action="" className="form-group">
          <label htmlFor="name">
            Full name
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={this.asignN}
              required
            />
          </label>
          <label htmlFor="pass">
            password
            <input
              type="password"
              className="form-control"
              onChange={this.asignP}
              id="pass"
              required
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.asignE}
              required
            />
          </label>
          <label htmlFor="num">
            Mobile
            <input
              type="number"
              className="form-control"
              id="num"
              onChange={this.asignM}
              required
            />
          </label>
          <label htmlFor="male">
            male{' '}
            <input
              type="radio"
              name="gender"
              className="form-control"
              onChange={this.asignG}
              id="male"
              required
            />
          </label>
          <label htmlFor="female">
            female{' '}
            <input
              type="radio"
              name="gender"
              className="form-control"
              onChange={this.asignG}
              id="female"
              required
            />
          </label>
          <input
            type="file"
            className="form-control"
            id="file"
            style={{visibility: 'hidden'}}
            onChange={this.asignI}
            accept="image/*"
            required
          />
          <div>
            <Link to="Login">Already have account?</Link>
          </div>
          <button
            id="signBtnS"
            onClick={this.signup}
            className="btn btn-block btn-primary"
          >
            sign up
          </button>
          <button
            id="signBtnG"
            onClick={this.GoogleSign}
            className="btn btn-block"
            style={{backgroundColor: 'lightblue', border: 'none'}}
          >
            Google
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
