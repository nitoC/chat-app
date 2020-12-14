import React, {Component} from 'react';
import Display from './Display.jsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import db from './firebase.js';
import firebase from 'firebase';
import Loggedin from './Loggedin';
import Menu from './Menu.jsx';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inpChange: '',
      input: [],
      userE: '',
      mess: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inpChange: event.target.value,
      input: this.state.input,
      userE: this.state.userE,
    });
  }
  handleInput(event) {
    event.preventDefault();
    db.collection('message').add({
      message: this.state.inpChange,
      user: this.props.users[2],
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
  componentDidMount() {
    //loggedin users array
    this.props.users[1]([...this.props.users[0], this.props.users[2]]);
    db.collection('message')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        console.log(data);
        this.setState({
          inpChange: '',
          input: data,
          userE: this.state.userE,
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.input)
      //database
      db.collection('message')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => doc.data().messages);
          console.log(data);
        });
  }
  //update userLog later if error of message not identifying user message
  render() {
    return (
      <div id="chatDiv">
        <div id="list">
          <Menu/>
        </div>
        <form
          id="fom"
          noValidate
          autoComplete="off"
          style={{
            backgroundColor: '#fffdd0',
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            border: '2px solid #fffdd0',
            borderRadius: '20px',
            width: '40%',
          }}
        >
          <TextField
            id="tf"
            onChange={this.handleChange}
            style={{marginBottom: 0, width: '70%'}}
            value={this.state.inpChange}
            id="standard-basic"
            label="Joker"
          />
          <Button
            disabled={this.state.inpChange === ''}
            style={{marginBottom: -20, width: '25%'}}
            variant="contained"
            color="primary"
            type="Submit"
            onClick={this.handleInput}
          >
            <i className="fas fa-paper-plane" />
          </Button>
        </form>
        {/*message.message*/}
        <Display words={this.state.input} use={this.props.users[2]} />
        <Loggedin />
      </div>
    );
  }
}

export default Chat;
