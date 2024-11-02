import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/product/${id}`,
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

    fetchProduct();
  }, [id]);

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
              src={`http://localhost:8000/storage/products/${product.image_url}`}
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
        {/* Placeholder for reviews */}
        <div className="card">
          <div className="card-body">
            <p>No reviews yet.</p>
            {/* Example of how you might map over reviews */}
            {/* {product.reviews.map((review) => (
              <div key={review.id} className="review">
                <strong>{review.author}:</strong> {review.content}
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
