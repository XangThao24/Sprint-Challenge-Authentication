import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, withRouter } from "react-router-dom";
import SignIn from './components/SignIn';
import JokesList from './components/JokesList';
import Register from './components/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path='/signin' component={SignIn}/>
        <Route path='/jokes' component={JokesList} />
        <Route path='/register' component={Register} />
      </div>
    );
  }
}

export default App;
