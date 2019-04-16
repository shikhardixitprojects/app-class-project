import React, { Component } from 'react';
import mainImage from './oldHickey.jpg';
import './App.css';

class App extends Component {


  render() {

    return (
      <body>
        <div className="App">

          <div className = "flex-container">
            <h1 className = "appTitle">BELP</h1>
            <div className = "Buttons ">

              <h2 className = "button"> Home</h2>
              <h2 className = "button">About</h2>
              <h2 className = "button">Contact Us</h2>
            </div>

          </div>

          <p className = "LittleIntro">A Guide to Eat Out near St. Bonaventure</p>
          <p className = "appHeader">By Bonnies for Bonnies</p>


          </div>




      </body>

    );
  }
}

export default App;
