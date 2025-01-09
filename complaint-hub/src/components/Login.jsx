import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import "../main.css";
import Validation from "./LoginValidation";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize navigate

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/home"); // Navigate to the Home page if validation passes
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
          <form onSubmit={handleSubmit}>
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
