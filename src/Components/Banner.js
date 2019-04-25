import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => (
  <div className = "flex-container">
    <h1 className = "appTitle" style = {{color: 'black'}}>BELP:</h1>
    <h2 className = "belpTitle">Bonnies'YELP</h2>
    <div className = "ButtonsSection ">
      <h2 className = "button"><Link to='/' style= {{textDecoration: 'none', color: 'black'}}>Home</Link></h2>
      <h2 className = "button"><Link to='/about' style= {{textDecoration: 'none', color: 'black'}}>About</Link></h2>
      <h2 className = "button"><Link to='/ContactUs' style= {{textDecoration: 'none', color: 'black'}}>Contact</Link></h2>
    </div>
  </div>
)

export default Banner
