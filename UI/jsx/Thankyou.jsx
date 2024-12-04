import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaCheckCircle,
  FaCarSide,
} from "react-icons/fa";

const Thankyou = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");
    const token = localStorage.getItem("token");

    fetch("http://localhost:8000/api/order/checkout/status", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "POST",
      body: JSON.stringify({ session_id: sessionId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.data.status);
        setCustomerEmail(data.data.customer_email);
      });
  }, []);

  if (status === "open") {
    return <Navigate to="/payment" />;
  }

  if (status === "complete") {
    return (
      <section className="thankyou-container">
        <div className="thankyou-content">
          {/* Animated Checkmark */}
          <div className="checkmark-icon">
            <FaCheckCircle />
          </div>
          <h1 className="thankyou-title animate-fade-in">Thank you!</h1>
          <p className="thankyou-description animate-slide-up">
            We've sent your free report to your inbox so it's easy to access.
            You can find more information on our website and social pages.
          </p>

          {/* Social Links Section */}
          <div className="social-links">
            <h3 className="animate-fade-in">Connect With Us</h3>
            <div className="social-icons animate-bounce">
              <a href="https://www.facebook.com" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://www.pinterest.com" className="social-icon">
                <FaPinterestP />
              </a>
              <a href="https://www.twitter.com" className="social-icon">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <a href="/" className="visit-website-btn animate-scale-up">
            Visit Website
          </a>

          {/* Confirmation Email Section */}
          <p className="confirmation-email animate-slide-up">
            A confirmation email will be sent to {customerEmail}. If you have
            any questions, please email{" "}
            <a href="mailto:orders@primemart.com">orders@primemart.com</a>.
          </p>
        </div>
        <p className="delivery-text"> Your order is on its way!</p>
        {/* Moving Car Animation */}
        <div className="car-container">
          <FaCarSide className="car-icon" />
        </div>
      </section>
    );
  }
};

export default Thankyou;
