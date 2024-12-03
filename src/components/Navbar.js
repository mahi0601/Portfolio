// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Name with styled initials */}
        <div className="navbar-logo">
          <span className="initials">BB</span> 
        </div>
        
        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/projects" className="navbar-link">Works</Link> {/* Link to Projects/Works page */}
          <Link to="/blog" className="navbar-link">Blog →</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
