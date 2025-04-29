import React from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import "../styles/aboutMe.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SeeProfile() {
    const maleAvatars = [
        "https://i.pinimg.com/736x/fb/c7/c0/fbc7c0f44564099388f9c5ffcc338944.jpg",
        "https://i.pinimg.com/736x/e2/d4/a1/e2d4a1924b2e3e0044ee09cb5f94e33d.jpg",
        "https://i.pinimg.com/736x/0d/11/e2/0d11e2178446a6ad28a533c7f0937cf9.jpg",
        "https://i.pinimg.com/736x/7c/d8/14/7cd81479ea9c9d507249c73debd074fa.jpg",
        "https://i.pinimg.com/736x/3c/2e/d4/3c2ed4b9d2d1f3fdd590c3a5bc5e8c90.jpg",
    ]
    const femaleAvatars = [
        "https://i.pinimg.com/736x/70/a2/36/70a236f90d2803f9da32d0558be75ba1.jpg",
        "https://i.pinimg.com/736x/cb/4c/fc/cb4cfc69fd8068fc86d9e3a02a575db7.jpg",
        "https://i.pinimg.com/736x/b4/7e/e3/b47ee3eb1a014e8019d2b9622aacdb12.jpg",
        "https://i.pinimg.com/736x/b7/37/54/b737548c1276a8816bca07a448966c2a.jpg"
    ]
    
    const userId = useParams().id
    const [user, setUser] = useState({ userAvatar: '' }) // Initialize with empty avatar
    const [data, setData] = useState({
        "pubCount": 0,
        "interactionsCount": 0,
        "commentsCount": 2,
        "subscribtionsCount": 0
    })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const baseUrl = "http://localhost:3030"

    const formatDate = (isoString) => {
        if (!isoString) return '';
        const date = new Date(isoString);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const month = monthNames[date.getUTCMonth()];
        const year = date.getUTCFullYear();
        
        return `${day} ${month} ${year}`;
    };

    const loadUserProfile = () => {
        axios.get(baseUrl + "/Utilisateur/getUtilisateurById/" + userId)
            .then((response) => {
                const userData = response.data;
                // Create a new object with the avatar property
                const userWithAvatar = {
                    ...userData,
                    userAvatar: userData.gender === "homme" 
                        ? maleAvatars[Math.floor(Math.random() * maleAvatars.length)]
                        : femaleAvatars[Math.floor(Math.random() * femaleAvatars.length)]
                };
                console.log("User with avatar:", userWithAvatar);
                setUser(userWithAvatar);
            })
            .catch((error) => {
                console.log(error);
                setError("Failed to load user profile");
            });
            
        axios.get(baseUrl + "/utilisateur/getUtilisateurStats/" + userId)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        loadUserProfile();
    }, [userId]);

    return (
        <>
            <NavBar></NavBar>
            <section className="section about-section gray-bg mt-2" id="about">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="about-text go-to">
                                <h3 className="dark-color">About Me</h3>
                                <h6 className="theme-color lead">{user.shortBio}</h6>
                                <p>I'm <mark>{user.nom + " " + user.prenom} . </mark>
                                    {user.aboutMe}
                                </p>
                                <div className="row about-list">
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>Birthday</label>
                                            <p>{formatDate(user.dateNaissance)}</p>
                                        </div>
                                        <div className="media">
                                            <label>Age</label>
                                            <p>{user.age} Year</p>
                                        </div>
                                        <div className="media">
                                            <label>Role</label>
                                            <p>{user.role}</p>
                                        </div>
                                        <div className="media">
                                            <label>Email</label>
                                            <p>{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>First Name </label>
                                            <p>{user.prenom}</p>
                                        </div>
                                        <div className="media">
                                            <label>Last Name</label>
                                            <p>{user.nom}</p>
                                        </div>
                                        <div className="media">
                                            <label>Phone </label>
                                            <p>{user.numeroTelephone}</p>
                                        </div>
                                        <div className="media">
                                            <label>Account </label>
                                            {user.accountStatus == "active" &&
                                                <p className='text-success'>Active</p>
                                            }
                                            {user.accountStatus != "active" &&
                                                <p className='text-danger'>Not Active</p>
                                            }
                                        </div>
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
                                            e.target.src = "https://via.placeholder.com/400"; // Fallback image
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
                    
                    <div className="counter mt-3">
                        <div className="row d-flex ">
                            <div className="col-6 col-lg-3 dataBox ">
                                <div className="count-data text-center">
                                    <h6 className="count h2 dark-color" data-to="500" data-speed="500">{data.pubCount}</h6>
                                    <p className="m-0px font-w-600">Total Posts</p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 dataBox">
                                <div className="count-data text-center">
                                    <h6 className="count h2 dark-color" data-to="150" data-speed="150">{data.interactionsCount}</h6>
                                    <p className="m-0px font-w-600">Total Comments</p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 dataBox">
                                <div className="count-data text-center">
                                    <h6 className="count h2 dark-color" data-to="850" data-speed="850">{data.commentsCount}</h6>
                                    <p className="m-0px font-w-600">Total Interactions </p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 dataBox">
                                <div className="count-data text-center">
                                    <h6 className="count h2 dark-color" data-to="190" data-speed="190">{data.subscribtionsCount}</h6>
                                    <p className="m-0px font-w-600">Total Subscribtions </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}