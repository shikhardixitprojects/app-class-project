import React from 'react'
import BitEatingTrans from "../assets/BitEatingTrans.png"
const About = () => (
  <div >
    <h2 className = "contactPitch">WELCOME TO BELP </h2>
    <br/>
    <h3 className = "aboutWhat">What is this?</h3>

    <p className = "aboutIntro"> The creation of BELP started as an inspiration from YELP
     and as a class project for IT280B - App Development. Our founding members wanted a streamlined
     resource of restaurants and bars around town exlusively for St. Bonaventure students because as students ourselves,
     we understand what we want and where we want to dine.</p>
     <br/>
       <h3 className = "aboutWhat">Our goal is:</h3>
    <p className = "aboutIntro">We hope that with BELP, St. Bonaventure students
    will have access to these resources to make the best choice based on appetite, style, and pocket.
    Furthermore, we also want to encourage fellow students to really see the power of computer science
    and how it enables the creation of amazing things (such as, this website).
    </p>
    <img src = {BitEatingTrans}/>
  </div>
)

export default About
