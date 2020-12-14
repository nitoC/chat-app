import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
    this.handleUser = this.handleUser.bind(this);
  }
  handleUser(event) {
    this.setState({
      user: event.target.value,
    });
  }
  render() {
    return (
      <div className="app">
       
        <div id="wrap">
          <h1 id="logo">Joker</h1>
          <p id="introText">
            <span style={{fontSize: '1.3em', fontStyle: 'italic'}}>
              With joker there would never be sad expressions
            </span>
            <br />
            Join joker chat and be you, showing your true expressions with
            friends and family
          </p>
          <button id="log">
            <Link to="Login" style={{color: 'black', textDecoration: 'none'}}>
              Login
            </Link>
          </button>
          <button id="button" type="button">
            <Link to="Signup" style={{color:'white', textDecoration: 'none'}}>
              Join
            </Link>
          </button>
        </div>
        <div id="img">
          <img
            id="im"
            src="https://ctl.s6img.com/society6/img/TcPuqSGTNPxRmkkTBswdl1ByyYQ/w_700/skins/iphone6plus/~artwork,fw_1300,fh_2000,fx_-350,iw_2000,ih_2000/s6-original-art-uploads/society6/uploads/misc/a4c56b6403b84709800d45bacc366e45/~~/simple-black-and-white-ink-drawing-of-woman-with-flowers-in-hair-phone-skins.jpg"
            alt="this is the home image"
          />
        </div>
      </div>
    );
  }
}

export default Home;
