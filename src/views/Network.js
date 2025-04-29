import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar'
import '../styles/networkStyle.css'
import { RiUserFollowFill } from 'react-icons/ri'
import axios from 'axios'
import { SiWpexplorer } from "react-icons/si";
import { useNavigate } from 'react-router-dom'

function Network() {
  const API_URL = "http://localhost:3030";
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;
  const navigate=useNavigate()
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [users, setUsers] = useState([])
  const [targetUser, setTargetUser] = useState({})
  const visitProfile=(user)=>{
    navigate("/profile/seeUserProfile/"+user._id)
  }
  const loadUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/Utilisateur/getAllUtilisateur/`);
      
      // Fetch tags for each user asynchronously
      const data = await Promise.all(response.data.map(async (user) => {
        const tagsResponse = await axios.get(`http://localhost:3030/Publication/getPublicationByUserId/${user._id}`);
        return { ...user, tags: (tagsResponse.data).map((post,index)=>{return post.communityTag}) };  // Add tags to user
      }));
      console.log(data)
      setUsers(data);  
      setSuccess(false);
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
      <Navbar />
      <div className="container-fluid ">
        <div className="row usersNetwork p-3 d-flex justify-content-center row-gap-2">
          {users.map((user, index) => {
            return (
              <div
              key={index}
                className="card communityCard col-lg-3 col-md-4 col-sm-6 mx-2"
                style={{ maxWidth: "26rem" }}
              >
                <div className="avatarContainer  p-2 d-flex justify-content-center align-content-center">
                  {user.gender === "homme" && (
                    <div
                      className="avatar avatarMale"
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  )}
                  {user.gender === "femme" && (
                    <div
                      className="avatar avatarFemale"
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  )}
                </div>



                <div className="card-body">
                  <h5 className="card-title text-capitalize text-center">{user.nom + " " + user.prenom}</h5>
                  <p className="card-text small text-muted">
                    {user.aboutMe}
                  </p>
                  <p className="card-text small text-muted text-center d-flex flex-wrap justify-content-center">
                    {user.tags.map((tag,index)=>{return <span className='alert alert-primary p-2 mx-1 rounded-pill'>{tag}</span>})}
                  </p>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    <button
                      className="btn btn-primary"
                      onClick={() => visitProfile(user)}
                    >
                      <SiWpexplorer  className='fs-4 mx-2'/> Explore Profile
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