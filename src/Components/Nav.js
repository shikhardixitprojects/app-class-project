import React from 'react';
import { NavLink } from 'react-router-dom'
import StickyBox from "react-sticky-box";


const Nav = ({destinations, subroute}) => (

  <StickyBox style={{ border: '3px solid green', margin: '5px 50px' }}>
  {
    destinations.map( ({headerText, name, route}) => (
      <li key = {name}>
        <NavLink exact to={"/" + subroute + "/" + route} >
          {name}
          </NavLink>
      </li>
    ))
  }
  </StickyBox>
)

export default Nav
