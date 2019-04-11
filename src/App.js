import React, { Component } from 'react';
// import logo from './logo.svg';
import mainImage from './App Class Pic.png';
import './App.css';

class App extends Component {


  render() {

    return (


      <div className="App">

        <h1 class = "appTitle">Welcome to App Class (IT280B)</h1>
        <img
         src={mainImage}
         alt="profImage"
         />

      </div>

    );
  }
}

export default App;
