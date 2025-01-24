import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // For showing the signup success modal
  const [modalMessage, setModalMessage] = useState(""); // Success message for modal
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setValues((prev) => ({ ...prev, password }));

    if (password.length < 6) {
      setPasswordStrength("strength-weak");
    } else if (password.length < 10) {
      setPasswordStrength("strength-medium");
    } else {
      setPasswordStrength("strength-strong");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    // Ensure the backend URL is correct
    axios
      .post("http://localhost:3001/register", values)
      .then(() => {
        setModalMessage("Signup successful! \nRedirecting to Login...");
        setShowModal(true); // Show success modal
        setTimeout(() => {
          navigate("/login"); // Redirect to login page after 2 seconds
          setShowModal(false); // Close modal after redirect
        }, 2000);
      })
      .catch((err) => {
        console.error("Error during signup:", err);
        setError("An error occurred during signup. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="outer-container">
      <div className="container">
        <div className="card">
          <div className="logo-section">
            <img
              src="../assets/resolvIT-logo.png"
              alt="ResolvIT Logo"
              className="logo"
            />
            <h1 className="title">
              Resolv<span className="text-highlight">IT</span>
            </h1>
          </div>
          <h2 className="heading">SIGN UP</h2>
          <p className="sub-text">Create a New Account</p>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleInput}
                className="input"
                required
              />
            </div>

            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleInput}
                className="input"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={values.password}
                  onChange={(e) => {
                    handleInput(e);
                    handlePasswordChange(e);
                  }}
                  className="input"
                  required
                />
                <img
                  src={
                    passwordVisible
                      ? "../assets/eyeIcon.png"
                      : "../assets/eyeSlashIcon.png"
                  }
                  alt={passwordVisible ? "Hide password" : "Show password"}
                  className="toggle-password-icon"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <div className={`password-strength ${passwordStrength}`}></div>
              {error && <p className="error-text">{error}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`button ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          {/* Login Redirect */}
          <p className="signup-text">
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </p>
        </div>
      </div>
        {/* Modal Popup for Signup Success */}
        {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button
              className="modal-close-button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
