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
    <div style={{ display: 'grid', gridTemplateColumns: '17% 83%', minHeight: '100%' }}>
        <Nav destinations = {restaurants} subroute = "restaurants"/>
      <div style={{ height: 1400, width: '100%', border: '3px solid black'}}>
      {
        restaurants.map( ({headerText, name, route}) => (
          <Route key={name} exact path={"/restaurants/" + route}
          render = { () => <Restaurant headerText={headerText} /> } />
        ))
      }
      </div>
    </div>
  </div>

)

const Restaurant = ({ headerText }) => {
        return <h1 style ={{fontFamily: 'Arial', letterSpacing: '20px', fontStyle: 'italic', fontSize: '25px'}}>{ headerText }</h1>;
}


export default Restaurants
