import React from 'react';
import { NavLink } from 'react-router-dom'
import StickyBox from "react-sticky-box";


const Nav = ({destinations, subroute}) => (

  <StickyBox style={{ height: '200px', border: '3px solid black',  width: '98%', backgroundColor: '#b8a9c9' }}>
  {
    destinations.map( ({headerText, name, route}) => (
      <li key = {name}>
        <NavLink exact to={"/" + subroute + "/" + route} >
          {name}
          </NavLink>
      <h2 />
      </li>
    ))
  }
  </StickyBox>
)

export default Nav
