import React from 'react';

const AddCommunity = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#fce4ec' }}>
      <div className="bg-white p-4 rounded shadow" style={{ width: '400px' }}>
        <h4 className="text-center fw-bold mb-4 text-white py-2 rounded" style={{ backgroundColor: '#9c27b0' }}>
          communauté
        </h4>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            <i className="bi bi-person-fill me-2 text-secondary"></i>Nom de la communauté
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Entrez le nom de votre communauté"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            <i className="bi bi-info-circle-fill me-2 text-secondary"></i>Description
          </label>
          <textarea
            className="form-control"
            placeholder="Décrivez votre communauté en quelques mots..."
            rows="3"
          ></textarea>
        </div>

        

        <div className="mb-4">
          <label className="form-label fw-semibold">
            <i className="bi bi-image-fill me-2 text-secondary"></i>Image (URL)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="https://exemple.com/image.jpg"
          />
        </div>

        <button className="btn w-100 fw-bold text-white" style={{ backgroundColor: '#9c27b0' }}>
          + Créer la communauté
        </button>
      </div>
    </div>
  );
};

export default AddCommunity;
