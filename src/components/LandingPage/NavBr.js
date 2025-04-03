import React from 'react';
import { Link } from 'react-router-dom';

function NavBr() {
  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container px-5">
        <a className="navbar-brand" href="/" onClick={(e) => handleScroll(e, 'home')}>
          <span className="fw-bolder text-primary">Carsino-Disc</span>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team" onClick={(e) => handleScroll(e, 'team')}>Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-primary" to="/Login">Sign In</Link>
              </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBr;