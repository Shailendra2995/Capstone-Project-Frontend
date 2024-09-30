import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate imported

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [postId, setPostId] = useState(null);
  const [message, setMessage] = useState(""); // State to hold success/error message
  const navigate = useNavigate(); // Initializing the navigate function

  // Handling data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission
      const data = new FormData();
      data.append("username", formData.username);
      data.append("email", formData.email);
      data.append("password", formData.password);

      const requestOptions = {
        method: "POST",
        body: data,
      };

      fetch("http://localhost:8000/api/user/register", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setPostId(data.id);
          if (data.status === 0) {
            setMessage("Registration successful! Redirecting to login..."); // Display success message
            setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
          } else {
            setMessage(
              data.message || "Registration failed. Please try again."
            ); // Display error message from backend
          }
        })
        .catch((error) => {
          setMessage("Error during registration. Please try again later.");
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        {message && <p className="message">{message}</p>}{" "}
        {/* Conditionally render message */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <button type="submit">Register</button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
