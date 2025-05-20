import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Moderators from "./moderators";
import Users from "./users";
import Communities from "./Community";
import Posts from "./publications";
import Dashboard from "./Dashboard";
import styles from "../styles/sideBarStyle.module.css"; // Import CSS Module
import Abonnements  from "./Abonnements.js";
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const user=JSON.parse(localStorage.getItem("user"))
  return (
    <>
    <section className={styles.navbarItem} >
      <NavBar />
    </section>
      
      <div className="container-fluid ">
        <div className="row ">
          {/* Sidebar */}
          <nav className={`${styles.sideBar} col-md-3 col-lg-2`}>
  <div className={styles.positionSticky}>
    <ul className={styles.sidebarNav}>
      
    {user.role=="administrateur" &&  <li className={styles.navItem}>
        <a
          className={`${styles.navLink} ${activeTab === 'dashboard' ? styles.active : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('dashboard'); }}
        >
          <i className="bi bi-house-door"></i>
          Activity Center
        </a>
      </li>}
      {user.role=="administrateur" && 
      <li className={styles.navItem}>
        <a
          className={`${styles.navLink} ${activeTab === 'moderators' ? styles.active : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('moderators'); }}
        >
          <i className="bi bi-person-check"></i>
          Gérer les modérateurs
        </a>
      </li>
      }
      {user.role=="administrateur" && 
      <li className={styles.navItem}>
        <a
          className={`${styles.navLink} ${activeTab === 'users' ? styles.active : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('users'); }}
        >
          <i className="bi bi-person"></i>
          Gérer les utilisateurs
        </a>
      </li>}
      <li className={styles.navItem}>
        <a
          className={`${styles.navLink} ${activeTab === 'abonnements' ? styles.active : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('abonnements'); }}
        >
          <i className="bi bi-people-fill"></i>
          Gérer les Abonnements
        </a>
      </li>
      <li className={styles.navItem}>
        <a
          className={`${styles.navLink} ${activeTab === 'posts' ? styles.active : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('posts'); }}
        >
          <i className="bi bi-file-earmark-text"></i>
          Gérer les publications
        </a>
      </li>
    </ul>
  </div>
</nav>


          {/* Main content */}
          <main className={`${styles.contentSections}  col-md-9 ms-sm-auto col-lg-10  `}>
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'moderators' && <Moderators />}
            {activeTab === 'users' && <Users />}
            {activeTab === 'communities' && <Communities />}
            {activeTab === 'posts' && <Posts />}
            {activeTab === 'abonnements' && <Abonnements />}
          </main>
        </div>
      </div>
    </>
  );
}
