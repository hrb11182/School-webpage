import React from 'react'
import './navbar.css';
import Logo from '../../sub-component/logo/Logo';
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <div className="nav">
      <div className="navbar">
        <Logo />
        <ul>
          <li>
          <Link to='#home'>
            Home
          </Link>
          </li>
          <li>
          <Link to='#tutor'>
            Tutor
          </Link>
          </li>
          <li>
          <Link to='#facility'>
            Facilities
          </Link>
          </li>
          <li>
          <Link to='#vision'>
            Vision
          </Link>
          </li>
          <li>
          <Link to='#award'>
            Awards
          </Link>
          </li>
          <li>
          <Link to='#footer'>
            FAQ's
          </Link>
          </li>          
        </ul>
      </div>
    </div>
  )
}

export default Navbar