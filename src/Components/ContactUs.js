import React from 'react'
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
    <h2 className = "contactPitch">OUR FOUNDING MEMBERS:</h2>
{
founders.map( ({file, name, email}) => (
  <Contact key = {name} file = {file} name = {name} email = {email} />
))
}
</div>
)

const Contact = ({file, name, email}) => (
  <div className = "contact">
  <img className = "bitImg" alt = {file} src = {file}/>
    <p> {name} </p>
    <p> {email} </p>
  </div>
)


export default ContactUs
