import React from "react";
import "../styles/ProfilePage.css";
const ProfilePageP = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="/profile-banner.jpg" alt="Banner" className="banner" />
        <h2>Danish Paul</h2>
        <p>Software Engineer | Bangalore, India</p>
      </div>
      <div className="profile-stats">
        <span>Followers: 465</span>
        <span>Following: 541</span>
        <span>Posts: 42</span>
        <span>Saved: 14</span>
      </div>
    </div>
  );
};

export default ProfilePageP;