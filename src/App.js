import React from 'react';
import First from './components/home.jsx';
import Signup from './components/signup.jsx';
import Chat from './components/chat.jsx';
import Login from './components/Login.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  //saves user Email
  const handleUser = (arg) => {
    setUser(arg);
  };
  const [loggedIn,setLoggedIn]=useState([])
  var setChat=[loggedIn,setLoggedIn,user]
  

  
  
  return (
    <Router>
      <div  className="App">
        <Switch>
          <Route exact path="/" component={First} />
          <Route path="/First" component={First} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/Login"
            render={(props) => 
              <Login {...props} userN={handleUser}/>} />
          <Route path="/Chat" render={(props)=><Chat {...props} users={setChat}/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
