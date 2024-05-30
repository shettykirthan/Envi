// src/Navbar.js
import React, { useState } from 'react';
import '../index.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
// Import a separate CSS file for the navbar styles
  
const Navbar = () => {

  const {user ,logoutUser} =useAuth()
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="navbar">
      
        {user ? (
          <>
          <div className="navbar-brand">
            <div className='logo'><Link to="/user">EnviPro</Link></div>
            <div className="nav-toggle" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            </div>
            <div className={`nav-items ${isOpen ? 'open' : ''}`}>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/login" onClick={logoutUser}>Logout</Link>
            </div>
          </>
        ):(
          <>
           
          <div className="navbar-brand">
            <div className='logo'><Link to="/">EnviPro</Link></div>
            <div className="nav-toggle" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            </div>
            <div className={`nav-items ${isOpen ? 'open' : ''}`}>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/login">Login</Link>
            </div>
          </>
          
        )}
    </nav>
  );
};
  
export default Navbar;
