import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ForgotPasswordModal.css";

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3001/forgot-password", { email });
      setMessage(response.data.message || "Check your email for further instructions.");
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`custom-modal-backdrop ${isOpen ? "show d-flex" : "d-none"}`}
      tabIndex="-1"
      role="dialog"
      aria-hidden={!isOpen}
    >
      <div className="custom-modal">
        <div className="modal-header">
          <h5 className="modal-title">Forgot Password</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="modal-body">
          <p>Enter your email to reset your password:</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
            <button
              type="submit"
              className="btn btn-primary mt-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
          {message && <p className="text-success mt-3">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;