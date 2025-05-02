import { useState } from 'react';
import { Bell, Users, FileText, User, List, X, Check, Flag, Trash, Edit, Eye } from 'lucide-react';

export default function ModerateurMo() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'user', message: 'Nouvelle demande d\'adhésion de Jean Dupont', date: '01/05/2025', read: false },
    { id: 2, type: 'publication', message: 'Publication signalée: "Contenu inapproprié"', date: '30/04/2025', read: false },
    { id: 3, type: 'community', message: 'Nouvelle communauté créée: "Photographie"', date: '29/04/2025', read: true }
  ]);
  
  const [communities, setCommunities] = useState([
    { id: 1, name: 'Art et Culture', members: 128, pendingMembers: 3, pendingPosts: 2 },
    { id: 2, name: 'Technologie', members: 256, pendingMembers: 5, pendingPosts: 7 },
    { id: 3, name: 'Sport', members: 95, pendingMembers: 1, pendingPosts: 0 }
  ]);
  
  const [users, setUsers] = useState([
    { id: 1, username: 'jean_dupont', email: 'jean@example.com', status: 'actif', communities: ['Art et Culture'] },
    { id: 2, username: 'marie_martin', email: 'marie@example.com', status: 'en attente', communities: ['Technologie'] },
    { id: 3, username: 'pierre_durand', email: 'pierre@example.com', status: 'actif', communities: ['Sport', 'Technologie'] }
  ]);
  
  const [publications, setPublications] = useState([
    { id: 1, title: 'Guide débutant', author: 'jean_dupont', community: 'Art et Culture', status: 'approuvée', flags: 0 },
    { id: 2, title: 'Nouvelles tendances', author: 'marie_martin', community: 'Technologie', status: 'en attente', flags: 0 },
    { id: 3, title: 'Conseils avancés', author: 'pierre_durand', community: 'Sport', status: 'signalée', flags: 2 }
  ]);
  
  const [profile, setProfile] = useState({
    username: 'mod_admin',
    email: 'moderateur@example.com',
    role: 'Modérateur principal',
    joinDate: '01/01/2025'
  });
  
  // États pour le formulaire de modification de profil
  const [editUsername, setEditUsername] = useState(profile.username);
  const [editEmail, setEditEmail] = useState(profile.email);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };
  
  const handleProfileUpdate = () => {
    setProfile({
      ...profile,
      username: editUsername,
      email: editEmail
    });
    closeModal();
  };

  const renderProfileTab = () => (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5>Mon Profil</h5>
        <button className="btn btn-primary" onClick={() => {
          setEditUsername(profile.username);
          setEditEmail(profile.email);
          openModal(
            <div>
              <h5>Modifier le profil</h5>
              <div>
                <div className="mb-3">
                  <label className="form-label">Nom d'utilisateur</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={editUsername} 
                    onChange={(e) => setEditUsername(e.target.value)} 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Rôle</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={profile.role} 
                    readOnly 
                  />
                </div>
                <div className="d-flex justify-content-end gap-2">
                  <button type="button" className="btn btn-secondary" onClick={closeModal}>Annuler</button>
                  <button type="button" className="btn btn-primary" onClick={handleProfileUpdate}>Enregistrer</button>
                </div>
              </div>
            </div>
          );
        }}>
          <Edit size={16} className="me-1" /> Modifier
        </button>
      </div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-md-4 fw-bold">Nom d'utilisateur:</div>
          <div className="col-md-8">{profile.username}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 fw-bold">Email:</div>
          <div className="col-md-8">{profile.email}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 fw-bold">Rôle:</div>
          <div className="col-md-8">{profile.role}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 fw-bold">Date d'adhésion:</div>
          <div className="col-md-8">{profile.joinDate}</div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="card">
      <div className="card-header">
        <h5>Notifications</h5>
      </div>
      <div className="card-body p-0">
        <ul className="list-group list-group-flush">
          {notifications.length > 0 ? (
            notifications.map(notification => (
              <li key={notification.id} className={`list-group-item ${!notification.read ? 'bg-light' : ''}`}>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="d-flex align-items-center">
                      {notification.type === 'user' && <User size={16} className="me-2 text-primary" />}
                      {notification.type === 'publication' && <FileText size={16} className="me-2 text-warning" />}
                      {notification.type === 'community' && <Users size={16} className="me-2 text-success" />}
                      <span className="fw-semibold">{notification.message}</span>
                    </div>
                    <small className="text-muted">{notification.date}</small>
                  </div>
                  <button 
                    className="btn btn-sm btn-outline-danger" 
                    title="Supprimer la notification"
                    onClick={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
                  >
                    <Trash size={14} />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="list-group-item text-center py-4">Aucune notification</li>
          )}
        </ul>
      </div>
    </div>
  );

  const renderCommunitiesTab = () => (
    <div className="card">
      <div className="card-header">
        <h5>Gestion des Communautés</h5>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Membres</th>
                <th>Demandes</th>
                <th>Publications en attente</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {communities.map(community => (
                <tr key={community.id}>
                  <td>{community.name}</td>
                  <td>{community.members}</td>
                  <td>
                    {community.pendingMembers > 0 ? (
                      <span className="badge bg-primary">{community.pendingMembers}</span>
                    ) : (
                      <span>0</span>
                    )}
                  </td>
                  <td>
                    {community.pendingPosts > 0 ? (
                      <span className="badge bg-warning">{community.pendingPosts}</span>
                    ) : (
                      <span>0</span>
                    )}
                  </td>
                  <td>
                    <div className="btn-group btn-group-sm">
                      <button 
                        className="btn btn-outline-primary" 
                        title="Gérer les utilisateurs"
                        onClick={() => openModal(
                          <div>
                            <h5>Utilisateurs de {community.name}</h5>
                            <div className="table-responsive my-3">
                              <table className="table table-sm">
                                <thead>
                                  <tr>
                                    <th>Utilisateur</th>
                                    <th>Statut</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {users.filter(user => user.communities.includes(community.name)).map(user => (
                                    <tr key={user.id}>
                                      <td>{user.username}</td>
                                      <td>{user.status}</td>
                                      <td>
                                        <div className="btn-group btn-group-sm">
                                          <button className="btn btn-outline-warning" title="Avertir">
                                            <Bell size={14} />
                                          </button>
                                          <button className="btn btn-outline-danger" title="Supprimer">
                                            <Trash size={14} />
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            <div className="d-flex justify-content-end">
                              <button className="btn btn-secondary" onClick={closeModal}>Fermer</button>
                            </div>
                          </div>
                        )}
                      >
                        <Users size={14} />
                      </button>
                      <button 
                        className="btn btn-outline-info" 
                        title="Gérer les publications"
                        onClick={() => openModal(
                          <div>
                            <h5>Publications de {community.name}</h5>
                            <div className="table-responsive my-3">
                              <table className="table table-sm">
                                <thead>
                                  <tr>
                                    <th>Titre</th>
                                    <th>Auteur</th>
                                    <th>Statut</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {publications.filter(pub => pub.community === community.name).map(pub => (
                                    <tr key={pub.id}>
                                      <td>{pub.title}</td>
                                      <td>{pub.author}</td>
                                      <td>
                                        <span className={`badge ${
                                          pub.status === 'approuvée' ? 'bg-success' : 
                                          pub.status === 'en attente' ? 'bg-warning' : 
                                          'bg-danger'
                                        }`}>
                                          {pub.status}
                                        </span>
                                      </td>
                                      <td>
                                        <div className="btn-group btn-group-sm">
                                          <button className="btn btn-outline-success" title="Approuver">
                                            <Check size={14} />
                                          </button>
                                          <button className="btn btn-outline-danger" title="Supprimer">
                                            <Trash size={14} />
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            <div className="d-flex justify-content-end">
                              <button className="btn btn-secondary" onClick={closeModal}>Fermer</button>
                            </div>
                          </div>
                        )}
                      >
                        <FileText size={14} />
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
  );

  const renderModal = () => {
    if (!showModal) return null;
    
    return (
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              {modalContent}
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show" onClick={closeModal}></div>
      </div>
    );
  };

  return (
    <div className="container-fluid py-3">
      <div className="row mb-4">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand fw-bold" href="#">Panneau Modérateur</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <button 
                      className={`nav-link btn ${activeTab === 'profile' ? 'active fw-semibold' : ''}`} 
                      onClick={() => setActiveTab('profile')}
                    >
                      <User size={18} className="me-1" /> Profil
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link btn ${activeTab === 'communities' ? 'active fw-semibold' : ''}`}
                      onClick={() => setActiveTab('communities')}
                    >
                      <Users size={18} className="me-1" /> Communautés
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link btn ${activeTab === 'notifications' ? 'active fw-semibold' : ''}`}
                      onClick={() => setActiveTab('notifications')}
                    >
                      <Bell size={18} className="me-1" /> 
                      Notifications
                      {notifications.filter(n => !n.read).length > 0 && (
                        <span className="badge bg-danger ms-1">{notifications.filter(n => !n.read).length}</span>
                      )}
                    </button>
                  </li>
                </ul>
                <div className="d-flex">
                  <button className="btn btn-outline-secondary">
                    <span className="d-none d-md-inline">Se déconnecter</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {activeTab === 'profile' && renderProfileTab()}
          {activeTab === 'communities' && renderCommunitiesTab()}
          {activeTab === 'notifications' && renderNotificationsTab()}
        </div>
      </div>

      {renderModal()}
    </div>
  );
}