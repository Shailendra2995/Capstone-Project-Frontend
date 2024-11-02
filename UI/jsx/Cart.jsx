import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Spinner,
  Alert,
  Form,
} from "react-bootstrap";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const TAX_RATE = 0.13; // 13% tax

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:8000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const items = response.data?.data || [];
      setCartItems(items);
      calculateTotal(items);
    } catch (error) {
      setError("Error fetching cart items. Please try again.");
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = (items) => {
    const subtotal = items.reduce(
      (acc, item) => acc + (Number(item.price) * item.quantity || 0),
      0
    );
    setTotal(subtotal);
    const taxAmount = subtotal * TAX_RATE; // Calculate tax
    setTax(taxAmount);
    setFinalTotal(subtotal + taxAmount - discount); // Final total after applying discount
  };

  const updateQuantity = async (id, quantity) => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `http://localhost:8000/api/cart/${id}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      fetchCart();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeItem = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:8000/api/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      fetchCart();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const applyCoupon = (e) => {
    e.preventDefault();
    // Simple coupon logic for demonstration
    if (coupon === "SAVE10") {
      setDiscount(10);
    } else {
      alert("Invalid coupon code");
      setDiscount(0);
    }
    setCoupon(""); // Clear the coupon input
  };

  if (loading) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Loading your cart...</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h4>Your cart is empty.</h4>
          <Button href="/" variant="primary" className="mt-3">
            Continue Shopping
          </Button>
        </div>
      ) : (
        <Row>
          <Col md={8}>
            <Table responsive="sm" bordered hover className="bg-white shadow">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="d-flex align-items-center">
                      <img
                        src={`http://localhost:8000/storage/products/${item.product.image_url}`}
                        alt={item.product.name}
                        className="me-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "contain",
                          borderRadius: "5px",
                        }}
                      />
                      <div>
                        <div>{item.product.name}</div>
                        <div style={{ fontSize: "12px", color: "#888" }}>
                          {item.product.description}
                        </div>
                      </div>
                    </td>
                    <td>${Number(item.price).toFixed(2)}</td>
                    <td>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                        className="me-2"
                      >
                        <FaMinus />
                      </Button>
                      {item.quantity}
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="ms-2"
                      >
                        <FaPlus />
                      </Button>
                    </td>
                    <td>${(Number(item.price) * item.quantity).toFixed(2)}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Form onSubmit={applyCoupon} className="mb-3">
              <Form.Group controlId="couponCode">
                <Form.Label>Coupon Code</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter coupon code"
                  />
                  <Button type="submit" variant="primary" className="ms-2">
                    Apply
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </Col>
          <Col md={4}>
            <Card className="shadow">
              <Card.Body>
                <h4>Order Summary</h4>
                <hr />
                <p>
                  <strong>Subtotal:</strong> ${total.toFixed(2)}
                  <hr></hr>
                </p>
                <p>
                  <strong>Tax (13%):</strong> ${tax.toFixed(2)}
                  <hr></hr>
                </p>
                <p>
                  <strong>Discount:</strong> -${discount.toFixed(2)}
                  <hr></hr>
                </p>
                <h5 className="mt-3">
                  <strong>Total:</strong> ${finalTotal.toFixed(2)}
                  <hr></hr>
                </h5>
                <Button
                  className="mt-4 w-100"
                  variant="primary"
                  onClick={() => (window.location.href = "/checkout")}
                >
                  Proceed to Checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Cart;
