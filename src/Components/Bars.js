import React from 'react'
import { NavLink,Route } from 'react-router-dom'
import StickyBox from "react-sticky-box";
import Nav from './Nav'

const bars = [
  { headerText : "Welcome to the Burton", name:"Burton", route: "burton" },
  { headerText : "Welcome To The OP", name:"Other Place", route: "otherplace" },
  { headerText : "Welcome To Fusion", name: "Fusion", route:"fusion" },
]

const Bars = () => (
<div>
  <div style={{ minHeight: '100%' }}>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Nav destinations = {bars} subroute = "bars"/>
    <div style={{ height: 1600, width: '100%', border: '3px solid blue'}}>
    {
      bars.map( ({headerText, name, route}) => (
        <Route key={name} exact path={"/bars/" + route}
        render = { () => <Bar headerText={headerText} /> } />
      ))
    }
    </div>
  </div>
</div>
</div>

)

const Bar = ({ headerText }) => {
        return <h1>{ headerText }</h1>;
}


export default Bars
