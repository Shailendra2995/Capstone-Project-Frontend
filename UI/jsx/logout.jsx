import React from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios"; // Make sure to import axios

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // Make a POST request to the logout endpoint
      await axios.post('http://localhost:8000/api/user/logout', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });

      // Remove the token and isLoggedIn from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");

      // Update authentication state
      setIsAuthenticated(false);

      // Redirect to the login page
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
      // Even if the server request fails, still clear local storage and redirect
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      setIsAuthenticated(false);
      navigate("/login");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Logout;