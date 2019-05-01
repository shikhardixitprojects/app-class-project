import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'

const bars = [
  { headerText : "Burton", name:"Burton", route: "burton" },
  { headerText : "OP", name:"The Other Place", route: "otherplace" },
  { headerText : "Fusion", name: "Fusion", route:"fusion" },
  { headerText : "Third Base", name: "3rd Base", route: "3rdbase"},
]

const Bars = () => (
<div>
  <div style={{ display: 'grid', gridTemplateColumns: '17% 83%', minHeight: '100%' }}>
      <Nav destinations = {bars} subroute = "bars"/>
    <div style={{ height: 800, border: '3px solid black'}}>
    {
      bars.map( ({headerText, name, route}) => (
        <Route key={name} exact path={"/bars/" + route}
        render = { () => <Bar headerText={headerText} /> } />
      ))
    }
    </div>
  </div>
</div>

)

const Bar = ({ headerText }) => {
        return <h1 style ={{fontFamily: 'Arial', letterSpacing: '3px', fontStyle: 'italic', fontSize: '25px'}}>{ headerText }</h1>;
}


export default Bars
