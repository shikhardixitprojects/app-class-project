import React from 'react'
import { NavLink,Route } from 'react-router-dom'
import Banner from './Banner'

const bars = [
  { headerText : "Welcome to the Burton", name:"Burton", route: "burton" },
  { headerText : "Welcome To The OP", name:"Other Place", route: 'otherplace' },
  { headerText : "Welcome To Fusion", name: "Fusion", route:"fusion" },
]

const Bars = () => (
  <div>
    <Banner/>
    <DashBoard/>
  </div>
)

class DashBoard extends React.Component{
  render(){
    return(
      <div>
          <div>
          <NavLink exact to="/bars">All Bars</NavLink>
          {
            bars.map( ({headerText, name, route}) => (
              <li key = {name}>
                <NavLink exact to={"/bars/" + route} >
                  {name}
                  </NavLink>
              </li>
            ))
          }
        </div>
        <div>

          {
            bars.map( ({headerText, name, route}) => (
              <Route key={name} exact path={"/bars/" + route}
              render = { () => <Bar headerText={headerText} /> } />
            ))
          }

        </div>
      </div>
    )
  }
}

const Bar = ({ headerText }) => {
        return <h1>{ headerText }</h1>;
}


export default Bars
