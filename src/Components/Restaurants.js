import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import applebees from "../assets/Applebees.png"
import lakeview from "../assets/Lakeview.png"
import dominos from "../assets/Dominoes.gif"

const restaurants = [
  { headerText : "Applebees: A Standard American Experience", name:"Applebees", route: "applebees", img: applebees, deliver: "No" },
  { headerText : "Lake View: Craving Chinese?", name:"Lake View", route: "lakeview", img: lakeview, deliver: "Yes"},
  { headerText : "Dominoes: Yeah, we got a Domino's.", name: "Domino's", route:"dominoes", img: dominos, deliver: "Yes, popular!" }
]

const Restaurants = () => (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: '17% 83%', minHeight: '100%' }}>
          <Nav destinations = {restaurants} subroute = "restaurants"/>
      <div style={{ height: 800, border: '3px solid black'}}>
      {
        restaurants.map( ({headerText, name, route, img, deliver}) => (
          <Route key={name} exact path={"/restaurants/" + route}
          render = { () => <Restaurant headerText={headerText} img = {img} deliver = {deliver}/> } />
        ))
      }
      </div>
    </div>
  </div>

)

const Restaurant = ({ headerText, img, deliver }) => {
        return (
          <div className = "restaurant-page">
            <h1 style ={{fontFamily: 'Arial', letterSpacing: '3px', fontStyle: 'italic', fontSize: '25px'}}>{ headerText }</h1>
            <img className = "img" alt = {img} src = {img}/>
            <p style ={{fontFamily: 'Arial', letterSpacing: '5px', fontSize: '20px'}}>Do they deliver? { deliver }</p>
          </div>
        )
}


export default Restaurants
