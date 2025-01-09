import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import axios from "axios"; // Import axios
import "../main.css";
import Validation from "./LoginValidation";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(""); // Added state for login errors
  const navigate = useNavigate(); // Initialize navigate

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // Proceed only if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/login`, // Use correct API URL
          {
            username: values.username, // Use correct field name
            password: values.password, // Use correct field name
          }
        );

        // Save the token to local storage
        localStorage.setItem("token", response.data.token);

        // Redirect or show success message
        console.log("Login successful:", response.data);
        setLoginError(""); // Clear any previous login error
        alert("Login successful!");
        navigate("/home"); // Redirect to home on successful login
      } catch (err) {
        console.error("Error:", err.response?.data || err.message);
        setLoginError(err.response?.data?.error || "Invalid username or password");
      }
    }
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="card">
          <div className="logo-section">
            <img
              src="resolvIT-logo.png"
              alt="ResolvIT Logo"
              className="logo"
            />
            <h1 className="title">
              Resolv<span className="text-highlight">IT</span>
            </h1>
          </div>
          <h2 className="heading">LOGIN</h2>
          <p className="sub-text">Enter Login Credentials</p>
          {loginError && (
            <p className="error-text">{loginError}</p>
          )}
          <form onSubmit={handleLogin}>
            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleInput}
                className="input"
              />
              {errors.username && (
                <span className="error-text">{errors.username}</span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleInput}
                className="input"
              />
              {errors.password && (
                <span className="error-text">{errors.password}</span>
              )}
              <Link to="/forgot-password" className="forgot-password">
                <i>forgot password?</i>
              </Link>
            </div>

            {/* Submit Button */}
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
