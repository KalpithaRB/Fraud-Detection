// Profile.js
import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <h1 className="profile-header">Your Profile</h1>
      <div className="profile-card">
        <div className="profile-avatar">
          <img
            src="https://via.placeholder.com/100"
            alt="User Avatar"
          />
        </div>
        <div className="profile-details">
          <h2>John Doe</h2>
          <p>Email: johndoe@example.com</p>
          <p>Joined: January 1, 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
