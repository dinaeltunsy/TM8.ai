import React from 'react'
import './navbar.css'
import { Component } from "react"
import {Link} from "react-router-dom";
import tm8 from '../Images/Teamm8-logo.webp'
import { NavbarComponents } from "./NavbarComponents"


class Navbar extends Component{
  state = {clicked: false};
  handleClick =()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
    return (
      <nav className="NavbarItems">
        <img className="TM8-logo" src={tm8} alt='TEAM M8 LOGO'/>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
          {NavbarComponents.map((item, index)=>{
            return(
              <li key={index}>
                <Link to={item.url} 
                className={item.cName}>
                  {item.title}
                </Link>
              </li>
            )
          })}
          <button className='action-btn'>Join Now</button>
        </ul>


      </nav>
      
      
    )
  }
  
}


export default Navbar;