import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import {withRouter} from 'react-router-dom/cjs/react-router-dom.min';
import firebase from 'firebase';

const Provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      pass: '',
    };
    //this.handleUser = this.handleUser.bind(this);
    this.update = this.update.bind(this);
    this.signInGoogle = this.signInGoogle.bind(this);
    this.signInEmail = this.signInEmail.bind(this);
    this.pass = this.pass.bind(this);
  }
  update(event) {
    this.setState({
      input: event.target.value,
    });
  }
  signInGoogle() {
    firebase
      .auth()
      .signInWithPopup(Provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        if (user != null) {
          window.location.href = 'chat';
        }
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
        window.location.href = 'signup';
        // ...
      });
  }
  signInEmail(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => (window.location.href = 'chat'))
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        if (error) {
          alert('no such user');
          window.location.href = 'signup';
        }
      });
    console.log(firebase.auth());
  }
  pass(event) {
    this.setState({
      pass: event.target.value,
    });
  }

  /*componentDidUpdate(prevProps){
  if(this.props.user2!==this.props.user2) console.log(user2)
}*/
  render() {
    console.log(this.props);

    return (
      <div id="cover">
        <div id="pdiv">
          <img
            id="photo"
            src="https://st4.depositphotos.com/17601448/25315/v/1600/depositphotos_253151892-stock-illustration-continuous-one-line-drawing-of.jpg"
          />
        </div>

        <div id="Ldiv">
          <label htmlFor="Lname">
            Email
            <input
              type="email"
              onChange={(event) => this.update(event)}
              className="form-control"
              id="Lname"
              required
            />
          </label>
          <label htmlFor="Lpass">
            password
            <input
              type="password"
              className="form-control"
              id="Lpass"
              onChange={this.pass}
              required
            />
          </label>
          <Link>forgot password?</Link>

          <a
            id="signBtnL"
            className="btn btn-block btn-danger"
            onClick={() => {
              this.props.userN(this.state.input);
              this.signInEmail(this.state.input, this.state.pass);
            }}
            style={{color: 'white', textDecoration: 'none'}}
          >
            login
          </a>

          <button
            id="signBtnGG"
            className="btn btn-block"
            style={{backgroundColor: 'lightblue', border: 'none'}}
            onClick={this.signInGoogle}
          >
            Google
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
