import React from 'react'
import Banner from './Banner'
import bitBobby from "../assets/bitBobby.png"
import bitMike from "../assets/bitMike.png"
import bitShiki from "../assets/bitShiki.png"
import bitKat from "../assets/bitKat.png"
import bitGeorge from "../assets/bitGeorge.png"

const ContactUs = () => (
  <div>
    <Banner/>
    <h2 className = "contactPitch">OUR FOUNDING MEMBERS:</h2>

    <div className="contact">
    <img className="bitImg" src={bitMike}/>
      <p> Michael Czyzewski </p>
      <p> czyzewm16@bonaventure.edu </p>
</div>

  <div className="contact">
    <img className="bitImg" src={bitBobby}/>
      <p> Bobby Nguyen </p>
      <p> nguyenla16@bonaventure.edu </p>
  </div>

  <div className="contact">
    <img className="bitImg" src={bitShiki}/>
      <p> Shiki Dixit </p>
      <p> shikhardixit17@gmail.com </p>
</div>

  <div className="contact">
      <img className="bitImg" src={bitKat}/>
        <p> Katarina Jones </p>
        <p> joneskn17@bonaventure.edu </p>
        </div>

  <div className="contact">
      <img className="bitImg" src={bitGeorge}/>
        <p> George Gadelha</p>
        <p> gadelhgj19@bonaventure.edu </p>
        </div>
  </div>
)

export default ContactUs
