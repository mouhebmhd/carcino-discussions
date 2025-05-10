import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from "../components/LandingPage/style.module.css";
import { MdDynamicFeed } from "react-icons/md";
import { CiTextAlignLeft } from "react-icons/ci";
import { VscGitPullRequestDraft } from "react-icons/vsc";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import "../styles/navbarStyle.css"
import {
  FaHome, FaInfoCircle, FaTools, FaPhone, FaChartLine,
  FaUsers, FaNetworkWired, FaUserFriends, FaUserShield,
  FaBell, FaUserCircle, FaSignInAlt
} from 'react-icons/fa';

function NavBar() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("visitor");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setRole(storedUser.role);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid px-5">
        <NavLink className={`navbar-brand ${styles.navbarBrand}`} to="/">
          CarsinoDisc
        </NavLink>
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
            {(role === "membre" || role === "visitor") && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                  }
                  to="/home">
                  <FaHome className="mx-2" />  Accueil
                </NavLink>
              </li>
            )}

            {/* Visitor Links */}
            {role === "visitor" && (
              <>
                <li className="nav-item">
                  <a className={`nav-link ${styles.navLink}`} href="#about">
                    <FaInfoCircle className="mx-2" />  À propos
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${styles.navLink}`} href="#services">
                    <FaTools className="mx-2" /> Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${styles.navLink}`} href="#contact">
                    <FaPhone className="mx-2" /> Contact
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                    }
                    to="/login">
                    <FaSignInAlt className="mx-2" /> Se connecter
                  </NavLink>
                </li>
              </>
            )}

            {/* Authenticated User Links */}
            {role != "visitor" && (
              <>
                {role != "membre" && (
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                      }
                      to="/dashboardAdmin">
                      <TbLayoutDashboardFilled className="mx-2" /> Dashboard
                    </NavLink>
                  </li>
                )}
                {role !== "administrateur" && (
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                      }
                      to="/feedDisplay">
                      <MdDynamicFeed className="mx-2" /> Fil d'actualité
                    </NavLink>
                  </li>
                )}
                
                {role !== "administrateur" && (
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                      }
                      to="/network">
                      <FaNetworkWired className="mx-2" /> Réseau
                    </NavLink>
                  </li>
                )}
                {role == "membre" && (
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                      }
                      to="/communitiesDisplay">
                      <FaNetworkWired className="mx-2" /> Communauté
                    </NavLink>
                  </li>
                )}
                {role !== "membre" && (
                  <>
                    
                    
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                        }
                        to="/abonnements">
                        <VscGitPullRequestDraft className="mx-2" /> Abonnements
                      </NavLink>
                    </li>
                  </>
                )}
                {role !== "administrateur" && (
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                      }
                      to="/notifications">
                      <FaBell className="mx-2" /> Notifications
                    </NavLink>
                  </li>
                )}
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                    }
                    to={`/myProfile/${user?._id}`}>
                    <FaUserCircle className="mx-2" /> Mon Profil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-dark mx-2"
                    onClick={() => {
                      localStorage.clear();
                      window.location = "/login";
                    }}>
                    <FaSignInAlt className="mx-2" /> Se déconnecter
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
