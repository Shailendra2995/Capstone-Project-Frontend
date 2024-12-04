import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PurchaseHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:8000/api/user/order", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const fetchedOrders = response.data.data || [];
      setOrders(fetchedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Failed to fetch order history. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center mt-5 text-danger">{error}</div>
    );
  }

  return (
    <div className="order-history-container container mt-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        <div className="card-header bg-primary text-white text-center">
          <h2>Order History</h2>
        </div>
        <div className="card-body">
          {orders.length === 0 ? (
            <p className="text-center">No orders found.</p>
          ) : (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.id}>
                    <td>{index + 1}</td>
                    <td>{order.id}</td>
                    <td>{new Date(order.created_at).toLocaleDateString()}</td>
                    <td>
                      $
                      {typeof order.items_total_amount === "string"
                        ? parseFloat(order.items_total_amount).toFixed(2)
                        : "0.00"}
                    </td>
                    <td>
                      <div className="d-flex align-items-center justify-content-between">
                        {/* Display the order status */}
                        <span
                          className={`badge ${
                            order.status === "complete"
                              ? "bg-success"
                              : "bg-warning text-dark"
                          }`}
                        >
                          {order.status}
                        </span>

                        {/* Display the "Pay Now" button if order is not complete */}
                        {order.status !== "complete" && (
                          <button
                            className="btn btn-link p-0 text-decoration-none"
                            onClick={() => {
                              console.log(order.stripe_client_secret);
                              navigate("/payment", {
                                replace: true,
                                state: {
                                  clientSecret: order.stripe_client_secret,
                                },
                              });
                            }}
                          >
                            Pay Now
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PurchaseHistory;
