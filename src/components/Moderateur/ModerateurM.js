import React from "react";
import { useNavigate } from "react-router-dom";

function ModeratorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="container py-5" style={{ backgroundColor: "#f8d7da", minHeight: "100vh" }}>
      <h2 className="text-center mb-4">Bienvenue, Modérateur</h2>

      <div className="d-flex flex-column align-items-center gap-3">
        <button className="btn btn-outline-primary w-50" onClick={() => navigate("/ajouter-communaute")}>
          ➕ Ajouter une communauté
        </button>
        <button className="btn btn-outline-secondary w-50" onClick={() => navigate("/utilisateurs")}>
          👥 Gérer les utilisateurs
        </button>
        <button className="btn btn-outline-success w-50" onClick={() => navigate("/publications")}>
          📑 Gérer les publications
        </button>
        <button className="btn btn-outline-warning w-50" onClick={() => navigate("/notifications")}>
          🔔 Gérer les notifications
        </button>
        <button className="btn btn-outline-info w-50" onClick={() => navigate("/profil")}>
          ⚙️ Gérer mon profil
        </button>
      </div>
    </div>
  );
}

export default ModeratorDashboard;
