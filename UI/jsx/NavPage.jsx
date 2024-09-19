import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const NavPage = ({ title }) => {
  const location = useLocation();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <Link className="navbar-brand" to="/">
        {title}
      </Link>

      {/* Navbar Toggler for mobile view */}
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

      {/* Nav links on the right */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              to="/"
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/list' ? 'active' : ''}`}
              to="/list"
              aria-current={location.pathname === '/list' ? 'page' : undefined}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/create' ? 'active' : ''}`}
              to="/create"
              aria-current={location.pathname === '/create' ? 'page' : undefined}
            >
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/report' ? 'active' : ''}`}
              to="/report"
              aria-current={location.pathname === '/report' ? 'page' : undefined}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavPage;
