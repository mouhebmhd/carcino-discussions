import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import "../styles/aboutMe.css"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function UpdateUser() {
    const navigate=useNavigate()
    const userId = useParams().id.slice(1)
    const [user, setUser] = useState({ userAvatar: '' })
    const [data, setData] = useState({
        "pubCount": 0,
        "interactionsCount": 0,
        "commentsCount": 2,
        "subscribtionsCount": 0
    })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const baseUrl = "http://localhost:3030"

    const loadUserProfile = () => {
        axios.get(baseUrl + "/Utilisateur/getUtilisateurById/" + userId)
            .then((response) => {
                setUser(response.data);
            })
            .catch(() => setError("Failed to load user profile"));

        axios.get(baseUrl + "/utilisateur/getUtilisateurStats/" + userId)
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        loadUserProfile();
    }, [userId]);

    // Handles all changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }

    // Handles save/update action
    const handleSaveChanges = () => {
        axios.put(`${baseUrl}/Utilisateur/updateUtilisateur/${userId}`, user)
            .then(() => {
                setSuccess("Profile updated successfully.");
                setError("");
                navigate("/profile/seeUserProfile/"+user._id)
            })
            .catch(() => {
                setError("Failed to update profile.");
                setSuccess("");
            });
    }

    return (
        <>
            <NavBar />
            <section className="section about-section gray-bg mt-2" id="about">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="about-text go-to">
                                <h3 className="dark-color">Gèrer Mon Profil</h3>
                                <p>I'm <mark>{user.nom + " " + user.prenom}.</mark></p>
                                <div className="row about-list">
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>Birthday</label>
                                            <input type="date" className='form-control' name="dateNaissance" value={user.dateNaissance || ''} onChange={handleChange} />
                                        </div>
                                        <div className="media">
                                            <label>Age</label>
                                            <input className='form-control' type="text" name="age" value={user.age || ''} onChange={handleChange} />
                                        </div>
                                        <div className="media">
                                            <label>Email</label>
                                            <input className='form-control' type="text" name="email" value={user.email || ''} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>First Name</label>
                                            <input className='form-control' type="text" name="prenom" value={user.prenom || ''} onChange={handleChange} />
                                        </div>
                                        <div className="media">
                                            <label>Last Name</label>
                                            <input className='form-control' type="text" name="nom" value={user.nom || ''} onChange={handleChange} />
                                        </div>
                                        <div className="media">
                                            <label>Phone</label>
                                            <input className='form-control' type="text" name="numeroTelephone" value={user.numeroTelephone || ''} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-12 d-block">
                                        <label>About Me</label>
                                        <textarea className='form-control' name="aboutMe" value={user.aboutMe || ''} onChange={handleChange} rows="4" />
                                    </div>
                                    <div className="col-12 d-block">
                                        <label>Short Biography</label>
                                        <input type='text' className='form-control' name="shortBio" value={user.shortBio || ''} onChange={handleChange} />
                                    </div>

                                    {error && <div className="alert alert-danger mt-2">{error}</div>}
                                    {success && <div className="alert alert-success mt-2">{success}</div>}

                                    <div className="container-fluid d-block mt-3 justify-content-center">
                                        <button className="btn btn-dark" type="button" onClick={handleSaveChanges}>Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-avatar">
                                {user.userAvatar ? (
                                    <img 
                                        src={user.userAvatar} 
                                        alt="User Avatar" 
                                        style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/400";
                                        }}
                                    />
                                ) : (
                                    <div style={{ width: '100%', height: '400px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                                        Loading avatar...
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
