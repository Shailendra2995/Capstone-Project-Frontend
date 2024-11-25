import React, { useState, useEffect } from "react";
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
      <section id="success" className="text-center">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@primemart.com</a>.
        </p>
      </section>
    );
  }

  return null;
};

export default Thankyou;
