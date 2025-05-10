import React, { useState } from "react";
import { X, Image, Users, Smile, MapPin, MoreHorizontal } from 'lucide-react';
import "../styles/CreatePost.css";

const PostPopup = ({ onClose }) => {
  const [postContent, setPostContent] = useState('');

  return (
    <div className="post-popup-overlay">
      <div className="post-popup">
        {/* Header */}
        <div className="popup-header">
          <h3>Créer une publication</h3>
          <button className="close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* User Info */}
        <div className="user-info">
          <img src="avat2.jpg" alt="Profile" className="profile-picture" />
          <div className="user-details">
            <h4>Dhahri</h4>
            <div className="visibility-selector">
              
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="post-content">
          <textarea 
            placeholder="Quoi de neuf, Dhahri ?" 
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
        </div>

        {/* Add to Post */}
        <div className="add-to-post">
          <div className="add-label">Ajouter à votre publication</div>
          <div className="add-options">
            <button><Image size={20} color="#27ae60" /></button>
            <button><Users size={20} color="#2e86de" /></button>
            <button><Smile size={20} color="#f39c12" /></button>
            <button><MapPin size={20} color="#e74c3c" /></button>
            <button className="gif-button">GIF</button>
            <button><MoreHorizontal size={20} color="#7f8c8d" /></button>
          </div>
        </div>

        {/* Publish Button */}
        <button className="publish-button">Publier</button>
      </div>
    </div>
  );
};

const CreatePost = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="create-post-container">
      <div className="create-post-input" onClick={() => setShowPopup(true)}>
        <img src="avat2.jpg" alt="User" className="profile-picture" />
        <div className="input-placeholder"> Créer une publication</div>
      </div>
      <div className="post-options">
        <button>Media</button>
        <button>GIF/Video</button>
        <button>Poll</button>
        <button>Event</button>
      </div>
      
      {showPopup && <PostPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default CreatePost;