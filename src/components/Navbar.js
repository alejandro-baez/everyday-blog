import React from 'react'
import { Link } from 'react-router-dom'
//need to use link

const Navbar = () => {
  return (
    <header className="header-container">
        <div className='logo container-item'>Logo
        </div>
        <div className='nav-options container-item'>
            <ul className='nav-list-links'>
                <li>Home</li>
                <li>Search</li>
                <li>Log In</li>
                <li>Sign Up</li>

            </ul>
        </div>

    </header>
  )
}

export default Navbar

