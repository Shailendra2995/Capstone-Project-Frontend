import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavPage from "./NavPage.jsx";
import Footer from "./Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Register from "./Register.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import Login from "./Login.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Profile from "./Profile.jsx";
import "../public/styles.css";
import HomePage from "./HomePage.jsx";
import Logout from "./logout.jsx";
import PasswordResetForm from "./Reset.jsx";
import PasswordResetRequest from "./ForgotPassword.jsx";
import Admin from "./Admin.jsx"

// Main application component
const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavPage title="PrimeMart" />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgot-password" element={<PasswordResetRequest />} />
          <Route path="/reset-password" element={<PasswordResetForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

// Root container element
const container = document.getElementById("contents");
const root = createRoot(container);
root.render(<App />);
