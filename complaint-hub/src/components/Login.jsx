import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../main.css";
import Validation from "./LoginValidation";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false); // Added isLoading state
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = Validation(values); // Perform validation
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true); // Start loading indicator
      setError({}); // Clear previous errors

      try {
        const result = await axios.post("http://localhost:3001/login", {
          username: values.username.toLowerCase(), // Convert username to lowercase
          password: values.password,
        });
        console.log("Server response:", result.data); // Debugging response

        if (result.data.includes("Login successful")) {
          // Check if response includes "Login successful"
          navigate("/home"); // Redirect on success
        } else {
          setError({ login: "Invalid login credentials" });
        }
      } catch (err) {
        console.error("Error during login:", err);
        setError({ login: "An error occurred during login. Please try again." });
      } finally {
        setIsLoading(false); // Stop loading indicator
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
              <Link to="/forgot-password" className="forgot-password">
                <i>Forgot password?</i>
              </Link>
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
    </div>
  );
}

export default Login;
