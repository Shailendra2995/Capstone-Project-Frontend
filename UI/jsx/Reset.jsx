import React, { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";

const PasswordResetForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // Move this to the top level
  const token = searchParams.get("token");

  const validateForm = () => {
    const newErrors = {};
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords did not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);
      data.append("token", token);

      fetch("http://localhost:8000/api/user/reset-password", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status == 0) {
            setMessage("Password has been successfully reset.");
            setTimeout(() => navigate("/login"), 100);
          } else {
            setErrors({
              form: data.message || "Something went wrong. Please try again.",
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrors({ form: "An error occurred. Please try again." });
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-sm p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Set a New Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            {errors.email && <p className="text-danger mt-2">{errors.email}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && (
              <p className="text-danger mt-2">{errors.password}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && (
              <p className="text-danger mt-2">{errors.confirmPassword}</p>
            )}
          </div>

          {errors.form && <p className="text-danger mt-3">{errors.form}</p>}
          {message && <p className="text-success mt-3">{message}</p>}

          <button type="submit" className="btn btn-primary w-100">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetForm;
