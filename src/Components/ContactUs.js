import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => (
  <div className = "contactUsMore">
    <h2><Link to='/' style = {{textDecoration: 'none', color: 'black', fontSize: 25, display: 'flex', borderStyle: 'solid', alignItem: 'flex-end', paddingBottom: '10px', paddingTop: '10px'}}>Home</Link></h2>
    <p>If you would like to reach out to us, here is our information:</p>
    <div className = "verticalLine"></div>
  </div>
)

export default ContactUs
