import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../main.css";

const Header = ({ showButton }) => {
  // Accept showButton prop
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State for logout modal
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleOutsideClick = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target) &&
      profileRef.current &&
      !profileRef.current.contains(event.target)
    ) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleLogoutClick = () => {
    setShowLogoutModal(true); // Show logout confirmation modal
  };

  const handleLogoutConfirm = () => {
    localStorage.removeItem("authToken"); // Clear auth token if any
    navigate("/login"); // Redirect to login page
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false); // Hide the modal
  };

  return (
    <header>
      <div className="header-right">
        {/* Notification Icon */}
        <div className="icon-container" ref={notificationRef}>
          <img
            src="notification-icon.png"
            alt="Notification"
            className="icon"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown("notification");
            }}
          />
          {openDropdown === "notification" && (
            <div className="dropdown notification-dropdown">
              <h3 className="dropdown-header">NOTIFICATIONS</h3>
              <div className="dropdown-subheader">
                <span className="dropdown-option">All</span>
                <span className="dropdown-option">Unread</span>
              </div>
              <div className="dropdown-section">
                <div className="dropdown-new">
                  <span>New</span>
                  <a href="/" className="see-all">
                    See all
                  </a>
                </div>
                <br />
                <div className="dropdown-earlier">
                  <span>Earlier</span>
                </div>
              </div>
              <button className="dropdown-btn">
                See previous notifications
              </button>
            </div>
          )}
        </div>

        {/* Profile Icon */}
        <div className="icon-container" ref={profileRef}>
          <img
            src="user-icon.png"
            alt="Profile"
            className="icon"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown("profile");
            }}
          />
          {openDropdown === "profile" && (
            <div className="dropdown profile-dropdown">
              <div className="dropdown-header">Lollima</div>
              <div className="dropdown-option">
                <img
                  src="support-icon.png"
                  alt="Support Icon"
                  className="dropdown-icon"
                />
                Support
              </div>
              <div className="dropdown-option" onClick={handleLogoutClick}>
                <img
                  src="logout-icon.png"
                  alt="Logout Icon"
                  className="dropdown-icon"
                />
                Logout
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="logout-modal">
          <div className="modal-content">
            <p>Are you sure you want to logout?</p>
            <div className="modal-actions">
              <button className="yes-btn" onClick={handleLogoutConfirm}>
                Yes
              </button>
              <button className="no-btn" onClick={handleLogoutCancel}>
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Conditionally render the Submit Blotter button */}
    </header>
  );
};

export default Header;