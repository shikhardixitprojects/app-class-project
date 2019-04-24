import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Banner from './Banner'


class Home extends Component {
  render() {
    return (
      <body>
        <div className="App">

          <Banner/>

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