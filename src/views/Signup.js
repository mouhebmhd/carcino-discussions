import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/signUpStyle.css"
import signUpImage from "../images/undraw_account_g3rf.png"
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
      const response = await axios.post("http://localhost:3030/Utilisateur/postUtilisateur/", formData);
      console.log("Utilisateur créé :", response.data);
      alert("Inscription réussie !");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Erreur lors de l'inscription");
    }
  };

  return (
    
      <section className="sectionformContainer m-0 p-0" style={{ backgroundColor: "#9A616D" ,height:"fit-content"}}>
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col col-xl-10 formContainer" style={{ height: "fit-content" }}>
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
  <div className="card-body  text-black w-100">
    <form onSubmit={handleSubmit}>
      <div className="d-flex align-items-center mb-3 pb-1">
        <i className="fas fa-cubes fa-2x me-3" style={{ color: "#FF69B4" }}></i>
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
      </div>

      {/* Bouton */}
      <div className="d-flex justify-content-center mt-4">
        <button type="submit" className="btn btn-primary btn-lg">Register</button>
      </div>

      <p className="mt-3 mb-5 pb-lg-2" style={{ color: "#393f81" }}>
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
 
  );
}

export default SignupS;
