import React, { Component } from 'react';
// import logo from './logo.svg';
import mainImage from './App Class Pic.png';
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
