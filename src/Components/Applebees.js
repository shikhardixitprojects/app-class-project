import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'

const Applebees = () => (
  <div>
    <Banner/>
    <li><Link to='/'>Home</Link></li>
    <h1>Welcome to the Applebees!</h1>
  </div>
)

export default Applebees
