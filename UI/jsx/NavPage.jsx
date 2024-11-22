import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaProductHunt,
  FaShoppingCart,
  FaUserAlt,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaUserTie,
} from "react-icons/fa";
import axios from "axios";

const NavPage = ({ title, isAuthenticated, isAdmin, setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

const handleLogout = async () => {
  const confirmLogout = window.confirm("Are you sure you want to log out?");

  if (confirmLogout) {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("No token found, logging out locally.");
        localStorage.removeItem("isLoggedIn");
        setIsAuthenticated(false);
        return;
      }

      await axios.post(
        "http://localhost:8000/api/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Clear session data and set the authentication state to false
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      setIsAuthenticated(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  } else {
    console.log("Logout cancelled");
  }
};


  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src="./logo.svg"
          alt="PrimeMart Logo"
          className="img-fluid logo-img me-2"
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              <FaHome /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/products" ? "active" : ""
              }`}
              to="/products"
              aria-current={
                location.pathname === "/products" ? "page" : undefined
              }
            >
              <FaProductHunt /> Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/cart" ? "active" : ""
              }`}
              to="/cart"
              aria-current={location.pathname === "/cart" ? "page" : undefined}
            >
              <FaShoppingCart /> Cart
            </Link>
          </li>
          {isAdmin && (
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/Admin" ? "active" : ""
                }`}
                to="/Admin"
                aria-current={
                  location.pathname === "/Admin" ? "page" : undefined
                }
              >
                <FaUserTie /> Admin
              </Link>
            </li>
          )}

          {!isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/register" ? "active" : ""
                  }`}
                  to="/register"
                  aria-current={
                    location.pathname === "/register" ? "page" : undefined
                  }
                >
                  <FaUserPlus /> Register
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/login" ? "active" : ""
                  }`}
                  to="/login"
                  aria-current={
                    location.pathname === "/login" ? "page" : undefined
                  }
                >
                  <FaSignInAlt /> Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/profile" ? "active" : ""
                  }`}
                  to="/profile"
                  aria-current={
                    location.pathname === "/profile" ? "page" : undefined
                  }
                >
                  <FaUserAlt /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link logout-link"
                  onClick={handleLogout}
                  role="button"
                >
                  <FaSignOutAlt /> Logout
                </span>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavPage;
