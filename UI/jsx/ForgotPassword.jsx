import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const data = new FormData();
    data.append("email", email);

    fetch("http://localhost:8000/api/user/forgot-password", {
      method: "POST",
      body: data, // Set the body to FormData
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Bad Request");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status == 0) {
          setMessage("Password reset link has been sent to your email.");
          setError("");
        } else {
          setError(data.message || "Something went wrong. Please try again.");
          setMessage("");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("An error occurred. Please try again.");
        setMessage("");
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-sm p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              required
            />
            {error && <p className="text-danger mt-2">{error}</p>}
            {message && <p className="text-success mt-2">{message}</p>}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Reset Link
          </button>
        </form>
        <div className="mt-3 text-center">
          <p>
            <Link to="/login" className="text-decoration-none">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetRequest;
