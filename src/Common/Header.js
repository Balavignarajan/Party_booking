import React from 'react'
import './Header.css'
import logo from '../img/logo-nav.png'

function Header() {
  return (
    <div>
        <div className='nav0'>
        <div className='nav1'>
            <div className='navlogo'>
            <img src={logo}/>
            </div>
           <label>Home</label>
           <label>Destination</label>
           <label>About</label>
           <label>Contact Us</label>
           <label>Community</label>
           <div className='nav-btn'>
           <button>Book an event</button>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Header