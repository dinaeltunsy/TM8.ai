import React from 'react'
import './footer.css'
import tm8logo from '../Images/Teamm8-logo.webp'




const Footer = () => {
  return (
    <div className='Footer-container'>

      <img src={tm8logo} alt="" className="TM8-logo" />
      <ul className='center-container'>
        <li><a href='/'>Home</a></li>
        <li><a href='#'>Explore</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Team</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <h3>TEAM M8 AI.</h3>
    </div>
  )
}

export default Footer