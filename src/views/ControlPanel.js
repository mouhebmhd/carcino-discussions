import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Moderators from "./moderators"
import Users from "./users"
import "../styles/sideBarStyle.css"
import Communities from "./Community"
import Posts from "./publications"
import Dashboard from "./Dashboard"
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  
  
  return (
    <>
    <NavBar></NavBar>
    <div className="container-fluid ">
      <div className="row ">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2  sideBar vh-100">
  <div className="position-sticky pt-3 ">
    <div className="d-flex align-items-center pb-3 mb-3 border-bottom border-secondary px-3">
      <span className=" fw-semibold text-center">Panneau d'administration</span>
    </div>
    <ul className="nav flex-column px-3 sideItems">
    <li className="nav-item">
        <a
          className={`nav-link d-flex align-items-center  ${activeTab === 'dashboard' ? 'active ' : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('dashboard'); }}
        >
          <i className="bi bi-people me-2"></i>
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link d-flex align-items-center ${activeTab === 'moderators' ? 'active ' : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('moderators'); }}
        >
          <i className="bi bi-people me-2"></i>
          Gérer les modérateurs
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link d-flex align-items-center ${activeTab === 'users' ? 'active ' : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('users'); }}
        >
          <i className="bi bi-person me-2"></i>
          Gérer les utilisateurs
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link d-flex align-items-center ${activeTab === 'communities' ? 'active  ' : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('communities'); }}
        >
          <i className="bi bi-people-fill me-2"></i>
          Gérer les communautés
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link d-flex align-items-center ${activeTab === 'posts' ? 'active   ' : ''}`}
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('posts'); }}
        >
          <i className="bi bi-file-earmark-text me-2"></i>
          Gérer les publications
        </a>
      </li>
    </ul>
    
  </div>
</nav>

        
        {/* Main content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
          {activeTab === 'moderators' && (
            <Moderators></Moderators>
          )}
          
          {activeTab === 'users' && (
            <Users></Users>
          )}
          {activeTab === 'communities' && (
            <Communities></Communities>
          )}
          {activeTab === 'posts' && (
            <Posts></Posts>
          )}
           {activeTab === 'dashboard' && (
            <Dashboard></Dashboard>
          )}
          
         
          
          
          
          
         
        </main>
      </div>
    </div>

    </>
  
  );
}