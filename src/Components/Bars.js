import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import fusion from "../assets/fusion.jpg"
import burton from "../assets/burton.jpg"
import otherplace from "../assets/otherplace.jpg"
import base from "../assets/base.jpg"

const bars = [
  { headerText : "Burton", name:"Burton", route: "burton" , img: burton, price: "$ 2.75-12$", hours: "MTWThSa 11:30AM - 7PM, F 11:30AM - 8PM",  health: "88/100", address: "1 E Main St Allegany New York", phoneNumber: "(716) 372-3107" },
  { headerText : "OP", name:"The Other Place", route: "otherplace" , img: otherplace, price: "$ 3-40$", hours: "MTWThFSaSu 11:0AM - 9PM",  health: "None available", address: "91 W Main St, Allegany, NY 14706", phoneNumber: "(716) 372-4002" },
  { headerText : "Fusion", name: "Fusion", route:"fusion",img: fusion, price: "$ 2-22$", hours: "M 4PM-10PM TW 11AM - 12AM ThFSa 11AM - 2AM, Su 11AM - 8PM",  health: "81/100", address: "115 W Main St, Allegany, NY 14706", phoneNumber: "(716) 379-8394"},
  { headerText : "Third Base", name: "3rd Base", route: "3rdbase", img: base, price: "$ 3-40$", hours: "MTWThFSa 11AM - 2AM, Su 12PM - 2AM",  health: "None available", address: "1302 W State St, Olean, NY 14760", phoneNumber: "(716) 372-8779" },
]



const Bars = () => (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: '17% 83%', minHeight: '100%' }}>
          <Nav destinations = {bars} subroute = "bars"/>
      <div style={{ height: 800, border: '3px solid black'}}>
      {
        bars.map( ({headerText, name, route, img, address, phoneNumber, deliver, review, price, hours, type, health, vibe}) => (
          <Route key={name} exact path={"/bars/" + route}
          render = { () => <Bar headerText={headerText} img = {img} address = {address} phoneNumber = {phoneNumber} deliver = {deliver} review = {review} price = {price} hours = {hours}  health = {health} vibe = {vibe}/> } />
        ))
      }
      </div>
    </div>
  </div>

)

const Bar = ({ headerText, img, address, phoneNumber, deliver, review, price, hours, health, vibe}) => {
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




export default Bars
