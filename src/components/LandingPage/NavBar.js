import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./style.module.css"

function NavBar() {
  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white py-3">
      <div className={`container px-5`}>
        <a className={`navbar-brand ${styles.navbarBrand}`} href="/" onClick={(e) => handleScroll(e, 'home')}>
          <span className={`${styles.navbarBrand}`}>CarsinoDisc</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ms-auto" >
  <li className="nav-item">
      <a className={`nav-link ${styles.navLink}`} href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
    </li>
    <li className="nav-item">
      <a className={`nav-link ${styles.navLink}`} href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
    </li>
    <li className="nav-item">
      <a className={`nav-link ${styles.navLink}`} href="#services" onClick={(e) => handleScroll(e, 'services')}>Services</a>
    </li>
    <li className="nav-item">
      <a className={`nav-link ${styles.navLink}`} href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
    </li>
    <li className="nav-item">
      <a className={`nav-link ${styles.navLink}`} href="#stats" onClick={(e) => handleScroll(e, 'stats')}>Stats</a>
    </li>
    <li className="nav-item">
      <Link className="nav-link " to="/Login">Sign In</Link>
    </li>
  </ul>
</div>

      </div>
    </nav>
  );
}

export default NavBar;