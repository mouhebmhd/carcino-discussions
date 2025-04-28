import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import { GiShadowFollower } from "react-icons/gi";
import axios from "axios";
import "../styles/communityStyle.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import UpdateCommunity from "../components/updateCommunity";
import AddCommunity from "../components/addCommunity";

export default function Community() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [communities, setCommunities] = useState([]);
  const [updatedCommunity, setUpdatedCommunity] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const loadData = () => {
    axios
      .get("http://localhost:3030/communitiy/getAllCommunities/")
      .then((res) => setCommunities(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadData();
  }, [user._id]);

  const deleteCommunity = (id) =>
    axios
      .delete(`http://localhost:3030/community/deleteCommunity/${id}`)
      .then(() => loadData())
      .catch((err) => console.error(err));

  const followCommunity = (id) => console.log("subscribe to", id);
  const updateCommunity = (c) => setUpdatedCommunity(c);

  return (
    <>
      <Navbar />
      <div className="row p-5 d-flex flex-column">
        <div className="text-center mt-5">
          <h6 className="section-title bg-white specialText px-3">Communautés</h6>
          <h1 className="mb-5">Gérer les Communautés</h1>
          
        </div>

     
        
          <AddCommunity
            onAddSuccess={() => {
              setShowAddModal(false);
              loadData();
            }}
            onClose={() => setShowAddModal(false)}
          />
       
          
        

        {/* Groups */}
        <div className=" container-fluid d-flex flex-wrap justify-content-center mt-3">
          {communities.map((c) => (
            <div
              className="card communityCard col-lg-3 col-md-4 col-sm-6 mx-2"
              key={c._id}
              style={{ maxWidth: "26rem" }}
            >
              <img
                src={"https://placehold.co/600x400"}
                className="card-img-top"
                style={{ height: "12rem", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{c.nomCommunaute}</h5>
                <p className="card-text small text-muted">
                  {c.descriptionCommunaute}
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCommunity(c._id)}
                  >
                    <MdDelete /> Supprimer
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => updateCommunity(c)}
                  >
                    <MdEdit /> Modifier
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => followCommunity(c._id)}
                  >
                    <GiShadowFollower /> Follow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {updatedCommunity && (
          <UpdateCommunity
            community={updatedCommunity}
            setUpdatedCommunity={setUpdatedCommunity}
            onUpdateCommunity={loadData}
          />
        )}
      </div>
    </>
  );
}
