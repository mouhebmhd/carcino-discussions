import React, { useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import styles from "../components/LandingPage/style.module.css";
import { MdDynamicFeed } from "react-icons/md";
import { CiTextAlignLeft } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { VscGitPullRequestDraft } from "react-icons/vsc";
import { TbLayoutDashboardFilled } from "react-icons/tb";

import {
  FaHome, FaInfoCircle, FaTools, FaPhone, FaChartLine,
  FaUsers, FaNetworkWired, FaUserFriends, FaUserShield,
  FaBell, FaUserCircle, FaSignInAlt
} from 'react-icons/fa';
import { useState } from 'react';
function NavBar() {
  const [isLoggedOn,setIsLoggedOn]=useState(JSON.parse(localStorage.getItem("user")));
  const user = JSON.parse(localStorage.getItem("user"))
  const role=user.role;
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid px-5">
        <NavLink className={`navbar-brand ${styles.navbarBrand}`} to="/">
          CarsinoDisc 
        </NavLink >
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
            {role=="membre" && 
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
                to="/home">
                <FaHome className="mx-2 " /> Home
              </NavLink >
            </li>
            }
            {!isLoggedOn._id && (
  <>
    <li className="nav-item">
      <NavLink
        className={({ isActive }) =>
          `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
        }
        to="/about"
      >
        <FaInfoCircle className="mx-2" /> About
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        className={({ isActive }) =>
          `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
        }
        to="/services"
      >
        <FaTools className="mx-2" /> Services
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        className={({ isActive }) =>
          `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
        }
        to="/contact"
      >
        <FaPhone className="mx-2" /> Contact
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        className={({ isActive }) =>
          `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
        }
        to="/login"
      >
        <FaSignInAlt className="mx-2" /> Sign In
      </NavLink>
    </li>
  </>
)}

            {isLoggedOn._id  && (
              <>
              {role!="membre" && 
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                    }
                    to="/dashboardAdmin">
                    <TbLayoutDashboardFilled  className="mx-2 " /> Dashboard
                  </NavLink >
                </li>}
              {role!="administrateur" && 
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                    }
                    to="/feedDisplay">
                    <MdDynamicFeed className="mx-2 " /> Fil d'actualité
                  </NavLink >
                </li>}
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                    }
                    to="/communities">
                    <FaUsers className="mx-2 " /> Communautés
                  </NavLink >
                </li>
                {role!="administrateur" && 
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                    }
                    to="/network">
                    <FaNetworkWired className="mx-2 " /> Network
                  </NavLink >
                </li>}
                {role!="membre" && 
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                    }
                    to="/users">
                    <FaUserFriends className="mx-2 " /> Utilisateurs
                  </NavLink >
                </li>}
                {role=="administrateur" && 
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                    }
                    to="/moderators">
                    <FaUserShield className="mx-2 " /> Modérateurs
                  </NavLink >
                </li>}
                {role!="membre" && 
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                    }
                    to="/publications">
                    <CiTextAlignLeft className="mx-2 " /> Publications
                  </NavLink >
                </li>}
                {role!="membre" && 
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                    }
                    to="/abonnements">
                    <VscGitPullRequestDraft  className="mx-2 " /> Abonnements
                  </NavLink >
                </li>}
                {user.role!="administrateur" && 
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                    }
                    to="/notifications">
                    <FaBell className="mx-2 " /> Notifications
                  </NavLink >
                </li>}
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${styles.navLink} ${isActive ? styles.activeLink : ''}`
                    }
                    to={`/myProfile/ ${user._id}`}>
                    <FaUserCircle className="mx-2 " /> Mon Profil
                  </NavLink >
                </li>
                <li className="nav-item">
              <button
                className="btn btn-dark mx-2"
                onClick={()=>{localStorage.clear();window.location=("/login")}}
                >
                <FaSignInAlt className="mx-2 " /> Se déconnecter


              </button >
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
