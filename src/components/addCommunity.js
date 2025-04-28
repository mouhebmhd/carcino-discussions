import React, { useState } from 'react';
import axios from 'axios';

export default function AddCommunity({ onAddSuccess }) {
  const [communityData, setCommunityData] = useState({ nomCommunaute: "", descriptionCommunaute: "" });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCommunityData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3030/community/postCommunity/", communityData)
      .then((response) => {
        console.log(response.data);
        onAddSuccess();
        handleClose();
        setCommunityData({ nomCommunaute: "", descriptionCommunaute: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* The Button to open the Modal */}
      <div className="container-fluid d-flex justify-content-center">
      <button 
        type="button" 
        className="btn btn-primary mx-2 p-1" 
        onClick={handleOpen}
      >
        Ajouter une nouvelle Communauté
      </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Add New Community</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>

              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nomCommunaute" className="form-label">Community Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nomCommunaute"
                      value={communityData.nomCommunaute}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="descriptionCommunaute" className="form-label">Community Description</label>
                    <textarea
                      className="form-control"
                      id="descriptionCommunaute"
                      rows="3"
                      value={communityData.descriptionCommunaute}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Add Community
                    </button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
