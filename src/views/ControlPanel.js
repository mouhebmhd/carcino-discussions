import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Moderators from "./moderators";
import Users from "./users";
import Communities from "./Community";
import Posts from "./publications";
import Dashboard from "./Dashboard";
import styles from "../styles/sideBarStyle.module.css"; // Import CSS Module

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

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
    <div className={styles.sidebarHeader}>Dashboard</div>
    <ul className={styles.sidebarNav}>
      <li className={styles.navItem}>
        <a
          className={`${styles.navLink} ${activeTab === 'dashboard' ? styles.active : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('dashboard'); }}
        >
          <i className="bi bi-house-door"></i>
          Activity Center
        </a>
      </li>
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
      <li className={styles.navItem}>
        <a
          className={`${styles.navLink} ${activeTab === 'users' ? styles.active : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('users'); }}
        >
          <i className="bi bi-person"></i>
          Gérer les utilisateurs
        </a>
      </li>
      <li className={styles.navItem}>
        <a
          className={`${styles.navLink} ${activeTab === 'communities' ? styles.active : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('communities'); }}
        >
          <i className="bi bi-people-fill"></i>
          Gérer les communautés
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
          </main>
        </div>
      </div>
    </>
  );
}
