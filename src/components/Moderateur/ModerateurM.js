import React, { useState, useEffect } from 'react';
import { Bell, Users, User, FileText, List, CheckCircle, Trash2, AlertTriangle } from 'lucide-react';
import axios from 'axios';

// Configuration d'axios avec l'URL de base de l'API
const api = axios.create({
  baseURL: 'https://api.example.com/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Intercepteur pour ajouter le token d'authentification
api.interceptors.request.use(config => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default function ModeratorInterface() {
  // États pour les données
  const [activeTab, setActiveTab] = useState('profile');
  const [activeCommunityTab, setActiveCommunityTab] = useState('users');
  const [communities, setCommunities] = useState([]);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [communityUsers, setCommunityUsers] = useState([]);
  const [pendingPublications, setPendingPublications] = useState([]);
  const [publications, setPublications] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    notificationPreferences: {
      notifyUsers: true,
      notifyPosts: true,
      notifyReports: true,
      emailNotifications: true,
      pushNotifications: true,
      frequency: 'realtime'
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Authentification
  const login = async (credentials) => {
    try {
      setIsLoading(true);
      const response = await api.post('/auth/login', credentials);
      localStorage.setItem('auth_token', response.data.token);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur d\'authentification');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    // Redirection vers la page de login
    window.location.href = '/login';
  };

  // Chargement du profil du modérateur
  const fetchProfile = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/moderator/profile');
      setProfileData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors du chargement du profil');
    } finally {
      setIsLoading(false);
    }
  };

  // Mise à jour du profil
  const updateProfile = async (profileData) => {
    try {
      setIsLoading(true);
      await api.put('/moderator/profile', profileData);
      fetchProfile(); // Recharger les données du profil
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de la mise à jour du profil');
    } finally {
      setIsLoading(false);
    }
  };

  // Mise à jour des préférences de notification
  const updateNotificationPreferences = async (preferences) => {
    try {
      setIsLoading(true);
      await api.put('/moderator/notification-preferences', preferences);
      fetchProfile(); // Recharger les données du profil
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de la mise à jour des préférences');
    } finally {
      setIsLoading(false);
    }
  };

  // Chargement des communautés
  const fetchCommunities = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/moderator/communities');
      setCommunities(response.data);
      if (response.data.length > 0 && !selectedCommunity) {
        setSelectedCommunity(response.data[0].id);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors du chargement des communautés');
    } finally {
      setIsLoading(false);
    }
  };

  // Chargement des utilisateurs en attente d'approbation
  const fetchPendingUsers = async (communityId) => {
    try {
      setIsLoading(true);
      const response = await api.get(`/moderator/communities/${communityId}/pending-users`);
      setPendingUsers(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors du chargement des utilisateurs en attente');
    } finally {
      setIsLoading(false);
    }
  };

  // Chargement des utilisateurs d'une communauté
  const fetchCommunityUsers = async (communityId) => {
    try {
      setIsLoading(true);
      const response = await api.get(`/moderator/communities/${communityId}/users`);
      setCommunityUsers(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors du chargement des utilisateurs');
    } finally {
      setIsLoading(false);
    }
  };

  // Approbation d'un utilisateur
  const approveUser = async (userId, communityId) => {
    try {
      setIsLoading(true);
      await api.post(`/moderator/communities/${communityId}/users/${userId}/approve`);
      fetchPendingUsers(communityId);
      fetchCommunityUsers(communityId);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de l\'approbation de l\'utilisateur');
    } finally {
      setIsLoading(false);
    }
  };

  // Refus d'un utilisateur
  const rejectUser = async (userId, communityId) => {
    try {
      setIsLoading(true);
      await api.post(`/moderator/communities/${communityId}/users/${userId}/reject`);
      fetchPendingUsers(communityId);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors du refus de l\'utilisateur');
    } finally {
      setIsLoading(false);
    }
  };

  // Avertissement d'un utilisateur
  const warnUser = async (userId, communityId, reason) => {
    try {
      setIsLoading(true);
      await api.post(`/moderator/communities/${communityId}/users/${userId}/warn`, { reason });
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de l\'avertissement de l\'utilisateur');
    } finally {
      setIsLoading(false);
    }
  };

  // Suppression d'un utilisateur
  const removeUser = async (userId, communityId) => {
    try {
      setIsLoading(true);
      await api.delete(`/moderator/communities/${communityId}/users/${userId}`);
      fetchCommunityUsers(communityId);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de la suppression de l\'utilisateur');
    } finally {
      setIsLoading(false);
    }
  };

  // Chargement des publications en attente d'approbation
  const fetchPendingPublications = async (communityId) => {
    try {
      setIsLoading(true);
      const response = await api.get(`/moderator/communities/${communityId}/pending-publications`);
      setPendingPublications(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors du chargement des publications en attente');
    } finally {
      setIsLoading(false);
    }
  };

  // Chargement des publications d'une communauté
  const fetchPublications = async (communityId) => {
    try {
      setIsLoading(true);
      const response = await api.get(`/moderator/communities/${communityId}/publications`);
      setPublications(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors du chargement des publications');
    } finally {
      setIsLoading(false);
    }
  };

  // Approbation d'une publication
  const approvePublication = async (publicationId, communityId) => {
    try {
      setIsLoading(true);
      await api.post(`/moderator/communities/${communityId}/publications/${publicationId}/approve`);
      fetchPendingPublications(communityId);
      fetchPublications(communityId);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de l\'approbation de la publication');
    } finally {
      setIsLoading(false);
    }
  };

  // Refus d'une publication
  const rejectPublication = async (publicationId, communityId) => {
    try {
      setIsLoading(true);
      await api.post(`/moderator/communities/${communityId}/publications/${publicationId}/reject`);
      fetchPendingPublications(communityId);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors du refus de la publication');
    } finally {
      setIsLoading(false);
    }
  };

  // Signalement d'une publication
  const reportPublication = async (publicationId, communityId, reason) => {
    try {
      setIsLoading(true);
      await api.post(`/moderator/communities/${communityId}/publications/${publicationId}/report`, { reason });
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors du signalement de la publication');
    } finally {
      setIsLoading(false);
    }
  };

  // Suppression d'une publication
  const removePublication = async (publicationId, communityId) => {
    try {
      setIsLoading(true);
      await api.delete(`/moderator/communities/${communityId}/publications/${publicationId}`);
      fetchPublications(communityId);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de la suppression de la publication');
    } finally {
      setIsLoading(false);
    }
  };

  // Chargement des notifications
  const fetchNotifications = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/moderator/notifications');
      setNotifications(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors du chargement des notifications');
    } finally {
      setIsLoading(false);
    }
  };

  // Changement de communauté sélectionnée
  const handleCommunityChange = (communityId) => {
    setSelectedCommunity(communityId);
    if (activeCommunityTab === 'users') {
      fetchPendingUsers(communityId);
      fetchCommunityUsers(communityId);
    } else if (activeCommunityTab === 'publications') {
      fetchPendingPublications(communityId);
      fetchPublications(communityId);
    }
  };

  // Changement d'onglet principal
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    if (tab === 'profile') {
      fetchProfile();
    } else if (tab === 'communities') {
      fetchCommunities();
    } else if (tab === 'notifications') {
      fetchNotifications();
    }
  };
  
  // Changement d'onglet de communauté
  const handleCommunityTabChange = (tab) => {
    setActiveCommunityTab(tab);
    
    if (selectedCommunity) {
      if (tab === 'users') {
        fetchPendingUsers(selectedCommunity);
        fetchCommunityUsers(selectedCommunity);
      } else if (tab === 'publications') {
        fetchPendingPublications(selectedCommunity);
        fetchPublications(selectedCommunity);
      }
    }
  };

  // Chargement initial
  useEffect(() => {
    fetchProfile();
    fetchCommunities();
    fetchNotifications();
  }, []);

  // Soumission du formulaire de profil
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const profileData = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password') || undefined // Ne pas envoyer si vide
    };
    updateProfile(profileData);
  };

  // Soumission des préférences de notification
  const handleNotificationPreferencesSubmit = (e) => {
    e.preventDefault();
    const preferences = {
      notifyUsers: e.target.notifyUsers.checked,
      notifyPosts: e.target.notifyPosts.checked,
      notifyReports: e.target.notifyReports.checked
    };
    updateNotificationPreferences(preferences);
  };

  // Soumission des préférences de réception des notifications
  const handleNotificationReceiptSubmit = (e) => {
    e.preventDefault();
    const preferences = {
      emailNotifications: e.target.emailNotif.checked,
      pushNotifications: e.target.pushNotif.checked,
      frequency: e.target.frequency.value
    };
    updateNotificationPreferences({
      ...profileData.notificationPreferences,
      ...preferences
    });
  };
  
  return (
    <div className="container-fluid bg-light">
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button type="button" className="btn-close" onClick={() => setError(null)}></button>
        </div>
      )}
      
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-dark text-white p-0" style={{ minHeight: '100vh' }}>
          <div className="p-4 text-center">
            <User size={48} className="mb-2" />
            <h4>Modérateur</h4>
            <p className="text-light">{profileData.username}</p>
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
                {notifications.length > 0 && (
                  <span className="badge bg-danger ms-2">{notifications.length}</span>
                )}
              </button>
            </li>
            <li className="nav-item mt-auto">
              <button 
                className="nav-link text-white py-3 px-4" 
                onClick={logout}
              >
                <i className="bi bi-box-arrow-right me-2"></i> Déconnexion
              </button>
            </li>
          </ul>
        </div>
        
        {/* Main Content */}
        <div className="col-md-9 p-4">
          {isLoading && (
            <div className="text-center my-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Chargement...</span>
              </div>
            </div>
          )}
          
          {/* Profile Management */}
          {activeTab === 'profile' && !isLoading && (
            <div>
              <h2><User className="me-2" /> Gérer son profil</h2>
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">Informations personnelles</h5>
                  <form onSubmit={handleProfileSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        name="username"
                        defaultValue={profileData.username} 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        defaultValue={profileData.email} 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Mot de passe (laisser vide pour ne pas changer)</label>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password"
                        placeholder="••••••••" 
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Sauvegarder</button>
                  </form>
                </div>
              </div>
              
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">Préférences de notification</h5>
                  <form onSubmit={handleNotificationPreferencesSubmit}>
                    <div className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="notifyUsers" 
                        name="notifyUsers"
                        defaultChecked={profileData.notificationPreferences.notifyUsers} 
                      />
                      <label className="form-check-label" htmlFor="notifyUsers">
                        Nouvelles demandes d'utilisateur
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="notifyPosts" 
                        name="notifyPosts"
                        defaultChecked={profileData.notificationPreferences.notifyPosts} 
                      />
                      <label className="form-check-label" htmlFor="notifyPosts">
                        Nouvelles publications à approuver
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="notifyReports" 
                        name="notifyReports"
                        defaultChecked={profileData.notificationPreferences.notifyReports} 
                      />
                      <label className="form-check-label" htmlFor="notifyReports">
                        Signalements de publications
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Enregistrer les préférences</button>
                  </form>
                </div>
              </div>
            </div>
          )}
          
          {/* Communities Management */}
          {activeTab === 'communities' && !isLoading && (
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
                  {/* Community Selection */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5>
                      {activeCommunityTab === 'users' ? 'Gérer les utilisateurs d\'une communauté' : 'Gérer les publications d\'une communauté'}
                    </h5>
                    <div className="dropdown">
                      <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="communityDropdown" data-bs-toggle="dropdown">
                        {communities.find(c => c.id === selectedCommunity)?.name || 'Sélectionner une communauté'}
                      </button>
                      <ul className="dropdown-menu">
                        {communities.map(community => (
                          <li key={community.id}>
                            <a 
                              className="dropdown-item" 
                              href="#"
                              onClick={() => handleCommunityChange(community.id)}
                            >
                              {community.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Users Management */}
                  {activeCommunityTab === 'users' && selectedCommunity && (
                    <div>
                      <div className="card mb-4">
                        <div className="card-header bg-warning text-dark">
                          <h6 className="mb-0">Demandes d'utilisateurs en attente</h6>
                        </div>
                        <div className="card-body">
                          {pendingUsers.length === 0 ? (
                            <p className="text-muted">Aucune demande en attente</p>
                          ) : (
                            <div className="list-group">
                              {pendingUsers.map(user => (
                                <div key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                                  <div>
                                    <h6>{user.name}</h6>
                                    <small className="text-muted">{user.email}</small>
                                  </div>
                                  <div>
                                    <button 
                                      className="btn btn-sm btn-success me-2"
                                      onClick={() => approveUser(user.id, selectedCommunity)}
                                    >
                                      <CheckCircle size={16} className="me-1" /> Approuver
                                    </button>
                                    <button 
                                      className="btn btn-sm btn-danger"
                                      onClick={() => rejectUser(user.id, selectedCommunity)}
                                    >
                                      <Trash2 size={16} className="me-1" /> Refuser
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
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
                          
                          {communityUsers.length === 0 ? (
                            <p className="text-muted">Aucun utilisateur dans cette communauté</p>
                          ) : (
                            <div className="list-group">
                              {communityUsers.map(user => (
                                <div key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                                  <div>
                                    <h6>{user.name}</h6>
                                    <small className="text-muted">{user.email}</small>
                                    <span className={`badge ${user.role === 'admin' ? 'bg-success' : 'bg-primary'} ms-2`}>
                                      {user.role === 'admin' ? 'Admin' : 'Membre'}
                                    </span>
                                  </div>
                                  <div>
                                    <button 
                                      className="btn btn-sm btn-warning me-2"
                                      onClick={() => {
                                        const reason = prompt('Raison de l\'avertissement:');
                                        if (reason) warnUser(user.id, selectedCommunity, reason);
                                      }}
                                    >
                                      <AlertTriangle size={16} className="me-1" /> Avertir
                                    </button>
                                    <button 
                                      className="btn btn-sm btn-danger"
                                      onClick={() => {
                                        if (window.confirm(`Êtes-vous sûr de vouloir supprimer ${user.name} ?`)) {
                                          removeUser(user.id, selectedCommunity);
                                        }
                                      }}
                                    >
                                      <Trash2 size={16} className="me-1" /> Supprimer
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Publications Management */}
                  {activeCommunityTab === 'publications' && selectedCommunity && (
                    <div>
                      <div className="card mb-4">
                        <div className="card-header bg-warning text-dark">
                          <h6 className="mb-0">Publications en attente d'approbation</h6>
                        </div>
                        <div className="card-body">
                          {pendingPublications.length === 0 ? (
                            <p className="text-muted">Aucune publication en attente d'approbation</p>
                          ) : (
                            <div className="list-group">
                              {pendingPublications.map(publication => (
                                <div key={publication.id} className="list-group-item">
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h6>{publication.title}</h6>
                                    <small className="text-muted">Par {publication.author} - {publication.date}</small>
                                  </div>
                                  <p className="mb-2">{publication.excerpt}</p>
                                  <div className="d-flex justify-content-end">
                                    <button 
                                      className="btn btn-sm btn-success me-2"
                                      onClick={() => approvePublication(publication.id, selectedCommunity)}
                                    >
                                      <CheckCircle size={16} className="me-1" /> Approuver
                                    </button>
                                    <button 
                                      className="btn btn-sm btn-danger"
                                      onClick={() => rejectPublication(publication.id, selectedCommunity)}
                                    >
                                      <Trash2 size={16} className="me-1" /> Refuser
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
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
                          
                          {publications.length === 0 ? (
                            <p className="text-muted">Aucune publication dans cette communauté</p>
                          ) : (
                            <div className="list-group">
                              {publications.map(publication => (
                                <div key={publication.id} className="list-group-item">
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h6>{publication.title}</h6>
                                    <div>
                                      <span className={`badge ${publication.status === 'reported' ? 'bg-danger' : 'bg-success'} me-2`}>
                                        {publication.status === 'reported' ? 'Signalée' : 'Approuvée'}
                                      </span>
                                      <small className="text-muted">Par {publication.author} - {publication.date}</small>
                                    </div>
                                  </div>
                                  <p className="mb-2">{publication.excerpt}</p>
                                  <div className="d-flex justify-content-end">
                                    <button 
                                      className="btn btn-sm btn-warning me-2"
                                      onClick={() => {
                                        const reason = prompt('Raison du signalement:');
                                        if (reason) reportPublication(publication.id, selectedCommunity, reason);
                                      }}
                                    >
                                      <AlertTriangle size={16} className="me-1" /> Signaler</button>
                                    <button 
                                      className="btn btn-sm btn-danger"
                                      onClick={() => {
                                        if (window.confirm(`Êtes-vous sûr de vouloir supprimer la publication "${publication.title}" ?`)) {
                                          removePublication(publication.id, selectedCommunity);
                                        }
                                      }}
                                    >
                                      <Trash2 size={16} className="me-1" /> Supprimer
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Notifications Management */}
          {activeTab === 'notifications' && !isLoading && (
            <div>
              <h2><Bell className="me-2" /> Gérer ses notifications</h2>
              
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">Notifications récentes</h5>
                  
                  {notifications.length === 0 ? (
                    <p className="text-muted">Aucune notification récente</p>
                  ) : (
                    <div className="list-group">
                      {notifications.map(notification => (
                        <div key={notification.id} className="list-group-item list-group-item-action d-flex gap-3 py-3">
                          <div 
                            className={`${getNotificationTypeClass(notification.type)} rounded-circle p-2 d-flex align-items-center justify-content-center`}
                            style={{ width: "48px", height: "48px" }}
                          >
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                              <h6 className="mb-0">{notification.title}</h6>
                              <p className="mb-0 opacity-75">{notification.message}</p>
                            </div>
                            <small className="opacity-50 text-nowrap">{formatNotificationTime(notification.timestamp)}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">Configuration des notifications</h5>
                  
                  <form onSubmit={handleNotificationReceiptSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Mode de réception</label>
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="emailNotif" 
                          name="emailNotif"
                          defaultChecked={profileData.notificationPreferences.emailNotifications} 
                        />
                        <label className="form-check-label" htmlFor="emailNotif">
                          Recevoir par email
                        </label>
                      </div>
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="pushNotif" 
                          name="pushNotif"
                          defaultChecked={profileData.notificationPreferences.pushNotifications} 
                        />
                        <label className="form-check-label" htmlFor="pushNotif">
                          Recevoir par notification push
                        </label>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label">Fréquence des résumés</label>
                      <select 
                        className="form-select" 
                        name="frequency"
                        defaultValue={profileData.notificationPreferences.frequency}
                      >
                        <option value="realtime">En temps réel</option>
                        <option value="daily">Quotidien</option>
                        <option value="weekly">Hebdomadaire</option>
                      </select>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Enregistrer les préférences</button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Fonctions utilitaires pour les notifications
function getNotificationTypeClass(type) {
  switch (type) {
    case 'user_request':
      return 'bg-primary';
    case 'publication_pending':
      return 'bg-warning';
    case 'publication_reported':
      return 'bg-danger';
    default:
      return 'bg-secondary';
  }
}

function getNotificationIcon(type) {
  switch (type) {
    case 'user_request':
      return <User color="white" size={24} />;
    case 'publication_pending':
      return <FileText color="white" size={24} />;
    case 'publication_reported':
      return <AlertTriangle color="white" size={24} />;
    default:
      return <Bell color="white" size={24} />;
  }
}

function formatNotificationTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);

  if (diffSec < 60) {
    return "à l'instant";
  } else if (diffMin < 60) {
    return `il y a ${diffMin} minute${diffMin > 1 ? 's' : ''}`;
  } else if (diffHour < 24) {
    return `il y a ${diffHour} heure${diffHour > 1 ? 's' : ''}`;
  } else if (diffDay < 7) {
    return `il y a ${diffDay} jour${diffDay > 1 ? 's' : ''}`;
  } else {
    return date.toLocaleDateString();
  }
}