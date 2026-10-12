
import React from 'react'



const Nav = () => {
  return (
    <div className='navbar'>
      <p className='logo'>Horizon Courts</p>

      <div className='nav-links'>
        <button>About Us</button>
        <p>Services</p>
        <p>Coaches</p>
        <p>Events</p>
        <p>Contacts</p>
        
      </div>

      <button className='book-btn'>Book Now<i class="ri-arrow-right-up-long-line"></i></button>
    </div>
  )
}

export default Nav