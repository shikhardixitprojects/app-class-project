import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'

const restaurants = [
  { headerText : "Welcome to Applebees", name:"Applebees", route: "applebees" },
  { headerText : "Welcome To QQ Buffet", name:"QQ", route: "qq" },
  { headerText : "Welcome To Dominoes", name: "Dominoes", route:"dominoes" }
]

const Restaurants = () => (
  <div>
    <div style={{ minHeight: '100%' }}>
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Nav destinations = {restaurants} subroute = "restaurants"/>
      <div style={{ height: 1600, width: '100%', border: '3px solid blue'}}>
      {
        restaurants.map( ({headerText, name, route}) => (
          <Route key={name} exact path={"/restaurants/" + route}
          render = { () => <Restaurant headerText={headerText} /> } />
        ))
      }
      </div>
    </div>
  </div>
  </div>
)

const Restaurant = ({ headerText }) => {
        return <h1>{ headerText }</h1>;
}

export default Restaurants
