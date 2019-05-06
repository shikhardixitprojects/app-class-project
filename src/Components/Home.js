import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Home extends Component {
  render() {
    return (
     <div className="App">
     <p className = "appHeader">Please click on an option to explore more</p>
     <div className = "mainMenu" >
     <Link to='/restaurants'
     style= {{letterSpacing: '8px', fontSize: '25px', paddingTop: '235px', paddingBottom: '323px', textAlign: 'center', textDecoration: 'none', color: 'black', paddingLeft: '15px'}}>RESTAURANTS</Link>
          <div className = "verticalLine"></div>
          <Link to='/bars' style= {{textAlign: 'center', letterSpacing: '8px', paddingTop: '235px', fontSize: '25px', textDecoration: 'none', color: 'black',paddingRight: '125px'}}>BARS</Link>
      </div>
      </div>
    );
  }
}

export default Home;
