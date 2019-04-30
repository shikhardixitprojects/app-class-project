import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import Banner from './Components/Banner'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Banner />
        <Routes />
      </div>

    );
  }
}

export default App;
