import React from 'react';
import { NavLink } from 'react-router-dom'
import StickyBox from "react-sticky-box";


const Nav = ({destinations, subroute}) => (

  <StickyBox style={{ height: '800px', border: '3px solid black', background: 'linear-gradient(to bottom, #FDA7DF,#f9ca24)' }}>
  {
    destinations.map( ({headerText, name, route}) => (
      <div className = "links" key = {name}>
        <NavLink exact to={"/" + subroute + "/" + route} style = {{textDecoration: 'none', color: 'black', fontFamily: 'Arial', fontSize: '17px', letterSpacing: '5px'}} >
          {name}
        </NavLink>
      </div>
    ))
  }
  </StickyBox>
)

export default Nav
