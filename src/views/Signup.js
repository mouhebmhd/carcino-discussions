import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignupS() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    age: "",
    email: "",
    motDePasse: "",
    numeroTelephone: "",
    role: "membre", // valeur par défaut
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/utilisateur/signup", formData);
      console.log("Utilisateur créé :", response.data);
      alert("Inscription réussie !");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Erreur lors de l'inscription");
    }
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-7 col-lg-5 d-none d-md-block d-flex justify-content-center align-items-center h-100">
                    <img
                      src="Mobile login-amico.png"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem", maxHeight: "80%" }}
                    />
                  </div>

                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                          <span className="h1 fw-bold mb-0">Bienvenue</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                          Créer votre compte
                        </h5>

                        {/* Nom */}
                        <div className="form-outline mb-3">
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
                        <div className="form-outline mb-3">
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
                        <div className="form-outline mb-3">
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
                        <div className="form-outline mb-3">
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
                        <div className="form-outline mb-3">
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
                        <div className="form-outline mb-3">
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
                        <div className="form-outline mb-3">
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
                        <div className="form-outline mb-3">
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

                        {/* Bouton */}
                        <div className="d-flex justify-content-center mb-3">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>

                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Déjà un compte ?{" "}
                          <Link to="/Login" style={{ color: "#393f81" }}>
                            Login
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignupS;
