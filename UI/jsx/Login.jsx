import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = ({ setIsAuthenticated }) => { // Accept a prop to manage auth state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Send login request to the backend
        const response = await axios.post('http://localhost:8000/api/user/login', formData);

        // Check if login was successful
        if (response.data.status === 0) {
          console.log("Login successful", response.data);

          // Save token or user data to localStorage (if needed)
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("is_admin", response.data.data.user.is_admin == 1 ? true : false);

          // Set axios default headers for future requests
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.data.token}`;

          // Update authentication state
          setIsAuthenticated(true); // Call prop function to update auth state

          navigate("/"); // Redirect to home or another page
        } else {
          setErrors({ login: response.data.message || "Login failed" });
        }
      } catch (error) {
        console.error("Error during login:", error);
        setErrors({ login: "An error occurred. Please try again." });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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

          {errors.login && <p className="error">{errors.login}</p>}

          <button type="submit">Login</button>
        </form>
        <div className="arrange">
          <div className="reset-link">
            <p>
              Forgot Password?<Link to="/forgot-password"> Reset</Link>
            </p>
          </div>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;