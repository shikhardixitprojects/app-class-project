import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'

const About = () => (
  <div>
    <Banner/>
    <h2 className = "aboutPitch">Welcome to BELP, Bonnies' YELP page!
    <brk></brk>
    BELP was created to provide St. Bonaventure University students
    extra information on where to eat out in town.
    Our goal is to help YOU decide which restaurants fit your appetite, mood, and pocket.</h2>
  </div>
)

export default About
