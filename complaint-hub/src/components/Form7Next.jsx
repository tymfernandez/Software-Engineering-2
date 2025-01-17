import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../main.css";
import Header from "./Header";

const Form7Next = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to control popup visibility
  const [popupMessage, setPopupMessage] = useState(""); // State for popup message
  const [nextPage, setNextPage] = useState(""); // State to determine navigation path
  const navigate = useNavigate(); // React Router hook for navigation

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    const selectedOption = document.querySelector(
      'input[name="mediation"]:checked'
    );

    if (selectedOption) {
      const value = selectedOption.value;
      if (value === "yes") {
        setPopupMessage(
          "Form 7: Sumbong was successfully submitted. Please click the button to continue to Form 8: Paabiso ng Pagdinig sa Complainant."
        );
        setNextPage("/form8"); // Set next page to Form 8
      } else {
        setPopupMessage(
          "Form 7: Sumbong was successfully submitted. Please click the button to continue to Complaints Page."
        );
        setNextPage("/complaint"); // Set next page to Complaint page
      }
      setIsPopupVisible(true); // Show popup
    } else {
      alert("Please select an option before submitting."); // Validation if no option is selected
    }
  };

  const handleContinue = () => {
    setIsPopupVisible(false); // Hide popup
    navigate(nextPage); // Navigate to the next page
  };

  return (
    <div className="form7-page">
      <Header showButton={false} />
      <div className="form7-text">
        <h1 className="form7-title">FORM 7: SUMBONG</h1>
        <h2 className="form7-subtitle">
          Submit complaints for documentation and resolution by the barangay
        </h2>

        <div className="form7Next-container">
          <form className="form7" onSubmit={handleFormSubmit}>
            <div className="form-box">
              <br />
              <p className="form7Next-text">
                Do you want the involved parties to be summoned for mediation and
                hearing? <span className="hint">(choose below)</span>
              </p>
              <div className="form-options">
                <div className="form-option">
                  <input type="radio" id="yes" name="mediation" value="yes" />
                  <label htmlFor="yes">Yes</label>
                </div>
              </div>
              <div className="form-options">
                <div className="form-option">
                  <input type="radio" id="no" name="mediation" value="no" />
                  <label htmlFor="no">No</label>
                </div>
              </div>
              <br />
            </div>
            <div className="form7Next-button-group">
              <button type="submit" className="form7Next-submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img
                src="/successIcon.png"
                alt="Success Icon"
                className="success-icon"
            />
            <h2>Success!</h2>
            <p>{popupMessage}</p>
            <button onClick={handleContinue} className="continue-button">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form7Next;
