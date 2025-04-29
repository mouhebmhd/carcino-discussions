import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import '../styles/networkStyle.css'
import { RiUserFollowFill } from 'react-icons/ri'
import axios from 'axios'
import { SiWpexplorer } from "react-icons/si";
import { useNavigate } from 'react-router-dom'

function Network() {
  const API_URL = "http://localhost:3030";
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;
  const navigate = useNavigate()
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [users, setUsers] = useState([])
  const [targetUser, setTargetUser] = useState({})
  
  const visitProfile = (user) => {
    navigate("/profile/seeUserProfile/" + user._id)
  }

  const loadUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/Utilisateur/getAllUtilisateur/`);
      
      // Fetch tags for each user asynchronously
      const usersWithData = await Promise.all(response.data.map(async (user) => {
        try {
          const tagsResponse = await axios.get(`${API_URL}/Publication/getPublicationByUserId/${user._id}`);
          const tags = tagsResponse.data.map(post => post.communityTag).filter(tag => tag); // Filter out undefined tags
          
          // Set default avatar if none exists
          const userAvatar = user.userAvatar || 
            (user.gender === "homme" 
              ? "https://i.pinimg.com/736x/fb/c7/c0/fbc7c0f44564099388f9c5ffcc338944.jpg" 
              : "https://i.pinimg.com/736x/70/a2/36/70a236f90d2803f9da32d0558be75ba1.jpg");
          
          return { 
            ...user, 
            tags: tags,
            userAvatar: userAvatar
          };
        } catch (error) {
          console.error(`Error fetching tags for user ${user._id}:`, error);
          return { 
            ...user, 
            tags: [],
            userAvatar: user.userAvatar || "https://via.placeholder.com/100" 
          };
        }
      }));
      
      console.log(usersWithData);
      setUsers(usersWithData);  
      setSuccess(true);
      setError(false);
  
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  
  useEffect(() => {
    loadUsers()
  }, [user._id])

  return (
    <div className="community-page">
      <NavBar />
      <div className="container-fluid ">
        <div className="row usersNetwork p-3 d-flex justify-content-center row-gap-2">
          {users.map((user, index) => {
            return (
              <div
                key={index}
                className="card communityCard col-lg-3 col-md-4 col-sm-6 mx-2"
                style={{ maxWidth: "26rem" }}
              >
                <div className="avatarContainer p-2 d-flex justify-content-center align-content-center">
                  <img
                    src={user.userAvatar}
                    alt={`${user.nom} ${user.prenom}`}
                    className="avatar"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #fff",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                    }}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = user.gender === "homme" 
                        ? "https://i.pinimg.com/736x/fb/c7/c0/fbc7c0f44564099388f9c5ffcc338944.jpg" 
                        : "https://i.pinimg.com/736x/70/a2/36/70a236f90d2803f9da32d0558be75ba1.jpg";
                    }}
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title text-capitalize text-center">
                    {user.nom + " " + user.prenom}
                  </h5>
                  <p className="card-text small text-muted text-center">
                    {user.aboutMe}
                  </p>
                  {user.tags && user.tags.length > 0 && (
                    <p className="card-text small text-muted text-center d-flex flex-wrap justify-content-center">
                      {user.tags.map((tag, index) => (
                        <span key={index} className='alert alert-primary p-2 mx-1 rounded-pill'>
                          {tag}
                        </span>
                      ))}
                    </p>
                  )}
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    <button
                      className="btn btn-primary"
                      onClick={() => visitProfile(user)}
                    >
                      <SiWpexplorer className='fs-4 mx-2'/> Explore Profile
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Network