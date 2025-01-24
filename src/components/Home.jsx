import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmitBlotter = () => {
    navigate("/form7");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="home-container">
      {/* Add the Header component here */}
      <Header showButton={false} />

      <div className="content">
        <div className="title-container">
          <img
            src="../assets/resolvIT-logo.png"
            alt="ResolvIT Logo"
            className="home-logo"
          />
          <div className="text-container">
            <h1>
              <span className="resolv">Resolv</span>
              <span className="it">IT</span>
            </h1>
            <div className="text-address">
              <h2>Brgy. Poblacion Uno</h2>
              <h2>Complaints Hub</h2>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button onClick={handleSubmitBlotter}>SUBMIT BLOTTER</button>
          <button onClick={handleDashboard}>DASHBOARD</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
