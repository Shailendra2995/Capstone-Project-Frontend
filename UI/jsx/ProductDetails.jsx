import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const [newReview, setNewReview] = useState({ title: "", content: "", stars: 5 });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
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
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      setProduct(response.data.data);
    } catch (err) {
      setError(err.response?.data?.msg || "Error fetching product details");
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
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      setReviews(response.data.data);
      setTotalPages(Math.ceil(response.data.total / response.data.page_size));
    } catch (err) {
      console.error("Error fetching reviews:", err);
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
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      setNewReview({ title: "", content: "", stars: 5 }); // Reset form
      fetchReviews(); // Refresh reviews after submitting
    } catch (err) {
      setError(err.response?.data?.msg || "Error submitting review");
    }
  };

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src={`${API_URL}/storage/${product.image_url}`}
              alt={product.name}
              className="card-img-top"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                <strong>Price:</strong> ${product.price}
              </p>
              {product.onsale_price && (
                <p className="card-text">
                  <strong>On Sale Price:</strong> ${product.onsale_price}
                </p>
              )}
              <p className="card-text">
                <strong>Brand:</strong> {product.brand}
              </p>
              <p className="card-text">
                <strong>Description:</strong> {product.description}
              </p>
              <p className="card-text">
                <strong>Specifications:</strong> {product.specifications}
              </p>
              <p className="card-text">
                {product.stock < 5 && (
                  <span className="text-warning">
                    (Selling out fast! Only a few left)
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3>Reviews</h3>
        <div className="card mb-3">
          <div className="card-body">
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
              <button type="submit" className="btn btn-primary">Submit Review</button>
            </form>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body">
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
          </div>
        </div>

        {totalPages > 1 && (
          <nav aria-label="Review pagination" className="mt-3">
            <ul className="pagination">
              {[...Array(totalPages).keys()].map((page) => (
                <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(page + 1)}>
                    {page + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;