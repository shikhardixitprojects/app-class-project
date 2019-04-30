import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Banner from './Banner'


class Home extends Component {
  render() {
    return (
     <div className="App">
     <Banner/>
     <p className = "appHeader">Please click on an option to explore more</p>
     <div className = "mainMenu">
     <h2 className = "menuOptionsLocation"><Link to='/restaurants'
     style= {{textDecoration: 'none', color: 'black', paddingLeft: '15px'}}>RESTAURANTS</Link></h2>
          <div className = "verticalLine"></div>
          <h2 className = "menuOptionsLocation"><Link to='/bars' style= {{textDecoration: 'none', color: 'black',paddingRight: '125px'}}>BARS</Link></h2>
      </div>
      </div>
    );
  }
}

export default Home;
