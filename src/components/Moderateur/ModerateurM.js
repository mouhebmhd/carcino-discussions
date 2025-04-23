import React, { useState } from 'react';
import { Bell, Users, User, FileText, List, CheckCircle, Trash2, AlertTriangle } from 'lucide-react';

export default function ModeratorDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const [activeCommunityTab, setActiveCommunityTab] = useState('users');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const handleCommunityTabChange = (tab) => {
    setActiveCommunityTab(tab);
  };
  
  return (
    <div className="container-fluid bg-light">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-dark text-white p-0" style={{ minHeight: '100vh' }}>
          <div className="p-4 text-center">
            <User size={48} className="mb-2" />
            <h4>Modérateur</h4>
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <button 
                className={`nav-link text-white py-3 px-4 ${activeTab === 'profile' ? 'bg-primary' : ''}`} 
                onClick={() => handleTabChange('profile')}
              >
                <User className="me-2" /> Gérer son profil
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link text-white py-3 px-4 ${activeTab === 'communities' ? 'bg-primary' : ''}`} 
                onClick={() => handleTabChange('communities')}
              >
                <Users className="me-2" /> Gérer les communautés
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link text-white py-3 px-4 ${activeTab === 'notifications' ? 'bg-primary' : ''}`} 
                onClick={() => handleTabChange('notifications')}
              >
                <Bell className="me-2" /> Gérer ses notifications
                <span className="badge bg-danger ms-2">3</span>
              </button>
            </li>
          </ul>
        </div>
        
        {/* Main Content */}
        <div className="col-md-9 p-4">
          {/* Profile Management */}
          {activeTab === 'profile' && (
            <div>
              <h2><User className="me-2" /> Gérer son profil</h2>
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">Informations personnelles</h5>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                      <input type="text" className="form-control" id="username" defaultValue="moderateur1" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" defaultValue="moderateur@example.com" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Mot de passe</label>
                      <input type="password" className="form-control" id="password" placeholder="••••••••" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sauvegarder</button>
                  </form>
                </div>
              </div>
              
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">Préférences de notification</h5>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="notifyUsers" defaultChecked />
                    <label className="form-check-label" htmlFor="notifyUsers">
                      Nouvelles demandes d'utilisateur
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="notifyPosts" defaultChecked />
                    <label className="form-check-label" htmlFor="notifyPosts">
                      Nouvelles publications à approuver
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="notifyReports" defaultChecked />
                    <label className="form-check-label" htmlFor="notifyReports">
                      Signalements de publications
                    </label>
                  </div>
                  <button className="btn btn-primary mt-2">Enregistrer les préférences</button>
                </div>
              </div>
            </div>
          )}
          
          {/* Communities Management */}
          {activeTab === 'communities' && (
            <div>
              <h2><Users className="me-2" /> Gérer les communautés</h2>
              
              <div className="card mt-4">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <button 
                        className={`nav-link ${activeCommunityTab === 'users' ? 'active' : ''}`}
                        onClick={() => handleCommunityTabChange('users')}
                      >
                        <Users className="me-1" size={16} /> Utilisateurs
                      </button>
                    </li>
                    <li className="nav-item">
                      <button 
                        className={`nav-link ${activeCommunityTab === 'publications' ? 'active' : ''}`}
                        onClick={() => handleCommunityTabChange('publications')}
                      >
                        <FileText className="me-1" size={16} /> Publications
                      </button>
                    </li>
                  </ul>
                </div>
                
                <div className="card-body">
                  {/* Users Management */}
                  {activeCommunityTab === 'users' && (
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5>Gérer les utilisateurs d'une communauté</h5>
                        <div className="dropdown">
                          <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="communityDropdown" data-bs-toggle="dropdown">
                            Sélectionner une communauté
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Communauté A</a></li>
                            <li><a className="dropdown-item" href="#">Communauté B</a></li>
                            <li><a className="dropdown-item" href="#">Communauté C</a></li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="card mb-4">
                        <div className="card-header bg-warning text-dark">
                          <h6 className="mb-0">Demandes d'utilisateurs en attente</h6>
                        </div>
                        <div className="card-body">
                          <div className="list-group">
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                              <div>
                                <h6>Michel Dupont</h6>
                                <small className="text-muted">michel.dupont@email.com</small>
                              </div>
                              <div>
                                <button className="btn btn-sm btn-success me-2">
                                  <CheckCircle size={16} className="me-1" /> Approuver
                                </button>
                                <button className="btn btn-sm btn-danger">
                                  <Trash2 size={16} className="me-1" /> Refuser
                                </button>
                              </div>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                              <div>
                                <h6>Sophie Martin</h6>
                                <small className="text-muted">sophie.martin@email.com</small>
                              </div>
                              <div>
                                <button className="btn btn-sm btn-success me-2">
                                  <CheckCircle size={16} className="me-1" /> Approuver
                                </button>
                                <button className="btn btn-sm btn-danger">
                                  <Trash2 size={16} className="me-1" /> Refuser
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card">
                        <div className="card-header">
                          <h6 className="mb-0">Liste des utilisateurs de la communauté</h6>
                        </div>
                        <div className="card-body">
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Rechercher un utilisateur..." />
                            <button className="btn btn-outline-secondary" type="button">Rechercher</button>
                          </div>
                          
                          <div className="list-group">
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                              <div>
                                <h6>Jean Martin</h6>
                                <small className="text-muted">jean.martin@email.com</small>
                                <span className="badge bg-primary ms-2">Membre</span>
                              </div>
                              <div>
                                <button className="btn btn-sm btn-warning me-2">
                                  <AlertTriangle size={16} className="me-1" /> Avertir
                                </button>
                                <button className="btn btn-sm btn-danger">
                                  <Trash2 size={16} className="me-1" /> Supprimer
                                </button>
                              </div>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                              <div>
                                <h6>Marie Dubois</h6>
                                <small className="text-muted">marie.dubois@email.com</small>
                                <span className="badge bg-success ms-2">Admin</span>
                              </div>
                              <div>
                                <button className="btn btn-sm btn-warning me-2">
                                  <AlertTriangle size={16} className="me-1" /> Avertir
                                </button>
                                <button className="btn btn-sm btn-danger">
                                  <Trash2 size={16} className="me-1" /> Supprimer
                                </button>
                              </div>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                              <div>
                                <h6>Pierre Leroy</h6>
                                <small className="text-muted">pierre.leroy@email.com</small>
                                <span className="badge bg-primary ms-2">Membre</span>
                              </div>
                              <div>
                                <button className="btn btn-sm btn-warning me-2">
                                  <AlertTriangle size={16} className="me-1" /> Avertir
                                </button>
                                <button className="btn btn-sm btn-danger">
                                  <Trash2 size={16} className="me-1" /> Supprimer
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Publications Management */}
                  {activeCommunityTab === 'publications' && (
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5>Gérer les publications d'une communauté</h5>
                        <div className="dropdown">
                          <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="communityDropdown" data-bs-toggle="dropdown">
                            Sélectionner une communauté
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Communauté A</a></li>
                            <li><a className="dropdown-item" href="#">Communauté B</a></li>
                            <li><a className="dropdown-item" href="#">Communauté C</a></li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="card mb-4">
                        <div className="card-header bg-warning text-dark">
                          <h6 className="mb-0">Publications en attente d'approbation</h6>
                        </div>
                        <div className="card-body">
                          <div className="list-group">
                            <div className="list-group-item">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6>Guide des débutants</h6>
                                <small className="text-muted">Par Jean Martin - il y a 2 heures</small>
                              </div>
                              <p className="mb-2">Un guide complet pour les nouveaux membres de la communauté...</p>
                              <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-success me-2">
                                  <CheckCircle size={16} className="me-1" /> Approuver
                                </button>
                                <button className="btn btn-sm btn-danger">
                                  <Trash2 size={16} className="me-1" /> Refuser
                                </button>
                              </div>
                            </div>
                            <div className="list-group-item">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6>Annonce importante</h6>
                                <small className="text-muted">Par Marie Dubois - il y a 5 heures</small>
                              </div>
                              <p className="mb-2">Information concernant les nouvelles règles de participation...</p>
                              <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-success me-2">
                                  <CheckCircle size={16} className="me-1" /> Approuver
                                </button>
                                <button className="btn btn-sm btn-danger">
                                  <Trash2 size={16} className="me-1" /> Refuser
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card">
                        <div className="card-header">
                          <h6 className="mb-0">Liste des publications</h6>
                        </div>
                        <div className="card-body">
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Rechercher une publication..." />
                            <button className="btn btn-outline-secondary" type="button">Rechercher</button>
                          </div>
                          
                          <div className="list-group">
                            <div className="list-group-item">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6>Bienvenue dans la communauté</h6>
                                <div>
                                  <span className="badge bg-success me-2">Approuvée</span>
                                  <small className="text-muted">Par Pierre Leroy - 12/04/2025</small>
                                </div>
                              </div>
                              <p className="mb-2">Message de bienvenue pour tous les nouveaux membres...</p>
                              <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-warning me-2">
                                  <AlertTriangle size={16} className="me-1" /> Signaler
                                </button>
                                <button className="btn btn-sm btn-danger">
                                  <Trash2 size={16} className="me-1" /> Supprimer
                                </button>
                              </div>
                            </div>
                            <div className="list-group-item">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6>FAQ du forum</h6>
                                <div>
                                  <span className="badge bg-success me-2">Approuvée</span>
                                  <small className="text-muted">Par Marie Dubois - 10/04/2025</small>
                                </div>
                              </div>
                              <p className="mb-2">Questions fréquemment posées et leurs réponses...</p>
                              <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-warning me-2">
                                  <AlertTriangle size={16} className="me-1" /> Signaler
                                </button>
                                <button className="btn btn-sm btn-danger">
                                  <Trash2 size={16} className="me-1" /> Supprimer
                                </button>
                              </div>
                            </div>
                            <div className="list-group-item">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6>Événement mensuel</h6>
                                <div>
                                  <span className="badge bg-danger me-2">Signalée</span>
                                  <small className="text-muted">Par Jean Martin - 05/04/2025</small>
                                </div>
                              </div>
                              <p className="mb-2">Information sur le prochain événement de la communauté...</p>
                              <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-warning me-2">
                                  <AlertTriangle size={16} className="me-1" /> Signaler
                                </button>
                                <button className="btn btn-sm btn-danger">
                                  <Trash2 size={16} className="me-1" /> Supprimer
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Notifications Management */}
          {activeTab === 'notifications' && (
            <div>
              <h2><Bell className="me-2" /> Gérer ses notifications</h2>
              
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">Notifications récentes</h5>
                  
                  <div className="list-group">
                    <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                      <div className="bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                        <User color="white" size={24} />
                      </div>
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                          <h6 className="mb-0">Nouvelle demande d'utilisateur</h6>
                          <p className="mb-0 opacity-75">Sophie Martin souhaite rejoindre la communauté "Communauté A"</p>
                        </div>
                        <small className="opacity-50 text-nowrap">il y a 1 heure</small>
                      </div>
                    </div>
                    
                    <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                      <div className="bg-warning rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                        <FileText color="white" size={24} />
                      </div>
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                          <h6 className="mb-0">Publication en attente d'approbation</h6>
                          <p className="mb-0 opacity-75">Nouvelle publication "Guide des débutants" à approuver dans "Communauté A"</p>
                        </div>
                        <small className="opacity-50 text-nowrap">il y a 2 heures</small>
                      </div>
                    </div>
                    
                    <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                      <div className="bg-danger rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px" }}>
                        <AlertTriangle color="white" size={24} />
                      </div>
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                          <h6 className="mb-0">Publication signalée</h6>
                          <p className="mb-0 opacity-75">La publication "Événement mensuel" a été signalée par 3 utilisateurs</p>
                        </div>
                        <small className="opacity-50 text-nowrap">il y a 5 heures</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">Configuration des notifications</h5>
                  
                  <div className="mb-3">
                    <label className="form-label">Mode de réception</label>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="emailNotif" defaultChecked />
                      <label className="form-check-label" htmlFor="emailNotif">
                        Recevoir par email
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="pushNotif" defaultChecked />
                      <label className="form-check-label" htmlFor="pushNotif">
                        Recevoir par notification push
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Fréquence des résumés</label>
                    <select className="form-select">
                      <option>En temps réel</option>
                      <option>Quotidien</option>
                      <option>Hebdomadaire</option>
                    </select>
                  </div>
                  
                  <button className="btn btn-primary">Enregistrer les préférences</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}