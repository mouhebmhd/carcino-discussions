import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import axios from "axios";
import "../styles/communityStyle.css";
import { MdDelete, MdEdit } from "react-icons/md";
import UpdateCommunity from "../components/updateCommunity";
import AddCommunity from "../components/addCommunity";
import { RiUserFollowFill } from "react-icons/ri";
import { RiUserUnfollowFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export default function Community() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [communities, setCommunities] = useState([]);
  const [subscribtions, setSubscribtions] = useState([]);
  const [updatedCommunity, setUpdatedCommunity] = useState(null);
  const navigate=useNavigate()
  const [showAddModal, setShowAddModal] = useState(false);
  const loadSubscribtions = () => {
    axios.get("http://localhost:3030/getAllAbonemment/")
      .then((response) => {
        const filtered = response.data.filter((sub, index) => {
          return sub.userId == user._id;
        });
        console.log(filtered);
        const communityIds = filtered.map((sub) => sub.communityId);

        console.log(communityIds);
        setSubscribtions(communityIds);
      })
      .catch((error) => {
        console.log(error);
        setSubscribtions([]);
      });
  };
  
  const loadData = () => {
    axios
      .get("http://localhost:3030/communitiy/getAllCommunities/",{withCredentials:true})
      .then((res) => setCommunities(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadData();
    loadSubscribtions()
  }, [user._id]);

  const deleteCommunity = (id) =>
    axios
      .delete(`http://localhost:3030/community/deleteCommunity/${id}`,{withCredentials:true})
      .then(() => loadData())
      .catch((err) => console.error(err));

  const followCommunity = (id) =>{
     console.log("subscribe to", id)
     const data=
     {
      userId:user._id,
      communityId:id,
      dateDebutAbonnement : new Date ()
     }
     axios.post("http://localhost:3030/Abonnement/postAbonnement/",data,{withCredentials:true})
     .then(response=>{
      console.log(response.data)
      loadData()
      loadSubscribtions()
     })
     .catch(error=>{
      console.log(error)
     })
    };
    const seeCommunity=(communityId)=>{
      navigate("/community/SeePublications/"+communityId)
    }
    const unfollowCommunity = (communityId,userId) =>{
      const data= {communityId,userId}
      axios.delete("http://localhost:3030/Abonnement/deleteAbonnementUserCommunity/"+userId+"/"+communityId,{withCredentials:true})
      .then(response=>{
       console.log(response.data)
       loadData()
       loadSubscribtions()
      })
      .catch(error=>{
       console.log(error)
      }) 
     };
  const updateCommunity = (c) => setUpdatedCommunity(c);

  return (
    <>
        <NavBar></NavBar>
      <div className="row d-flex flex-column mt-2">
        <div className="text-center ">
          <h6 className="section-title bg-white specialText px-3">Communautés</h6>
          <h1 className="mb-5">Gérer les Communautés</h1>
          {user.accountStatus=="frozen" && 
                   <p className='alert alert-danger'>
                    Vous n'avez pas le droit de rejoindre des communautés. Votre compte n'est pas encore activé.
                    </p>

                  }
        </div>

     
        {user.role=="adminitrateur" && 
          <AddCommunity
            onAddSuccess={() => {
              setShowAddModal(false);
              loadData();
            }}
            onClose={() => setShowAddModal(false)}
          />}
       
          
        

        {/* Groups */}
        <div className=" container-fluid d-flex flex-wrap justify-content-center mt-3 row-gap-3">
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
                  {c.descriptionCommunaute.slice(50,)}
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                 {user.role=="administrateur" && 
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCommunity(c._id)}
                  >
                    <MdDelete /> Supprimer
                  </button>}
                  {user.role=="administrateur" && 
                  <button
                    className="btn btn-warning"
                    onClick={() => updateCommunity(c)}
                  >
                    <MdEdit /> Modifier
                  </button>}
                  {user.accountStatus=="active" && 
                  <>
                  {subscribtions.includes(c._id)==true && <button
                    className="btn btn-dark"
                    onClick={() => unfollowCommunity(c._id,user._id)}
                  >
                    <RiUserUnfollowFill  /> Unsubscribe
                  </button>}
                  {subscribtions.includes(c._id)==false && <button
                    className="btn btn-primary"
                    onClick={() => followCommunity(c._id)}
                  >
                    
                    <RiUserFollowFill  /> Subscribe
                  </button>}
                  {subscribtions.includes(c._id)==true && <button
                    className="btn btn-danger"
                    onClick={() => seeCommunity(c._id)}
                  >
                    
                    <RiUserFollowFill  /> Consulter les Publications 
                  </button>}
                  </>}
                

                  
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
