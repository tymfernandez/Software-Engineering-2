// src/components/Layout.js
import React from "react";
import "../main.css";
import Sidebar from "./Sidebar";

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
