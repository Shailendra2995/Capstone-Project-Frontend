import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token or user data from localStorage
    localStorage.removeItem("isLoggedIn");

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
