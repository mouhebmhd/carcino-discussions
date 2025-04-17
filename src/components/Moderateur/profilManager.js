import React from "react";

function ProfileManager() {
  return (
    <div className="container mt-4">
      <h3>Modifier mon profil</h3>
      <form>
        {/* Inputs nom, prénom, mot de passe, etc. */}
        <input type="text" placeholder="Nom" className="form-control mb-3" />
        <input type="text" placeholder="Prénom" className="form-control mb-3" />
        <input type="password" placeholder="Nouveau mot de passe" className="form-control mb-3" />
        <button className="btn btn-success">Enregistrer</button>
      </form>
    </div>
  );
}

export default ProfileManager;
