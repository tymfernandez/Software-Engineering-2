import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";
import Validation from "./LoginValidation";
import ForgotPasswordModal from "./ForgotPasswordModal"; // Import the modal component

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = Validation(values);
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      setError({});
      try {
        const result = await axios.post("http://localhost:3001/login", {
          username: values.username.toLowerCase(),
          password: values.password,
        });
        console.log("Server response:", result.data);

        if (result.data.includes("Login successful")) {
          navigate("/home");
        } else {
          setError({ login: "Invalid login credentials" });
        }
      } catch (err) {
        console.error("Error during login:", err);
        setError({
          login: "An error occurred during login. Please try again.",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="card">
          <div className="logo-section">
            <img src="resolvIT-logo.png" alt="ResolvIT Logo" className="logo" />
            <h1 className="title">
              Resolv<span className="text-highlight">IT</span>
            </h1>
          </div>
          <h2 className="heading">LOGIN</h2>
          <p className="sub-text">Enter Login Credentials</p>
          <form onSubmit={handleLogin}>
            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleInputChange}
                className="input"
              />
              {error.username && (
                <span className="error-text">{error.username}</span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                className="input"
              />
              {error.password && (
                <span className="error-text">{error.password}</span>
              )}
              <button
                type="button"
                className="forgot-password"
                onClick={() => setIsModalOpen(true)} // Open the modal
              >
                Forgot password?
              </button>
            </div>

            {error.login && <p className="error-text">{error.login}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className={`button ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Sign Up Button */}
          <p className="signup-text">
            Don’t have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close the modal
      />
    </div>
  );
}

export default Login;