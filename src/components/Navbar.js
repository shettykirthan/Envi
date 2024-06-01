// src/Navbar.js
import React, { useState } from 'react';
import '../index.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="logo">
          <Link to={user ? "/user" : "/"}>EnviPro</Link>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`nav-items ${isOpen ? 'open' : ''}`}>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        {user ? (
          <Link to="/login" onClick={logoutUser}>Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
