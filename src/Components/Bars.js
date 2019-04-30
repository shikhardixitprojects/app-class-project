import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'

const bars = [
  { headerText : "Burton", name:"Burton", route: "burton" },
  { headerText : "OP", name:"Other Place", route: "otherplace" },
  { headerText : "Fusion", name: "Fusion", route:"fusion" },
]

const Bars = () => (
<div>
  <div style={{ display: 'grid', gridTemplateColumns: '10% 90%', minHeight: '100%' }}>
      <Nav destinations = {bars} subroute = "bars"/>
    <div style={{ height: 1400, width: '100%', border: '3px solid black'}}>
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
        return <h1>{ headerText }</h1>;
}


export default Bars
