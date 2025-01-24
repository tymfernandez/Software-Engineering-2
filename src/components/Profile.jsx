import React from "react";
import Header from "./Header";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <Header />
      <div className="header-buttons">
        <button
          onClick={() => console.log("Navigating to Blotter Form...")}
          className="submit-blotter-header"
        >
          Submit Blotter
        </button>

        <div className="profile-title">PROFILE</div>

        {/* Separator Line */}
        <hr className="separator-line-p1" />

        <div className="profile-edit-button">
          <button className="edit-profile-btn">
            <i className="edit-icon"></i> Edit Profile
          </button>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-body">
          {/* Left Side - Photo and Basic Info */}
          <div className="photo-container">
            <div className="photo-box">
              <img src="../assets/default-avatar.png" alt="Profile" />
              <div className="upload-icon">
                <i className="upload-icon-style"></i> {/* Upload icon */}
              </div>
            </div>
            <p className="p-username">Username</p>
            <p className="user-role">Barangay Secretary</p>
          </div>

          {/* Right Side - Info Sections */}
          <div className="details-container">
            {/* Contact Information */}
            <h2 className="section-title">CONTACT INFORMATION</h2>
            <hr className="section-separator" />
            <p>
              <span className="label">Email:</span>
              <span className="value">JohnResolvIT@gmail.com</span>
            </p>
            <p>
              <span className="label">Phone:</span>
              <span className="value">+63 908 694 2023</span>
            </p>

            {/* Account Details */}
            <h2 className="section-title">ACCOUNT DETAILS</h2>
            <hr className="section-separator" />
            <p>
              <span className="label">Full Name:</span>
              <span className="value">mrjohnresolvit</span>
            </p>
            <p>
              <span className="label">Username:</span>
              <span className="value">mrjohnresolvit</span>
            </p>

            {/* Administrative Info */}
            <h2 className="section-title">ADMINISTRATIVE INFO</h2>
            <hr className="section-separator" />
            <p>
              <span className="label">Province:</span>
              <span className="value">Cavite</span>
            </p>
            <p>
              <span className="label">City/Municipality:</span>
              <span className="value">Indang</span>
            </p>
            <p>
              <span className="label">Barangay:</span>
              <span className="value">Barangay Poblacion Uno</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
