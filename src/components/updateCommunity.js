import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function UpdateCommunity({ community, setUpdatedCommunity,onUpdateCommunity }) {
  const [updatedCommunityData, setUpdatedCommunityData] = useState(community);

  useEffect(() => {
    setUpdatedCommunityData(community);  
  }, [community]);
  const [updateMode,setUpdateMode]=useState("show d-block")
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUpdatedCommunityData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or logic to update the community
    console.log('Updated community:', updatedCommunityData);
    axios.put("http://localhost:3030/community/updateCommunity/"+updatedCommunityData._id,updatedCommunityData)
    .then((response)=>{
      console.log(response.data)
      setUpdatedCommunity(null); 
      onUpdateCommunity()
    })
    .catch((error)=>{
      console.log(error)
    })
  };

  return (
    <div
      className={"modal fade  "+updateMode}
      id="communityModal"
      tabIndex="-1"
      aria-labelledby="communityModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="communityModalLabel">
            Mettre à jour la communauté
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setUpdatedCommunity(null)} // Close the modal
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nomCommunaute" className="form-label">
                Nom de la communauté
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nomCommunaute"
                  value={updatedCommunityData.nomCommunaute}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="descriptionCommunaute" className="form-label">
                Description de la communauté
                </label>
                <textarea
                  className="form-control"
                  id="descriptionCommunaute"
                  rows="3"
                  value={updatedCommunityData.descriptionCommunaute}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setUpdatedCommunity(null)}
                >
                  Fermer
                </button>
                <button type="submit" className="btn btn-primary">
                Sauvegarder les modifications
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
