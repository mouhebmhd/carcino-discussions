import React from "react";
import "../styles/Header.css";

 function Header()
 {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.png" alt="CarsinoDisc Logo" className="logo" />
      </div>
      
      <nav className="nav">
        <a href="#">Company</a>
        <a href="#">Values</a>
        <a href="#">News</a>
        </nav>
        <button className="visit-btn">Visit Carcino-Disc</button>
  
    </header>
  
  );
};
export default Header;