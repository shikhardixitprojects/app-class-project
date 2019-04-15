import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import mainImage from './oldHickey.jpg';
import './App.css';

class App extends Component {


  render() {

    return (
      <div className="App">

        <h1 class = "appTitle">BELP</h1>
        <img
         src={mainImage}
         alt="profImage"
         />
         <h2 class = "appHeader">By Bonnies for Bonnies</h2>
         <h3 class = "bobby">Designed by Bobby "StyleMaster" Nguyen</h3>
      </div>

    );
  }
}

export default App;
