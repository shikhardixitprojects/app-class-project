import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Routes from './Routes'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Routes />
      </div>

    );
  }
}

export default App;
