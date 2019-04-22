import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Home extends Component {
  render() {
    return (
      <body>
        <div className="App">

          <div className = "flex-container">
            <h1 className = "appTitle">BELP</h1>
            <div className = "Buttons ">
              <h3><Link to='/'>Home</Link></h3>
              <h3><Link to='/about'>About</Link></h3>
              <h3><Link to='/ContactUs'>Contact Us</Link></h3>
            </div>
          </div>

          <p className = "LittleIntro">A Guide to Eat Out near St. Bonaventure</p>
          <p className = "appHeader">By Bonnies for Bonnies</p>


          </div>

          <div>
          <h3><Link to='/restaurants'>Restaurants</Link></h3>
          </div>
          <h3><Link to='/bars'>Bars</Link></h3>

      </body>
    );
  }
}

export default Home;
