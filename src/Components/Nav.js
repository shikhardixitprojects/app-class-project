import React from 'react';
import { NavLink } from 'react-router-dom'
import StickyBox from "react-sticky-box";


const Nav = ({destinations, subroute}) => (

  <StickyBox style={{ height: '200px', border: '3px solid black',  width: '130px', backgroundColor: '#b8a9c9' }}>
  {
    destinations.map( ({headerText, name, route}) => (
      <div className = "links" key = {name}>
        <NavLink exact to={"/" + subroute + "/" + route} style = {{textDecoration: 'none', color: 'black'}} >
          {name}
        </NavLink>
      </div>
    ))
  }
  </StickyBox>
)

export default Nav
