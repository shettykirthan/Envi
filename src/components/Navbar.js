// src/Navbar.js
import React, { useState } from 'react';
import '../index.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to ="/Home">MyApp</Link>
      <div className={`nav-items ${isOpen ? 'open' : ''}`}>
        <Link to ="/About">About</Link>
        <Link to ="/Contact">Contact</Link>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};
export default Navbar;
