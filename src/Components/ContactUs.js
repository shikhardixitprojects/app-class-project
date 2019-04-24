import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import bitBobby from "../assets/bitBobby.jpg"
import bitMike from "../assets/bitMike.JPG"

const ContactUs = () => (
  <div>
    <Banner/>
    <h1>If you would like to reach out to us, here is our information:</h1>
    <div className = "contact">

  <img className="bobby" src={bitMike}/>
    <p> Michael Czyzewski </p>
    <p> czyzewm16@bonaventure.edu </p>
    
    <img className="bobby" src={bitBobby}/>
      <p> Bobby Nguyen </p>
      <p> nguyenla16@bonaventure.edu </p>



    </div>

  </div>
)

export default ContactUs
