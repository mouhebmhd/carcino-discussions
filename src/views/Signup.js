import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/signUpStyle.css";
import signUpImage from "../images/undraw_sign-up_qamz.png";
import { useNavigate } from "react-router-dom";
function SignupS() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    age: "",
    email: "",
    motDePasse: "",
    numeroTelephone: "",
    accountStatus: "frozen",
    role: "membre",
    userAvatar: "" // Added avatar field
  });

  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [showModal, setShowModal] = useState(false);

  const avatars = [
    "https://i.pinimg.com/736x/fb/c7/c0/fbc7c0f44564099388f9c5ffcc338944.jpg",
    "https://i.pinimg.com/736x/e2/d4/a1/e2d4a1924b2e3e0044ee09cb5f94e33d.jpg",
    "https://i.pinimg.com/736x/0d/11/e2/0d11e2178446a6ad28a533c7f0937cf9.jpg",
    "https://i.pinimg.com/736x/7c/d8/14/7cd81479ea9c9d507249c73debd074fa.jpg",
    "https://i.pinimg.com/736x/3c/2e/d4/3c2ed4b9d2d1f3fdd590c3a5bc5e8c90.jpg",
    "https://i.pinimg.com/736x/70/a2/36/70a236f90d2803f9da32d0558be75ba1.jpg",
    "https://i.pinimg.com/736x/cb/4c/fc/cb4cfc69fd8068fc86d9e3a02a575db7.jpg",
    "https://i.pinimg.com/736x/b4/7e/e3/b47ee3eb1a014e8019d2b9622aacdb12.jpg",
    "https://i.pinimg.com/736x/b7/37/54/b737548c1276a8816bca07a448966c2a.jpg",
    "https://i.pinimg.com/474x/18/c2/96/18c29680423dc8ec13e290b7bd9917a5.jpg",
    "https://i.pinimg.com/474x/f6/71/f7/f671f7e94ccddb405995074d6252e213.jpg",
    "https://i.pinimg.com/474x/58/12/4e/58124e710025110caa068939e3c738f2.jpg",
    "https://i.pinimg.com/474x/ed/78/d5/ed78d5df52dc51a6bfcd9112b652ef08.jpg",
    "https://i.pinimg.com/474x/31/b0/0e/31b00e24ebb661b7248492276aeb5cdd.jpg",
    "https://i.pinimg.com/474x/fa/83/64/fa8364a71f66c7b3903f0357cfe825d2.jpg",
    "https://i.pinimg.com/474x/b0/c4/21/b0c421e77cf563962026ade82c90dd5b.jpg",
    "https://i.pinimg.com/474x/6e/e8/9e/6ee89ed3fce1f1c678edfeb1cf65e0f3.jpg",
    "https://i.pinimg.com/474x/1a/01/d7/1a01d79f05b5c3324994d05fcd4f019f.jpg",
    "https://i.pinimg.com/474x/3b/19/11/3b1911246fc66f81cbc8a0035014569b.jpg",
    "https://i.pinimg.com/474x/e9/b6/f1/e9b6f1bf2c29fa38a31854ec53542a73.jpg",
    "https://i.pinimg.com/474x/37/88/ce/3788ce68f0cc16847b6410c989ef10b6.jpg",
    "https://i.pinimg.com/474x/f9/dc/ed/f9dcede4da70259826b18f32c9ef873b.jpg",
    "https://i.pinimg.com/736x/8b/f1/8f/8bf18fa5f27ca7dd0436a15ca4ceb6bb.jpg",
    "https://i.pinimg.com/474x/e0/3d/d6/e03dd68f14c96d52566719e5df679bc7.jpg",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setFormData(prev => ({ ...prev, userAvatar: avatar }));
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add the selected avatar to the form data before submitting
      const dataToSend = {
        ...formData,
        userAvatar: selectedAvatar || avatars[Math.floor(Math.random() * avatars.length)]
      };
      
      const response = await axios.post(
        "http://localhost:3030/Utilisateur/postUtilisateur/", 
        dataToSend
      );
      console.log("Utilisateur créé :", response.data);
      alert("Inscription réussie !");
      navigate("/login")
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Erreur lors de l'inscription");
    }
  };

  return (
    <div className="row d-flex justify-content-center align-items-center m-0 p-0 signupContainer">
      <div className="col col-xl-10 formContainer">
        <div className="card" style={{ borderRadius: "1rem" }}>
          <div className="row g-0">
            <div className="col-md-7 col-lg-5 d-none d-md-block d-flex justify-content-center align-items-center h-100">
              <img
                src={signUpImage}
                alt="login form"
                className="img-fluid"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body text-black w-100">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{ color: "#833F92" }}></i>
                    <span className="h1 fw-bold mb-0">Bienvenue</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                    Créer votre compte
                  </h5>

                  <div className="d-flex flex-wrap gap-3">
                    {/* Nom */}
                    <div className="form-outline">
                      <label className="form-label" htmlFor="nom">Nom</label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        className="form-control"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Prénom */}
                    <div className="form-outline">
                      <label className="form-label" htmlFor="prenom">Prénom</label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        className="form-control"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Date de naissance */}
                    <div className="form-outline">
                      <label className="form-label" htmlFor="dateNaissance">Date de naissance</label>
                      <input
                        type="date"
                        id="dateNaissance"
                        name="dateNaissance"
                        className="form-control"
                        value={formData.dateNaissance}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Âge */}
                    <div className="form-outline">
                      <label className="form-label" htmlFor="age">Âge</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        className="form-control"
                        value={formData.age}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="form-outline">
                      <label className="form-label" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Mot de passe */}
                    <div className="form-outline">
                      <label className="form-label" htmlFor="motDePasse">Mot de passe</label>
                      <input
                        type="password"
                        id="motDePasse"
                        name="motDePasse"
                        className="form-control"
                        value={formData.motDePasse}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Numéro de téléphone */}
                    <div className="form-outline">
                      <label className="form-label" htmlFor="numeroTelephone">Numéro de téléphone</label>
                      <input
                        type="tel"
                        id="numeroTelephone"
                        name="numeroTelephone"
                        className="form-control"
                        value={formData.numeroTelephone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Rôle */}
                    <div className="form-outline">
                      <label className="form-label" htmlFor="role">Rôle</label>
                      <select
                        id="role"
                        name="role"
                        className="form-control"
                        value={formData.role}
                        onChange={handleChange}
                        required
                      >
                        <option value="membre">Membre</option>
                        <option value="moderateur">Modérateur</option>
                        <option value="admin">Administrateur</option>
                      </select>
                    </div>

                    {/* Avatar Selection */}
                    <div className="form-outline w-100">
                      <label className="form-label d-block">Photo de Profil</label>
                      <div className="d-flex align-items-center gap-3">
                        {selectedAvatar ? (
                          <img 
                            src={selectedAvatar} 
                            alt="Selected Avatar" 
                            style={{ 
                              width: "50px", 
                              height: "50px", 
                              borderRadius: "50%",
                              objectFit: "cover"
                            }}
                          />
                        ) : (
                          <div 
                            style={{ 
                              width: "50px", 
                              height: "50px", 
                              borderRadius: "50%",
                              backgroundColor: "#ddd",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center"
                            }}
                          >
                            <i className="fas fa-user"></i>
                          </div>
                        )}
                        <button 
                          type="button" 
                          className="btn btn-dark"
                          onClick={() => setShowModal(true)}
                        >
                          Choisir Votre Avatar
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Avatar Modal */}
                  {showModal && (
                    <div className="modal" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Choisir Votre Avatar</h5>
                            <button 
                              type="button" 
                              className="btn-close" 
                              onClick={() => setShowModal(false)}
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="row d-flex flex-wrap">
                              {avatars.map((avatar, index) => (
                                <div className="   mb-3 " style={{width:"fit-content "}} key={index}>
                                  <img 
                                    src={avatar} 
                                    alt={`Avatar ${index}`} 
                                    className="img-thumbnail cursor-pointer avatarContainer"
                                    style={{
                                      width: "250px",
                                      height: "150px",
                                      borderRadius:"50%",
                                      objectFit: "cover",
                                      cursor: "pointer",
                                      border: selectedAvatar === avatar ? "3px solid #0d6efd" : "1px solid #dee2e6"
                                    }}
                                    onClick={() => handleAvatarSelect(avatar)}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button 
                              type="button" 
                              className="btn btn-secondary" 
                              onClick={() => setShowModal(false)}
                            >
                              Fermer
                            </button>
                            <button 
                              type="button" 
                              className="btn btn-primary"
                              onClick={() => {
                                if (!selectedAvatar) {
                                  handleAvatarSelect(avatars[0]);
                                }
                                setShowModal(false);
                              }}
                            >
                              Confirmer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bouton */}
                  <div className="d-flex justify-content-center mt-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      S'inscrire
                    </button>
                  </div>

                  <p className="mt-3 mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Déjà un compte ?{" "}
                    <Link to="/login" style={{ color: "#393f81" }}>
                      Se connecter
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupS;