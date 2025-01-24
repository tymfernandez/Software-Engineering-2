// src/components/Layout.js
import React from "react";
import Sidebar from "../styles/Sidebar";
import "../styles/Layout.css"; // Optional: styles for the layout

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar /> {/* Sidebar is always visible */}
      <div className="main-content">{children}</div>{" "}
      {/* Dynamic page content */}
    </div>
  );
};

export default Layout;
