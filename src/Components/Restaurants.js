import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import applebees from "../assets/Applebees.png"
import lakeview from "../assets/Lakeview.png"
import dominos from "../assets/Dominoes.gif"

const restaurants = [
  { headerText : "Applebees: A Standard American Experience", name:"Applebees", route: "applebees", img: applebees, address: "3067 W State St, Olean, NY", deliver: "No delivery", review: "I personally enjoy the food here. Karaoke nights are always a plus" },
  { headerText : "Lake View: Craving Chinese?", name:"Lake View", route: "lakeview", img: lakeview, address: "3042 NY-417, Olean, NY", deliver: "Yes delivery"},
  { headerText : "Domino's: Yeah, we got 'em", name: "Domino's", route:"dominoes", img: dominos, address: "2626 W State St Unit 1, Olean, NY", deliver: "Yes, popular delivery" }
]

const Restaurants = () => (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: '17% 83%', minHeight: '100%' }}>
          <Nav destinations = {restaurants} subroute = "restaurants"/>
      <div style={{ height: 800, border: '3px solid black'}}>
      {
        restaurants.map( ({headerText, name, route, img, address, deliver, review}) => (
          <Route key={name} exact path={"/restaurants/" + route}
          render = { () => <Restaurant headerText={headerText} img = {img} address = {address} deliver = {deliver} review = {review}/> } />
        ))
      }
      </div>
    </div>
  </div>

)

const Restaurant = ({ headerText, img, address, deliver, review }) => {
        return (
          <div className = "restaurant-page">
            <h1 style ={{fontFamily: 'Arial', letterSpacing: '3px', fontStyle: 'italic', fontSize: '25px'}}>{ headerText }</h1>
            <img className = "img" alt = {img} src = {img}/>
            <p style ={{fontFamily: 'Arial', letterSpacing: '5px', fontSize: '20px'}}>Address: { address }</p>
            <p style ={{fontFamily: 'Arial', letterSpacing: '5px', fontSize: '20px'}}>{ deliver }
        <br/> <br/> Review
            </p>
            <p style ={{fontFamily: 'Arial', letterSpacing: '2px', fontSize: '15px'}}>{review}</p>
          </div>
        )
}


export default Restaurants
