import React, { useState } from 'react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const stats = {
    moderators: 3,
    communities: 3,
    totalMembers: 415
  };
  
  const recentActivities = [
    { id: 1, type: 'community', content: 'Nouvelle communauté "Intelligence Artificielle" créée', date: '15/02/2025' },
    { id: 2, type: 'moderator', content: 'Nouveau modérateur Paul Bernard ajouté', date: '10/03/2025' },
    { id: 3, type: 'permission', content: 'Permission "Modération de contenu" modifiée', date: '05/03/2025' }
  ];
  
  const communities = [
    { id: 1, name: 'Intelligence Artificielle', members: 156, pendingPosts: 5, pendingUsers: 2 },
    { id: 2, name: 'Développement Web', members: 203, pendingPosts: 2, pendingUsers: 0 },
    { id: 3, name: 'Science des Données', members: 56, pendingPosts: 1, pendingUsers: 3 }
  ];
  
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 bg-dark sidebar">
          <div className="position-sticky pt-3">
            <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
              <span className="fs-5 fw-semibold text-white">Panneau d'Administration</span>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'dashboard' ? 'active' : 'text-white'}`}
                  href="#"
                  onClick={(e) => {e.preventDefault(); setActiveTab('dashboard')}}
                >
                  <i className="bi bi-speedometer2 me-2"></i>
                  Tableau de bord
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'moderators' ? 'active' : 'text-white'}`}
                  href="#"
                  onClick={(e) => {e.preventDefault(); setActiveTab('moderators')}}
                >
                  <i className="bi bi-people me-2"></i>
                  Gérer les modérateurs
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'communities' ? 'active' : 'text-white'}`}
                  href="#"
                  onClick={(e) => {e.preventDefault(); setActiveTab('communities')}}
                >
                  <i className="bi bi-collection me-2"></i>
                  Gérer les communautés
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'permissions' ? 'active' : 'text-white'}`}
                  href="#"
                  onClick={(e) => {e.preventDefault(); setActiveTab('permissions')}}
                >
                  <i className="bi bi-shield-lock me-2"></i>
                  Gérer les permissions
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'profile' ? 'active' : 'text-white'}`}
                  href="#"
                  onClick={(e) => {e.preventDefault(); setActiveTab('profile')}}
                >
                  <i className="bi bi-person-circle me-2"></i>
                  Gérer son profil
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'notifications' ? 'active' : 'text-white'}`}
                  href="#"
                  onClick={(e) => {e.preventDefault(); setActiveTab('notifications')}}
                >
                  <i className="bi bi-bell me-2"></i>
                  Gérer ses notifications
                </a>
              </li>
            </ul>
            <hr className="text-white" />
            <div className="px-3 mt-4">
              <div className="d-flex align-items-center text-white">
                <i className="bi bi-person-circle me-2 fs-5"></i>
                <div>
                  <div className="fw-bold">Admin</div>
                  <small>Connecté</small>
                </div>
              </div>
              <button className="btn btn-sm btn-outline-light w-100 mt-2">Se déconnecter</button>
            </div>
          </div>
        </nav>
        
        {/* Main content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
          {activeTab === 'dashboard' && (
            <div>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Tableau de bord</h1>
              </div>
              
              <div className="row mb-4">
                <div className="col-md-4 mb-4">
                  <div className="card text-white bg-primary h-100">
                    <div className="card-body text-center">
                      <h1 className="display-4">{stats.moderators}</h1>
                      <p className="card-text">Modérateurs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card text-white bg-success h-100">
                    <div className="card-body text-center">
                      <h1 className="display-4">{stats.communities}</h1>
                      <p className="card-text">Communautés</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card text-white bg-info h-100">
                    <div className="card-body text-center">
                      <h1 className="display-4">{stats.totalMembers}</h1>
                      <p className="card-text">Membres au total</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Activité récente</h5>
                </div>
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush">
                    {recentActivities.map(activity => (
                      <li key={activity.id} className="list-group-item py-3">
                        {activity.type === 'community' && <i className="bi bi-collection-fill text-success me-2"></i>}
                        {activity.type === 'moderator' && <i className="bi bi-person-plus-fill text-primary me-2"></i>}
                        {activity.type === 'permission' && <i className="bi bi-shield-fill-check text-warning me-2"></i>}
                        {activity.content} <span className="text-muted">({activity.date})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'communities' && (
            <div>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Gérer les communautés</h1>
                <button className="btn btn-primary">
                  <i className="bi bi-plus-circle me-2"></i>
                  Nouvelle communauté
                </button>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Nom</th>
                          <th>Membres</th>
                          <th>Publications en attente</th>
                          <th>Utilisateurs en attente</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {communities.map(community => (
                          <tr key={community.id}>
                            <td>{community.name}</td>
                            <td>{community.members}</td>
                            <td>
                              {community.pendingPosts > 0 ? (
                                <span className="badge bg-warning text-dark">{community.pendingPosts}</span>
                              ) : (
                                <span className="badge bg-secondary">0</span>
                              )}
                            </td>
                            <td>
                              {community.pendingUsers > 0 ? (
                                <span className="badge bg-warning text-dark">{community.pendingUsers}</span>
                              ) : (
                                <span className="badge bg-secondary">0</span>
                              )}
                            </td>
                            <td>
                              <div className="btn-group">
                                <button className="btn btn-sm btn-outline-primary" title="Gérer les utilisateurs">
                                  <i className="bi bi-people"></i>
                                </button>
                                <button className="btn btn-sm btn-outline-success" title="Gérer les publications">
                                  <i className="bi bi-file-text"></i>
                                </button>
                                <button className="btn btn-sm btn-outline-secondary" title="Paramètres">
                                  <i className="bi bi-gear"></i>
                                </button>
                                <button className="btn btn-sm btn-outline-danger" title="Supprimer">
                                  <i className="bi bi-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-header">
                      <h5 className="mb-0">Gérer les publications</h5>
                    </div>
                    <div className="card-body">
                      <div className="list-group mb-3">
                        <a href="#" className="list-group-item list-group-item-action">
                          <i className="bi bi-check-circle me-2"></i>
                          Approuver une publication
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                          <i className="bi bi-list-ul me-2"></i>
                          Consulter la liste des publications
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                          <i className="bi bi-flag me-2"></i>
                          Signaler une publication
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                          <i className="bi bi-trash me-2"></i>
                          Supprimer une publication
                        </a>
                      </div>
                      <button className="btn btn-primary">Voir toutes les publications</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-header">
                      <h5 className="mb-0">Gérer les utilisateurs</h5>
                    </div>
                    <div className="card-body">
                      <div className="list-group mb-3">
                        <a href="#" className="list-group-item list-group-item-action">
                          <i className="bi bi-person-check me-2"></i>
                          Approuver la demande d'un utilisateur
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                          <i className="bi bi-people me-2"></i>
                          Consulter la liste des utilisateurs
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                          <i className="bi bi-exclamation-triangle me-2"></i>
                          Avertir un utilisateur
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                          <i className="bi bi-person-x me-2"></i>
                          Supprimer un utilisateur
                        </a>
                      </div>
                      <button className="btn btn-primary">Voir tous les utilisateurs</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'profile' && (
            <div>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Gérer son profil</h1>
              </div>
              
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3 border-end">
                      <div className="d-flex flex-column align-items-center text-center p-3">
                        <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{width: '150px', height: '150px', fontSize: '48px'}}>
                          <i className="bi bi-person"></i>
                        </div>
                        <span className="font-weight-bold mt-3">Paul Bernard</span>
                        <span className="text-muted">paul.bernard@example.com</span>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <form>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">Prénom</label>
                            <input type="text" className="form-control" id="firstName" defaultValue="Paul" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="lastName" defaultValue="Bernard" />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" className="form-control" id="email" defaultValue="paul.bernard@example.com" />
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label htmlFor="currentPassword" className="form-label">Mot de passe actuel</label>
                            <input type="password" className="form-control" id="currentPassword" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="newPassword" className="form-label">Nouveau mot de passe</label>
                            <input type="password" className="form-control" id="newPassword" />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="avatar" className="form-label">Photo de profil</label>
                          <input type="file" className="form-control" id="avatar" />
                        </div>
                        <button type="submit" className="btn btn-primary">Enregistrer les modifications</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'notifications' && (
            <div>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Gérer ses notifications</h1>
              </div>
              
              <div className="row">
                <div className="col-md-5 mb-4">
                  <div className="card h-100">
                    <div className="card-header">
                      <h5 className="mb-0">Préférences de notification</h5>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-check form-switch mb-3">
                          <input className="form-check-input" type="checkbox" id="newUserNotification" defaultChecked />
                          <label className="form-check-label" htmlFor="newUserNotification">Nouvelles demandes d'utilisateurs</label>
                        </div>
                        <div className="form-check form-switch mb-3">
                          <input className="form-check-input" type="checkbox" id="newPostNotification" defaultChecked />
                          <label className="form-check-label" htmlFor="newPostNotification">Nouvelles publications</label>
                        </div>
                        <div className="form-check form-switch mb-3">
                          <input className="form-check-input" type="checkbox" id="reportNotification" defaultChecked />
                          <label className="form-check-label" htmlFor="reportNotification">Signalements</label>
                        </div>
                        <div className="form-check form-switch mb-3">
                          <input className="form-check-input" type="checkbox" id="emailNotification" defaultChecked />
                          <label className="form-check-label" htmlFor="emailNotification">Recevoir des notifications par email</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Enregistrer les préférences</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 mb-4">
                  <div className="card h-100">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Notifications récentes</h5>
                      <button className="btn btn-sm btn-outline-primary">Marquer tout comme lu</button>
                    </div>
                    <div className="card-body p-0">
                      <div className="list-group list-group-flush">
                        <div className="list-group-item list-group-item-action">
                          <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">
                              <i className="bi bi-person-plus text-success me-2"></i>
                              Nouvelle demande d'adhésion
                            </h6>
                            <small className="text-muted">Il y a 2 heures</small>
                          </div>
                          <p className="mb-1">à la communauté "Intelligence Artificielle"</p>
                          <div className="btn-group btn-group-sm mt-2">
                            <button className="btn btn-success">Approuver</button>
                            <button className="btn btn-danger">Refuser</button>
                          </div>
                        </div>
                        <div className="list-group-item list-group-item-action">
                          <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">
                              <i className="bi bi-file-earmark-text text-primary me-2"></i>
                              Nouvelle publication
                            </h6>
                            <small className="text-muted">Il y a 3 heures</small>
                          </div>
                          <p className="mb-1">dans la communauté "Développement Web"</p>
                          <div className="btn-group btn-group-sm mt-2">
                            <button className="btn btn-outline-primary">Voir</button>
                            <button className="btn btn-success">Approuver</button>
                          </div>
                        </div>
                        <div className="list-group-item list-group-item-action">
                          <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">
                              <i className="bi bi-exclamation-triangle text-warning me-2"></i>
                              Publication signalée
                            </h6>
                            <small className="text-muted">Il y a 5 heures</small>
                          </div>
                          <p className="mb-1">dans la communauté "Science des Données"</p>
                          <div className="btn-group btn-group-sm mt-2">
                            <button className="btn btn-outline-primary">Examiner</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'moderators' && (
            <div>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Gérer les modérateurs</h1>
                <button className="btn btn-primary">
                  <i className="bi bi-person-plus me-2"></i>
                  Ajouter un modérateur
                </button>
              </div>
              
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Nom</th>
                          <th>Email</th>
                          <th>Communautés gérées</th>
                          <th>Date d'ajout</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Paul Bernard</td>
                          <td>paul.bernard@example.com</td>
                          <td>Intelligence Artificielle</td>
                          <td>10/03/2025</td>
                          <td>
                            <div className="btn-group">
                              <button className="btn btn-sm btn-outline-primary">
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button className="btn btn-sm btn-outline-danger">
                                <i className="bi bi-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Sophie Martin</td>
                          <td>sophie.martin@example.com</td>
                          <td>Développement Web</td>
                          <td>05/01/2025</td>
                          <td>
                            <div className="btn-group">
                              <button className="btn btn-sm btn-outline-primary">
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button className="btn btn-sm btn-outline-danger">
                                <i className="bi bi-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Thomas Dubois</td>
                          <td>thomas.dubois@example.com</td>
                          <td>Science des Données</td>
                          <td>15/12/2024</td>
                          <td>
                            <div className="btn-group">
                              <button className="btn btn-sm btn-outline-primary">
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button className="btn btn-sm btn-outline-danger">
                                <i className="bi bi-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'permissions' && (
            <div>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Gérer les permissions</h1>
              </div>
              
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Permission</th>
                          <th>Description</th>
                          <th>Dernière modification</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Modération de contenu</td>
                          <td>Permet d'approuver ou de refuser les publications des utilisateurs</td>
                          <td>05/03/2025</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              <i className="bi bi-pencil me-1"></i> Modifier
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Gestion des utilisateurs</td>
                          <td>Permet d'approuver, d'avertir ou de supprimer des utilisateurs</td>
                          <td>15/02/2025</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              <i className="bi bi-pencil me-1"></i> Modifier
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Administration complète</td>
                          <td>Donne accès à toutes les fonctionnalités d'administration</td>
                          <td>10/01/2025</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              <i className="bi bi-pencil me-1"></i> Modifier
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <footer className="pt-5 d-flex justify-content-between">
            <span>Copyright © 2025 Panel d'Administration</span>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Aide</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Conditions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Confidentialité</a>
              </li>
            </ul>
          </footer>
        </main>
      </div>
    </div>
  );
}