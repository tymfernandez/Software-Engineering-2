import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { FaSignOutAlt, FaBars, FaAngleLeft } from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State for logout modal
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null); // Ref for the hamburger icon

  // Toggle sidebar collapse
  const handleCollapse = (event) => {
    event.stopPropagation(); // Prevent outside click logic from triggering
    setIsCollapsed(!isCollapsed);
    setIsOverlayVisible(!isCollapsed);
  };

  // Show confirmation modal for logout
  const handleLogoutClick = () => {
    setShowLogoutModal(true); // Show logout confirmation modal
  };

  // Handle logout action
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear auth token
    navigate("/login"); // Redirect to login page
  };

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
    closeSidebar();
  };

  // Close sidebar when clicking outside of it
  const closeSidebar = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
      setIsOverlayVisible(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close sidebar only if the click is outside both sidebar and hamburger icon
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isCollapsed]);

  //Function to determine if a menu item is active
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`sidebar ${isCollapsed ? "collapsed" : ""}`}
      ref={sidebarRef}
    >
      {isOverlayVisible && (
        <div className="overlay" onClick={closeSidebar}></div>
      )}

      {/* Hamburger Icon */}
      <div
        className="hamburger-icon"
        onClick={handleCollapse}
        ref={hamburgerRef} // Attach ref to hamburger icon
      >
        {isCollapsed ? <FaBars size={24} /> : <FaAngleLeft size={28} />}
      </div>

      {/* Sidebar Content */}
      {!isCollapsed && (
        <>
          <div className="header">
            <div className="sidebar-logo">
              <img src="../assets/resolvIT-logo.png" alt="Logo" />
            </div>
            <div className="title">
              <h2 className="side-header">ResolvIT</h2>
            </div>
          </div>
          <div
            className={`user-info ${isActive("/profile") ? "active" : ""}`}
            onClick={() => handleNavigation("/profile")}
          >
            <img
              src="../assets/user-icon-side.png"
              alt="User Icon"
              width={27}
            />
            <div className="user-details">
              <span className="user-name">Secretary</span>
              <span className="user-description">Barangay Secretary</span>
            </div>
          </div>

          <hr />
          <div className="menu">
            <div
              className={`menu-item ${isActive("/home") ? "active" : ""}`}
              onClick={() => handleNavigation("/home")}
            >
              <img src="../assets/home-icon-side.png" alt="Home" width={23} />
              <span className="menu-text">Home</span>
            </div>
            <div
              className={`menu-item ${isActive("/dashboard") ? "active" : ""}`}
              onClick={() => handleNavigation("/dashboard")}
            >
              <img
                src="../assets/dashboard-icon-side.png"
                alt="Dashboard"
                width={23}
              />
              <span className="menu-text">Dashboard</span>
            </div>
            <div
              className={`menu-item ${isActive("/complaints") ? "active" : ""}`}
              onClick={() => handleNavigation("/complaints")}
            >
              <img
                src="../assets/complaints-icon-side.png"
                alt="Complaints"
                width={23}
              />
              <span className="menu-text">Complaints</span>
            </div>
            <div
              className={`menu-item ${
                isActive("/notifications") ? "active" : ""
              }`}
              onClick={() => handleNavigation("/notifications")}
            >
              <img
                src="../assets/notif-icon-side.png"
                alt="Notifications Icon"
                width={23}
              />
              <span className="menu-text">Notifications</span>
            </div>
          </div>
          <div className="bottom-section">
            <div className="blotter-btn-wrapper">
              <button
                className="submit-blotter-btn"
                onClick={() => handleNavigation("/form7")}
              >
                SUBMIT BLOTTER
              </button>
            </div>
            <div
              className="support"
              onClick={() => handleNavigation("/support")} // Add navigation here
              style={{ cursor: "pointer" }}
            >
              <img
                src="../assets/support-icon-side.png"
                alt="Support"
                width={23}
              />
              <span>Support</span>
            </div>
            <hr />
            <div
              className="logout"
              onClick={handleLogoutClick} // Trigger logout modal
              style={{ cursor: "pointer" }}
            >
              <FaSignOutAlt size={23} />
              <span>Logout</span>
            </div>
          </div>
        </>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="logout-modal">
          <div className="modal-content">
            <p className="modal-contentText">Are you sure you want to logout?</p>
            <div className="modal-actions">
              <button
                className="yes-btn"
                onClick={() => {
                  handleLogout(); // Call the logout function
                }}
              >
                Yes
              </button>
              <button
                className="no-btn"
                onClick={() => setShowLogoutModal(false)} // Close the modal
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
