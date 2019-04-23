import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Home extends Component {
  render() {
    return (
      <body>
        <div className="App">

          <div className = "flex-container">
            <h1 className = "appTitle">BELP</h1>
            <div className = "ButtonsSection ">
              <h2 className = "button"><Link to='/' style= {{textDecoration: 'none', color: 'black'}}>Home</Link></h2>
              <h2 className = "button"><Link to='/about' style= {{textDecoration: 'none', color: 'black'}}>About</Link></h2>
              <h2 className = "button"><Link to='/ContactUs' style= {{textDecoration: 'none', color: 'black'}}>Contact Us</Link></h2>
            </div>
          </div>

            <p className = "appHeader">Please click on an option to explore more</p>


          </div>


          <div className = "mainMenu">
          <h2 className = "menuOptionsLocation"><Link to='/restaurants' style= {{textDecoration: 'none', color: 'black'}}>RESTAURANTS</Link></h2>
          <div className = "verticalLine"></div>
          <h2 className = "menuOptionsLocation"><Link to='/bars' style= {{textDecoration: 'none', color: 'black'}}>BARS</Link></h2>
          </div>
      </body>
    );
  }
}

export default Home;
