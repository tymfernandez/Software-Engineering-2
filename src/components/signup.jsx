import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    position: "Secretary", // Default value for dropdown
    username: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

    axios
      .post("http://localhost:3001/register", values)
      .then(() => {
        navigate("/login");
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
                    src={passwordVisible ? "/eyeIcon.png" : "/eyeSlashIcon.png"}
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
    </div>
  );
}

export default Signup;
