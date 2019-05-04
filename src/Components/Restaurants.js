import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import applebees from "../assets/Applebees.png"
import lakeview from "../assets/Lakeview.png"
import dominos from "../assets/Dominoes.gif"
import rafis from "../assets/Rafi's Platter.jpg"
import uniontea from "../assets/uniontea.jpeg"
import beefnbarrel from "../assets/beef n barrel.jpg"
import greenacres from "../assets/green-acres-cafe.jpg"


const restaurants = [
  { vibe: "American restaurant.", route: "applebees", name:"Applebees", headerText : "Applebees: A Standard American Experience", img: applebees, price: "$$ 11-30$", hours: "SuMTWTh 11AM - 12AM, FSa 11AM - 1AM", type: "sit-in", health: "73/100", address: "3067 W State St, Olean, NY", phoneNumber: "(716) 372-2828", review: "Bobby Nguyen '21': I personally enjoy the food here. Karaoke nights are always a plus!" },
  { vibe: "Chinese restaurant.", route: "lakeview", name:"Lake View", headerText : "Lake View: Craving Chinese?", img: lakeview, price: "$ 10-15$", hours: "SaSuMTWThF 11AM - 9PM", type: "sit-in, carry-out, delivery", health: "None reported", address: "3042 NY-417, Olean, NY", phoneNumber: "(716) 373-0100"},
  { vibe: "Pizza place.", route:"dominoes", name: "Domino's", headerText : "Domino's: Yeah, we got 'em", img: dominos, price: "$ 10-15$", hours: "SuMTWTh 10:30AM - 1AM, FSa 10:30AM - 2:00AM", type: "carry-out, delivery", health: "90/100",address: "2626 W State St Unit 1, Olean, NY", phoneNumber: "(716) 373-4210"},
  { vibe: "IndoAmerican restaurant.", route:"rafiplatter", name: "Rafi's Platter", headerText : "Rafi's Platter: A Cultural Bliss", img: rafis, price: "$$ 10-30$", hours: "MTWTh 11AM - 9PM, F 11AM - 10PM, Sa 12PM-10PM, Su 12PM-7PM", type: "sit-in, carry-out", health: "82/100", address: "800 Wayne St, Olean, NY 14760", phoneNumber: "(716) 790-8294",},
  { vibe: "Tea and savory lunch.", route:"unionteacafe", name: "Union Tea Cafe", headerText : "Union Tea Cafe: Pass the Tea!", img: uniontea, price: "$$ 11-30$", hours: "MTWThF 8:30AM - 6PM, Sa 8AM - 3PM", type: "sit-in, carry-out", health: "71/100", address: "301 N Union St, Olean, NY 14760", phoneNumber: "(716) 701-4014"},
  { vibe: "American restaurant.", route:"beefnbarrel", name: "Beef'n Barrel", headerText : "Beef'n Barrel: Local Favorite", img: beefnbarrel, price: "$$ 11-30$", hours: "MTWThFSa 11AM - 10PM,", type: "sit-in, carry-out", health: "66/100",address: "146 N Union St, Olean, NY 14760", phoneNumber: "(716) 372-2985"},
  { vibe: "Great low-key breakfast/brunch spot.", route:"greenacres", name: "Green Acres Cafe", headerText : "Green Acres Cafe: Serendipitious Encounter", img: greenacres, price: "$ ~10$", hours: "MTWTh 8AM-2PM, F 8AM-8PM, SaSu 8AM-2PM", type: "sit-in, carry-out", health: "None reported",address: "133 N Union St, Olean, NY 14760", phoneNumber: "(716) 373-5670"}
]

const Restaurants = () => (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: '17% 83%', minHeight: '100%' }}>
          <Nav destinations = {restaurants} subroute = "restaurants"/>
      <div style={{ height: 800, border: '3px solid black'}}>
      {
        restaurants.map( ({headerText, name, route, img, address, phoneNumber, deliver, review, price, hours, type, health, vibe}) => (
          <Route key={name} exact path={"/restaurants/" + route}
          render = { () => <Restaurant headerText={headerText} img = {img} address = {address} phoneNumber = {phoneNumber} deliver = {deliver} review = {review} price = {price} hours = {hours} type = {type} health = {health} vibe = {vibe}/> } />
        ))
      }
      </div>
    </div>
  </div>

)

const Restaurant = ({ headerText, img, address, phoneNumber, deliver, review, price, hours, type, health, vibe}) => {
        return (
          <div className = "restaurant-page">
            <h1 className = "headerText" style ={{fontFamily: 'Arial', color: 'blue', letterSpacing: '3px', fontStyle: 'italic', fontSize: '25px', align: 'center'}}>{ headerText }</h1>
            <img className = "img" alt = {img} src = {img}/>
            <br></br>
            <h2 className = "headerText" style ={{fontFamily: 'Times New Roman', color: 'purple', letterSpacing: '2px', fontSize: '20px', align: 'center'}}>{vibe}</h2>
            <br></br>
            <table style={{width:'30%'}}>
                <tr>
                  <td>Price:</td>
                  <td>{price}</td>
                </tr>
                <tr>
                  <td>Hours:</td>
                  <td>{hours}</td>
                </tr>
                <tr>
                  <td>Phone Number:</td>
                  <td>{phoneNumber}</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>{address}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{type}</td>
                </tr>
                <tr>
                  <td>Health Score:</td>
                  <td>{health}</td>
                </tr>
            </table>
            <br></br>
            <p style ={{fontFamily: 'Arial', letterSpacing: '5px', fontSize: '20px'}}></p>
            <p style ={{fontFamily: 'Arial', letterSpacing: '2px', fontSize: '15px'}}></p>
          </div>
        )
}


export default Restaurants
