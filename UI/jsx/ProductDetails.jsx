import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button, Card, Spinner, Alert } from "react-bootstrap";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const [newReview, setNewReview] = useState({ title: "", content: "", stars: 5 });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const API_URL = window.ENV?.REACT_APP_API_URL || 'http://localhost:8000';

  useEffect(() => {
    fetchProduct();
    fetchReviews();
  }, [id, currentPage]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setProduct(response.data.data);
    } catch (err) {
      setError(err.response?.data?.msg || "Error fetching product details");
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/review`,
        {
          params: {
            product_id: id,
            page_num: currentPage,
            page_size: 10
          },
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.status === 0 && response.data.data.list) {
        setReviews(response.data.data.list);
        setTotalPages(Math.ceil(response.data.data.total / response.data.data.page_size));
      } else {
        setReviews([]);
        setTotalPages(1);
      }
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setReviews([]);
      setTotalPages(1);
    }
  };

  const handleReviewChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const submitReview = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${API_URL}/api/review`,
        {
          product_id: id,
          ...newReview,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setNewReview({ title: "", content: "", stars: 5 });
      fetchReviews();
    } catch (err) {
      setError(err.response?.data?.msg || "Error submitting review");
    }
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (error) {
    return <Alert variant="danger" className="m-3">{error}</Alert>;
  }

  if (!product) {
    return <Alert variant="info" className="m-3">Product not found.</Alert>;
  }

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img
              src={`${API_URL}/storage/${product.image_url}`}
              alt={product.name}
              className="img-fluid"
            />
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
              {product.onsale_price && (
                <Card.Text><strong>On Sale Price:</strong> ${product.onsale_price}</Card.Text>
              )}
              <Card.Text><strong>Brand:</strong> {product.brand}</Card.Text>
              <Card.Text><strong>Description:</strong> {product.description}</Card.Text>
              <Card.Text><strong>Specifications:</strong> {product.specifications}</Card.Text>
              {product.stock < 5 && (
                <Card.Text className="text-warning">
                  (Selling out fast! Only a few left)
                </Card.Text>
              )}
              <Button variant="primary" onClick={() => {/* Add to cart logic */}}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="mt-4">Reviews</h3>
      <Card className="mb-3">
        <Card.Body>
          <h5>Add a Review</h5>
          <form onSubmit={submitReview}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={newReview.title}
                onChange={handleReviewChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                value={newReview.content}
                onChange={handleReviewChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="stars" className="form-label">Rating</label>
              <select
                className="form-control"
                id="stars"
                name="stars"
                value={newReview.stars}
                onChange={handleReviewChange}
                required
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num} stars</option>
                ))}
              </select>
            </div>
            <Button type="submit" variant="primary">Submit Review</Button>
          </form>
        </Card.Body>
      </Card>
      
      <Card>
        <Card.Body>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id} className="mb-3">
                <h5>{review.title}</h5>
                <p>{review.content}</p>
                <p>Rating: {review.stars} stars</p>
                <small className="text-muted">
                  By {review.reviewer?.username || 'Unknown'} on {new Date(review.created_at).toLocaleDateString()}
                </small>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </Card.Body>
      </Card>

      {totalPages > 1 && (
        <nav aria-label="Review pagination" className="mt-3">
          <ul className="pagination">
            {[...Array(totalPages).keys()].map((page) => (
              <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                <Button className="page-link" onClick={() => setCurrentPage(page + 1)}>
                  {page + 1}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </Container>
  );
};

export default ProductDetailPage;