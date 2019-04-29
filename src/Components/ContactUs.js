import React from 'react'
import Banner from './Banner'
import bitBobby from "../assets/bitBobby.png"
import bitMike from "../assets/bitMike.png"
import bitShiki from "../assets/bitShiki.png"
import bitKat from "../assets/bitKat.png"
import bitGeorge from "../assets/bitGeorge.png"

const founders = [
  { file : bitMike, name:"Michael Czyzewski", email: "czyzewm16@bonaventure.edu" },
  { file : bitBobby, name:"Bobby Nguyen", email: "nguyenla16@bonaventure.edu" },
  { file : bitShiki, name: "Shikhar Dixit", email:"shikhardixit17@gmail.com" },
  { file : bitKat, name:"Katarina Jones", email: "joneskn17@bonaventure.edu" },
  { file : bitGeorge, name: "George Gadelha", email:"gadelhgj19@bonaventure.edu" },
]

const ContactUs = () => (
  <div>
    <Banner/>
    <h2 className = "contactPitch">OUR FOUNDING MEMBERS:</h2>
{
founders.map( ({file, name, email}) => (
  <div className = "contact">
  <img key = {name} className = "bitImg" src = {file}/>
    <p> {name} </p>
    <p> {email} </p>
  </div>
))
}
</div>
)


export default ContactUs
