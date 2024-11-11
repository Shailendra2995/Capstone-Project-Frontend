import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Spinner,
  Alert,
  Form,
  Modal,
  Carousel,
  Badge,
  Tooltip,
  OverlayTrigger,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaShareAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showShareModal, setShowShareModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const [newReview, setNewReview] = useState({
    title: "",
    content: "",
    stars: 5,
  });

  const token = localStorage.getItem("token");
  const API_URL = window.ENV?.REACT_APP_API_URL || "http://localhost:8000";

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const [productResponse, reviewsResponse] = await Promise.all([
          axios.get(`${API_URL}/api/product/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`${API_URL}/api/review`, {
            params: {
              product_id: id,
              page_num: currentPage,
              page_size: 5,
            },
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setProduct(productResponse.data.data);
        setReviews(reviewsResponse.data.data.list || []);
        setTotalPages(Math.ceil(reviewsResponse.data.data.total / 5));
      } catch (err) {
        setError(err.response?.data?.msg || "Error fetching product details");
        showToastMessage("Error loading product details", "danger");
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id, token, API_URL, currentPage]);

  const showToastMessage = (message, variant = "success") => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };

  const addToCart = async () => {
    try {
      if (quantity < 1) {
        showToastMessage("Please select a valid quantity", "warning");
        return;
      }

      if (quantity > product.stock) {
        showToastMessage(
          `Sorry, only ${product.stock} items available in stock`,
          "warning"
        );
        return;
      }

      setAddingToCart(true);
      const response = await axios.post(
        `${API_URL}/api/cart`,
        {
          product_id: product.id,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === 0) {
        showToastMessage(`${quantity} ${product.name}(s) added to cart!`);
      } else {
        throw new Error(response.data.msg || "Failed to add to cart");
      }
    } catch (err) {
      console.error("Cart Error:", err);
      showToastMessage(err.message || "Error adding to cart", "danger");
    } finally {
      setAddingToCart(false);
    }
  };

  const submitReview = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${API_URL}/api/review`,
        { product_id: id, ...newReview },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setNewReview({ title: "", content: "", stars: 5 });
      showToastMessage("Review submitted successfully");

      // Refresh reviews
      const reviewsResponse = await axios.get(`${API_URL}/api/review`, {
        params: {
          product_id: id,
          page_num: currentPage,
          page_size: 5,
        },
        headers: { Authorization: `Bearer ${token}` },
      });
      setReviews(reviewsResponse.data.data.list || []);
    } catch (err) {
      showToastMessage("Error submitting review", "danger");
    }
  };

  const handleReviewChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleShareClick = () => {
    setShowShareModal(true);
  };

  const renderShareModal = () => (
    <Modal show={showShareModal} onHide={() => setShowShareModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Share Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-around">
          <Button variant="outline-primary">Facebook</Button>
          <Button variant="outline-info">Twitter</Button>
          <Button variant="outline-danger">Pinterest</Button>
        </div>
      </Modal.Body>
    </Modal>
  );

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Spinner animation="grow" variant="primary" />
        </motion.div>
      </Container>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container className="my-5">
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg={toastVariant}
          className="text-white"
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Row>
            {/* Product Image Carousel */}
            <Col md={6}>
              <Card className="border-0 shadow-sm">
                <Carousel
                  prevIcon={<FaChevronLeft className="text-dark" />}
                  nextIcon={<FaChevronRight className="text-dark" />}
                >
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded"
                      src={`${API_URL}/storage/${product.image_url}`}
                      alt={product.name}
                      style={{ objectFit: "cover", height: "400px" }}
                    />
                  </Carousel.Item>
                </Carousel>
              </Card>
            </Col>

            {/* Product Details */}
            <Col md={6}>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h2>{product.name}</h2>
                  <p className="text-muted">Brand: {product.brand}</p>
                </div>
                <div>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Add to Wishlist</Tooltip>}
                  >
                    <Button
                      variant="outline-danger"
                      onClick={() => setWishlist(!wishlist)}
                    >
                      <FaHeart color={wishlist ? "red" : "gray"} />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Share Product</Tooltip>}
                  >
                    <Button
                      variant="outline-secondary"
                      className="ms-2"
                      onClick={handleShareClick}
                    >
                      <FaShareAlt />
                    </Button>
                  </OverlayTrigger>
                </div>
              </div>

              {/* Pricing */}
              <div className="my-3">
                {product.onsale_price ? (
                  <>
                    <h4 className="text-danger">
                      Sale Price: ${product.onsale_price}
                      <Badge bg="warning" className="ms-2">
                        {Math.round(
                          ((product.price - product.onsale_price) /
                            product.price) *
                            100
                        )}
                        % OFF
                      </Badge>
                    </h4>
                    <p className="text-muted text-decoration-line-through">
                      Original: ${product.price}
                    </p>
                  </>
                ) : (
                  <h4>Price: ${product.price}</h4>
                )}
              </div>

              {/* Stock and Quantity */}
              <div className="mb-3">
                <p
                  className={product.stock < 5 ? "text-danger" : "text-success"}
                >
                  {product.stock} items in stock
                </p>
              </div>

              <div className="d-flex align-items-center my-3">
                <Button
                  variant="outline-secondary"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <Form.Control
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  max={product.stock}
                  className="mx-2 text-center"
                  style={{ width: "80px" }}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  disabled={quantity >= product.stock}
                >
                  +
                </Button>
              </div>

              {/* Add to Cart */}
              <Button
                className="btn btn-primary mt-3 w-100"
                onClick={addToCart}
                disabled={addingToCart || product.stock === 0}
              >
                {addingToCart ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    Adding to Cart...
                  </>
                ) : (
                  <>
                    <FaShoppingCart className="me-2" /> Add to Cart
                  </>
                )}
              </Button>

              {/* Description */}
              <Card className="mt-4">
                <Card.Body>
                  <Card.Title>Product Description</Card.Title>
                  <p>{product.description}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Reviews Section */}
          <h3 className="mt-5">Customer Reviews</h3>
          <Card className="p-4 mb-5">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="mb-4 border-bottom pb-3">
                  <h5>{review.title}</h5>
                  <p>{review.content}</p>
                  <div className="mb-2">
                    {Array(review.stars)
                      .fill()
                      .map((_, i) => (
                        <FaStar key={i} className="text-warning" />
                      ))}
                  </div>
                  <small className="text-muted">
                    By {review.reviewer?.username || "Anonymous"} on{" "}
                    {new Date(review.created_at).toLocaleDateString()}
                  </small>
                </div>
              ))
            ) : (
              <p>No reviews yet. Be the first to review this product!</p>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <Button
                  variant="outline-primary"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="me-2"
                >
                  Previous
                </Button>
                <Button
                  variant="outline-primary"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </Card>

          {/* Review Form */}
          <h5>Write a Review</h5>
          <Form onSubmit={submitReview}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newReview.title}
                onChange={handleReviewChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="content"
                rows="4"
                value={newReview.content}
                onChange={handleReviewChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Select
                  name="stars"
                  value={newReview.stars}
                  onChange={handleReviewChange}
                  style={{ width: "200px" }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <option key={star} value={star}>
                      {star} star{star !== 1 ? "s" : ""}
                    </option>
                  ))}
                </Form.Select>
                <div className="ms-3">
                  {Array(newReview.stars)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-warning" />
                    ))}
                </div>
              </div>
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit Review
            </Button>
          </Form>
        </motion.div>
      )}

      {renderShareModal()}
    </Container>
  );
};

export default ProductDetailPage;
