import React, { useState } from "react";
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
import Payment from "./Payment.jsx";
import Thankyou from "./Thankyou.jsx";
import PasswordResetForm from "./Reset.jsx";
import PasswordResetRequest from "./ForgotPassword.jsx";
import Admin from "./Admin.jsx";
import AdminLayout from "./AdminLayout.jsx";
import ProductsPage from "./ProductsPage.jsx";
import CategoriesPage from "./CategoriesPage.jsx";
import UsersPage from "./UsersPage.jsx";
import CheckoutPage from "./Checkout.jsx";
import PurchaseHistory from "./purchaseHistory.jsx";

// Main application component
const App = () => {
  // State for authentication and admin status
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [isAdmin] = useState(localStorage.getItem("is_admin") === "true");

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavPage
          title="PrimeMart"
          isAuthenticated={isAuthenticated}
          isAdmin={isAdmin}
          setIsAuthenticated={setIsAuthenticated}
        />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/logout"
              element={<Logout setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/forgot-password" element={<PasswordResetRequest />} />
            <Route path="/reset-password" element={<PasswordResetForm />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="/history" element={<PurchaseHistory />} />

            {/* Admin routes using AdminLayout */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Admin />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="categories" element={<CategoriesPage />} />
              <Route path="users" element={<UsersPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

// Root container element
const container = document.getElementById("contents");
const root = createRoot(container);
root.render(<App />);
