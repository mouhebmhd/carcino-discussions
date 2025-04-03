import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
function Header()
{
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.png" alt="CarcinoDisc logo" className="logo" />
      </div>
      <nav className="nav">
        <Link to="#">Company</Link>
        <Link to="/Community">Community</Link>
        <Link to="#">Values</Link>
        <Link to="#">News</Link>
      </nav>
      <button className="visit-btn">Visit Carcino-Disc</button>
      
    </header>
  );
};
export default Header;
