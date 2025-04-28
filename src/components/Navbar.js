import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../components/LandingPage/style.module.css";
import { MdDynamicFeed } from "react-icons/md";
import { 
  FaHome, FaInfoCircle, FaTools, FaPhone, FaChartLine, 
  FaUsers, FaNetworkWired, FaUserFriends, FaUserShield, 
  FaBell, FaUserCircle, FaSignInAlt 
} from 'react-icons/fa';

function NavBar() {
  const isLoggedOn = JSON.parse(localStorage.getItem("user")) != undefined;

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid px-5">
        <Link className={`navbar-brand ${styles.navbarBrand}`} to="/">
          CarsinoDisc
        </Link>
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

            {/* Home */}
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/home">
                <FaHome className="mx-2 h4" /> Home
              </Link>
            </li>

            {/* Public Links */}
            {!isLoggedOn && (
              <>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.navLink}`} to="/about">
                    <FaInfoCircle className="mx-2 h4" /> About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.navLink}`} to="/services">
                    <FaTools className="mx-2 h4" /> Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.navLink}`} to="/contact">
                    <FaPhone className="mx-2 h4" /> Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.navLink}`} to="/stats">
                    <FaChartLine className="mx-2 h4" /> Stats
                  </Link>
                </li>
              </>
            )}
            {isLoggedOn && (
              <>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.navLink}`} to="/feed">
                    <MdDynamicFeed className="mx-2 h4" /> Fil d'actualité
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.navLink}`} to="/communities">
                    <FaUsers className="mx-2 h4" /> Communautés
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.navLink}`} to="/network">
                    <FaNetworkWired className="mx-2 h4" /> Network
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.navLink}`} to="/users">
                    <FaUserFriends className="mx-2 h4" /> Utilisateurs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.navLink}`} to="/moderators">
                    <FaUserShield className="mx-2 h4" /> Modérateurs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.navLink}`} to="/notifications">
                    <FaBell className="mx-2 h4" /> Notifications
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.navLink}`} to="/myProfile">
                    <FaUserCircle className="mx-2 h4" /> Mon Profil
                  </Link>
                </li>
               
              </>
            )}
                <li className="nav-item">
                  <Link className={`nav-link ${styles.navLink}`} to="/login">
                    <FaSignInAlt className="mx-2 h4" /> Sign In
                  </Link>
                </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
