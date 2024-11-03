import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token or user data from localStorage
    localStorage.removeItem("token"); // Change this to "token" if you're using that for auth
    localStorage.removeItem("isLoggedIn"); // Optional: remove isLoggedIn if used

    // Update authentication state
    setIsAuthenticated(false); // Update the auth state in parent component

    // Redirect to the login page
    navigate("/login");
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