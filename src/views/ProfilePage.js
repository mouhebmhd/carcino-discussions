import '../styles/ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import NavBar from "../components/Navbar.js";
import { useNavigate } from 'react-router-dom'; // ✅ import navigation
import PersonalProfile from '../components/PersonalProfile.js';
const ProfilePage = () => {
  const navigate = useNavigate(); 
  const [showFollower, setShowFollower] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showPostsOnly, setShowPostsOnly] = useState(true);
  const profile=JSON.parse(localStorage.getItem("user"))
  const userinfo = {
    Name: 'Nawres dhahri',
    username: 'Norrs',
    bio: 'Full stack Developer',
    Pimage: 'avat.jpg',
    posts: [
      { id: 1, caption: 'Post 1', url: 'https://i.imgur.com/K7A78We.jpg', likes: 120, comments: 45 },
      { id: 2, caption: 'Post 2', url: 'https://i.imgur.com/K7A78We.jpg', likes: 85, comments: 30 },
      { id: 3, caption: 'Post 2', url: 'https://i.imgur.com/K7A78We.jpg', likes: 85, comments: 30 },
    ],
    followers: [
      { Name: 'John Doe', username: 'johndoe', Pimage: 'https://i.imgur.com/8RKXAIV.jpg' },
    ],
    following: [
      { Name: 'Jane Doe', username: 'janedoe', Pimage: 'https://i.imgur.com/8RKXAIV.jpg' },
    ],
  };

  return (
    <div>
      <NavBar />
      <div className='profile'>
        <div className='profile-data'>
          <div className='profile-data_up'>
            <div className='profile_image'>
              <img src={userinfo.Pimage} alt='Profile' />
            </div>
            <h2 className='profile-data_up_Name'>{userinfo.Name}</h2>
            <div className='profile-data_up_username'>@{userinfo.username}</div>
            <div className='profile-data_up_bio'>{userinfo.bio}</div>

            
            <div style={{ marginTop: '10px' }}>
              <PersonalProfile></PersonalProfile>
            </div>

            <div className='profile-data_up_stats'>
              <div className='profile_post_btn' style={showPostsOnly ? { color: 'red' } : { color: 'black' }} onClick={() => setShowPostsOnly(true)}>
                {userinfo.posts.length} Posts
              </div>
              <div className='profile_followers' onClick={() => setShowFollower(true)}>
                {userinfo.followers.length} Followers
              </div>
              <div className='profile_following' onClick={() => setShowFollowing(true)}>
                {userinfo.following.length} Following
              </div>
            </div>
          </div>

          <Container className="mb-4">
  <h3 className="text-center mb-4">Mon Profil</h3>
  <Row className="justify-content-center">
    <Col md={8}>
      <div className="border p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
        <p><strong>Nom :</strong> {profile.nom}</p>
        <p><strong>Prénom :</strong> {profile.prenom}</p>
        <p><strong>Date de naissance :</strong> {profile.dateNaissance}</p>
        <p><strong>Âge :</strong> {profile.age}</p>
        <p><strong>Email :</strong> {profile.email}</p>
        <p><strong>Numéro de téléphone :</strong> {profile.numeroTelephone}</p>
      </div>
    </Col>
  </Row>
</Container>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
