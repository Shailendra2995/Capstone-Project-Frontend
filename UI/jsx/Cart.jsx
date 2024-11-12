import React, { useEffect, useState, useReducer, useCallback } from "react";
import axios from "axios";
import { FaTruck, FaPercentage, FaReceipt } from "react-icons/fa";
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
  Modal,
} from "react-bootstrap";
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa"; // Use FaArrowLeft for backward arrow

// Initial state for the cart
const initialState = {
  cartItems: [],
  total: 0,
  tax: 0,
  finalTotal: 0,
  loading: true,
  error: null,
  coupon: "",
  discount: 0,
  showModal: false,
  itemToRemove: null,
};

// Cart reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "SET_TOTAL":
      return {
        ...state,
        total: action.payload,
      };
    case "SET_TAX":
      return {
        ...state,
        tax: action.payload,
      };
    case "SET_FINAL_TOTAL":
      return {
        ...state,
        finalTotal: action.payload,
      };
    case "SET_COUPON":
      return {
        ...state,
        coupon: action.payload,
      };
    case "SET_DISCOUNT":
      return {
        ...state,
        discount: action.payload,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: true,
        itemToRemove: action.payload,
      };
    case "HIDE_MODAL":
      return {
        ...state,
        showModal: false,
        itemToRemove: null,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

function Cart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const {
    cartItems,
    total,
    tax,
    finalTotal,
    loading,
    error,
    coupon,
    discount,
    showModal,
    itemToRemove,
  } = state;

  const TAX_RATE = 0.13; // 13% tax

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const token = localStorage.getItem("token");
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });
    try {
      const response = await axios.get("http://localhost:8000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const items = response.data?.data || [];
      dispatch({ type: "SET_CART", payload: items });
      calculateTotal(items);
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: "Error fetching cart items. Please try again.",
      });
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotal = useCallback(
    (items) => {
      const subtotal = items.reduce(
        (acc, item) => acc + (Number(item.price) * item.quantity || 0),
        0
      );
      dispatch({ type: "SET_TOTAL", payload: subtotal });
      const taxAmount = subtotal * TAX_RATE;
      dispatch({ type: "SET_TAX", payload: taxAmount });
      dispatch({
        type: "SET_FINAL_TOTAL",
        payload: subtotal + taxAmount - discount,
      });
    },
    [discount]
  );

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

  const applyCoupon = (e) => {
    e.preventDefault();
    if (coupon === "SAVE10") {
      dispatch({ type: "SET_DISCOUNT", payload: 10 });
    } else {
      alert("Invalid coupon code");
      dispatch({ type: "SET_DISCOUNT", payload: 0 });
    }
    dispatch({ type: "SET_COUPON", payload: "" });
  };

  const handleRemoveItem = async () => {
    const token = localStorage.getItem("token");
    if (itemToRemove) {
      try {
        await axios.delete(
          `http://localhost:8000/api/cart/${itemToRemove.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        dispatch({ type: "REMOVE_ITEM", payload: itemToRemove.id });
        dispatch({ type: "HIDE_MODAL" });
      } catch (error) {
        console.error("Error removing item:", error);
      }
    }
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
            <FaArrowLeft /> Continue Shopping
          </Button>
        </div>
      ) : (
        <Row>
          {/* Cart items section */}
          <Col xs={12} md={8}>
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
                        onClick={() =>
                          dispatch({ type: "SHOW_MODAL", payload: item })
                        }
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>

          {/* Order Summary and Actions Section */}
          <Col xs={12} md={4}>
            <Button
              href="/"
              variant="outline-primary"
              className="w-100 mb-3 d-flex align-items-center justify-content-center"
            >
              <FaArrowLeft className="me-2" /> Continue Shopping
            </Button>

            <Card className="shadow-lg rounded">
              <Card.Body>
                <h5 className="summary-title text-center mb-4">
                  Order Summary
                </h5>
                <hr />

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal:</span>
                  <span className="subtotal-price">${total.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Tax (13%):</span>
                  <span className="tax">${tax.toFixed(2)}</span>
                </div>

                <Form onSubmit={applyCoupon} className="my-3">
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Enter coupon code"
                      value={coupon}
                      onChange={(e) =>
                        dispatch({
                          type: "SET_COUPON",
                          payload: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="outline-primary"
                    className="w-100"
                  >
                    Apply Coupon
                  </Button>
                </Form>

                {discount > 0 && (
                  <div className="d-flex justify-content-between text-success mt-2 savings">
                    <span>Discount:</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <hr />

                <div className="d-flex justify-content-between estimated-total">
                  <strong>Total:</strong>
                  <strong className="total-amount">
                    ${finalTotal.toFixed(2)}
                  </strong>
                </div>

                <Button
                  href="/checkout"
                  variant="success"
                  className="mt-3 w-100 d-flex align-items-center justify-content-center"
                >
                  Go to Checkout <FaArrowRight className="ms-2" />
                </Button>

                <div className="small-note text-muted text-center mt-4">
                  <FaReceipt className="me-2" /> All fees and taxes are
                  estimates. Final charges will be itemized on your receipt.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Modal for confirmation */}
      <Modal show={showModal} onHide={() => dispatch({ type: "HIDE_MODAL" })}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Removal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this item from your cart?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch({ type: "HIDE_MODAL" })}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={handleRemoveItem}>
            Remove Item
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Cart;
