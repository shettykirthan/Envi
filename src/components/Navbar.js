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
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/Contact">Contact</Link>
        
        {user ? (
          <>
            <Link to="/room">Room</Link>
            {user.$id === 'admin' || user.$id === 'admin1' ? (
              <Link to="/createevent">Create</Link>
            ) : (
              <Link to="/eventslist">Events</Link>
            )}
            <Link to="/login" onClick={logoutUser}>Logout</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
