import React from 'react'
import { NavLink,Route } from 'react-router-dom'
import Banner from './Banner'

const restaurants = [
  { headerText : "Welcome to Applebees", name:"Applebees", route: "applebees" },
  { headerText : "Welcome To QQ Buffet", name:"QQ", route: "qq" },
  { headerText : "Welcome To Dominoes", name: "Dominoes", route:"dominoes" }
]

const Restaurants = () => (
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
          <NavLink exact to="/restaurants">All Restaurants</NavLink>
          {
            restaurants.map( ({headerText, name, route}) => (
              <li key = {name}>
                <NavLink exact to={"/restaurants/" + route} >
                  {name}
                  </NavLink>
              </li>
            ))
          }
          </div>
        <div>
        {
          restaurants.map( ({headerText, name, route}) => (
            <Route key={name} exact path={"/restaurants/" + route}
            render = { () => <Restaurant headerText={headerText} /> } />
          ))
        }
        </div>
      </div>
    )
  }
}

const Restaurant = ({ headerText }) => {
        return <h1>{ headerText }</h1>;
}

export default Restaurants
