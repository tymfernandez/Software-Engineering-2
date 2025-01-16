import React, { useState } from "react";
import Header from "./Header";
import "./Support.css";

const Support = () => {
  const [activeCard, setActiveCard] = useState(null); // Track active card
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded container

  const handleCardClick = (card, index) => {
    // Toggle activeCard state
    const newActiveCard = activeCard === card ? null : card;
    setActiveCard(newActiveCard);

    // Toggle expanded state of the container
    const newExpandedIndex = expandedIndex === index ? null : index;
    setExpandedIndex(newExpandedIndex);
  };

  const handleSubmitBlotter = () => {
    // Logic for Submit Blotter button
    console.log("Navigating to Blotter Form...");
  };

  // Container contents and corresponding answers
  const containerContents = [
    {
      title: "Container 1 Content",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    },
    {
      title: "Container 2 Content",
      answer:
        "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Container 3 Content",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Container 4 Content",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className="support-container">
      <Header />
      <div className="header-buttons">
        <button onClick={handleSubmitBlotter} className="submit-blotter-header">
          Submit Blotter
        </button>
      </div>

      {/* Title and Subtitle */}
      <h1 className="support-title">SUPPORT</h1>
      <p className="support-subtitle">Hello, what can we do for you?</p>

      {/* Cards Section */}
      <div className="cards-container">
        {/* Card 1 */}
        <div className="support-card">
          <div className="support-card-icon">
            <img src="../assets/support-icon1.png" alt="Icon 1" />
          </div>
          <h2 className="support-card-title">FAQ's</h2>
          <p className="card-description">
            Find answers to the most common questions.
          </p>
          <button className="card-button">Browse FAQ's</button>
        </div>

        {/* Card 2 */}
        <div className="support-card">
          <div className="support-card-icon">
            <img src="../assets/support-icon2.png" alt="Icon 2" />
          </div>
          <h2 className="support-card-title">Contact Us</h2>
          <p className="card-description">
            Need personalized help? Get in touch with us.
          </p>
          <button className="card-button">Send a Message</button>
        </div>

        {/* Card 3 */}
        <div className="support-card">
          <div className="support-card-icon">
            <img src="../assets/support-icon3.png" alt="Icon 3" />
          </div>
          <h2 className="support-card-title">All about us</h2>
          <p className="card-description">Discover all about ResolvIT.</p>
          <button className="card-button">Browse About Us</button>
        </div>
      </div>

      {/* FAQ Section */}
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="question-cards-container">
        {["Dashboard", "Generating Reports", "Complaints", "User Profile"].map(
          (card, index) => (
            <div
              key={index}
              className={`question-card ${activeCard === card ? "active" : ""}`}
              onClick={() => handleCardClick(card, index)}
            >
              <div className="q-card-icon">
                {/* Image Icon */}
                {card === "Dashboard" && (
                  <img src="../assets/q-icon1.png" alt="Dashboard Icon" />
                )}
                {card === "Generating Reports" && (
                  <img
                    src="../assets/q-icon2.png"
                    alt="Generating Reports Icon"
                  />
                )}
                {card === "Complaints" && (
                  <img src="../assets/q-icon3.png" alt="Complaints Icon" />
                )}
                {card === "User Profile" && (
                  <img src="../assets/q-icon4.png" alt="User Profile Icon" />
                )}
              </div>
              <h3 className="q-card-title">{card}</h3>
              {activeCard === card && <div className="triangle-icon"></div>}
            </div>
          )
        )}
      </div>

      {/* Vertical Containers */}
      <div className="vertical-containers">
        {containerContents.map((item, index) => (
          <div
            key={index}
            className={`vertical-container ${
              expandedIndex === index ? "open" : ""
            }`}
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            {/* Container Title */}
            <p className="container-title">{item.title}</p>
            {/* Arrow Icon */}
            <img
              src="../assets/q-icon.png"
              alt="Arrow Icon"
              className={`arrow-icon ${
                expandedIndex === index ? "rotate" : ""
              }`}
              style={{
                backgroundColor:
                  expandedIndex === index ? "#939698" : "#0056A9",
                borderRadius: "50%",
                padding: "1px",
              }}
            />
            {/* Display Answer */}
            {expandedIndex === index && <p className="answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
