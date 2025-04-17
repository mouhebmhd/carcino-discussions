import React from "react";
import { useNavigate } from "react-router-dom";

function CommunityManager() {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h3>Mes communautés</h3>
      <button className="btn btn-primary mb-3" onClick={() => navigate("/moderator/ajouter-communaute")}>
        Ajouter une communauté
      </button>
      {/* Afficher liste des communautés ici */}
    </div>
  );
}

export default CommunityManager;
