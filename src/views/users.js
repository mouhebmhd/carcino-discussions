import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import axios from "axios";
import { Modal, Button } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
import "../styles/managePosts.css"
export default function Utilisateurs() {
  const navigate=useNavigate()
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;

  const API_URL = "http://localhost:3030";  

  const loadUsers = () => {
    axios.get(`${API_URL}/Utilisateur/getAllUtilisateur/`)
      .then(response => {
        setUsers(response.data);
        setSuccess(false);
        setError(false);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  };

  const activateAccount = (user) => {
    const updatedUser = { ...user, accountStatus: "active" };
    console.log(updatedUser)
    axios.put(`${API_URL}/Utilisateur/updateUtilisateur/${user._id}`, updatedUser)
      .then(response => {
        console.log(response);
        loadUsers();
        setSuccess(true);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  };
  const makeModerator = (user) => {
    const updatedUser = { ...user, role: "moderateur" };
    console.log(updatedUser)
    axios.put(`${API_URL}/Utilisateur/updateUtilisateur/${user._id}`, updatedUser)
      .then(response => {
        console.log(response);
        loadUsers();
        setSuccess(true);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  };
  const makeMember = (user) => {
    const updatedUser = { ...user, role: "membre" };
    console.log(updatedUser)
    axios.put(`${API_URL}/Utilisateur/updateUtilisateur/${user._id}`, updatedUser)
      .then(response => {
        console.log(response);
        loadUsers();
        setSuccess(true);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  };

  const blockAccount = (user) => {
    const updatedUser = { ...user, accountStatus: "waiting" };
    console.log(updatedUser)
    axios.put(`${API_URL}/Utilisateur/updateUtilisateur/${user._id}`, updatedUser)
      .then(response => {
        console.log(response);
        loadUsers();
        setSuccess(true);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  };

  const deleteUserAccount = (userId) => {
    axios.delete(`${API_URL}/users/deleteOne/${userId}`)
      .then(response => {
        console.log(response);
        loadUsers();
        setSuccess(true);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  };

  useEffect(() => {
    loadUsers();
  }, [role]);

  const formatTimestampToFrenchDate = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const monthsOfYear = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = String(date.getDate()).padStart(2, '0');
    const month = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();
    return `${dayOfWeek}, ${day} ${month} ${year}`;
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar color="var(--mainColor)" />
      <div className="container-xxl py-5 category">
         
           
            <div className="container">
          <div className="text-center mb-5">
            <h6 className="section-title bg-white text-center specialText px-3">Membres</h6>
            <h1 className="mb-5">Gestions des Membres</h1>
            {error && <p className="alert alert-danger">Erreur lors du traitement de votre demande. Veuillez réessayer plus tard.</p>}
            {success && <p className="alert alert-success">Opération réussie.</p>}
          </div>

            <table className="table table-hover  ">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th>Date de Naissance</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  user.role=="membre" && <tr key={user._id || index}>
                  <td className='avatarCtr' >
                    <img src={user.userAvatar} alt="" />
                  </td>
                  <td>{user.prenom}</td>
                  <td>{user.nom}</td>
                  <td>{formatTimestampToFrenchDate(user.dateNaissance)}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role=="moderateur" && <p className='alert alert-dark p-0 d-flex justify-content-center'>Modérateur</p>}
                    {user.role=="membre" && <p className='alert alert-success p-0 d-flex justify-content-center'>Membre</p>}
                    
                    </td>
                  <td>{user.accountStatus}</td>
                  <td>
                    <button className="btn btn-primary btn-sm mx-1" onClick={() => navigate("/profile/seeUserProfile/"+user._id)}>
                      Voir Détails
                    </button>
                    {user.accountStatus === "active" ? (
                      <button className="btn btn-warning btn-sm mx-1" onClick={() => blockAccount(user)}>
                        Bloquer
                      </button>
                    ) : (
                      <button className="btn btn-success btn-sm mx-1" onClick={() => activateAccount(user)}>
                        Activer
                      </button>
                    )}
                    {user.role === "membre" ? (
                      <button className="btn btn-dark btn-sm mx-1" onClick={() => makeModerator(user)}>
                        Définir Modérateur
                      </button>
                    ) : (
                      <button className="btn btn-primary  btn-sm mx-1" onClick={() => makeMember(user)}>
                        Définir Membre
                      </button>
                    )}
                    <button className="btn btn-danger btn-sm mx-1" onClick={() => deleteUserAccount(user._id)}>
                      Supprimer
                    </button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          

        </div>

      {/* Modal for showing user details */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: "var(--mainColor)", color: 'white' }}>
          <Modal.Title className="w-100 text-center">Détails de l'utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#E3E2ED" }}>
          {selectedUser && (
            <div>
              <p><strong>Statut du Compte:</strong> {selectedUser.accountStatus}</p>
              <p><strong>Date de Création:</strong> {formatTimestampToFrenchDate(selectedUser.createdAt)}</p>
              <p><strong>Niveau d'Éducation:</strong> {selectedUser.educationLevel}</p>
              <p><strong>Total des Points:</strong> {selectedUser.totalPoints}</p>
              <p><strong>Adresse:</strong> {selectedUser.userAddress}</p>
              <p><strong>Date de Naissance:</strong> {formatTimestampToFrenchDate(selectedUser.dateNaissance)}</p>
              <p><strong>Ville:</strong> {selectedUser.userCity}</p>
              <p><strong>Pays:</strong> {selectedUser.userCountry}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Prénom:</strong> {selectedUser.prenom}</p>
              <p><strong>Genre:</strong> {selectedUser.userGender}</p>
              <p><strong>Nom:</strong> {selectedUser.nom}</p>
              <p><strong>Numéro de Téléphone:</strong> {selectedUser.userPhoneNumber}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
