import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaLeaf, FaBox, FaTruck } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Nav,
  Spinner,
  Alert,
} from "react-bootstrap";

// Reusable ProductCard Component
const ProductCard = ({ product, onAddToCart }) => (
  <Col md={3} sm={6} xs={12} key={product.id}>
    <Card className="mb-4">
      <Card.Img
        variant="top"
        src={`http://localhost:8000/storage/${product.image_url}`}
        alt={product.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found';
        }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
        {product.onsale_price && (
          <Card.Text>
            <span style={{ textDecoration: "line-through", color: "red" }}>
              ${product.price}
            </span>{" "}
            ${product.onsale_price}
          </Card.Text>
        )}
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary" onClick={() => onAddToCart(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  </Col>
);

const HomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // State for Categories
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [errorCategories, setErrorCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // State for Featured Products
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const [errorFeatured, setErrorFeatured] = useState(null);

  // State for Products on Sale
  const [productsOnSale, setProductsOnSale] = useState([]);
  const [loadingSale, setLoadingSale] = useState(true);
  const [errorSale, setErrorSale] = useState(null);

  // Generic Fetch Function
  const fetchProducts = async (params, setState, setLoading, setError) => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams(params).toString();
      const response = await fetch(
        `http://localhost:8000/api/product?${queryParams}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.status === 0 && Array.isArray(data.data)) {
        setState(data.data);
      } else {
        throw new Error(data.msg || "Failed to load products.");
      }
    } catch (err) {
      setError(err.message || "Error fetching products.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch Categories
  const fetchCategories = async () => {
    setLoadingCategories(true);
    setErrorCategories(null);
    try {
      const response = await fetch("http://localhost:8000/api/category", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.status === 0 && Array.isArray(data.data)) {
        setCategories(data.data);
      } else {
        throw new Error(data.msg || "Failed to load categories.");
      }
    } catch (err) {
      setErrorCategories(err.message || "Error fetching categories.");
    } finally {
      setLoadingCategories(false);
    }
  };

  // Fetch Featured Products
  const fetchFeaturedProducts = () => {
    const params = { is_featured: "true" };
    fetchProducts(
      params,
      setFeaturedProducts,
      setLoadingFeatured,
      setErrorFeatured
    );
  };

  // Fetch Products on Sale
  const fetchProductsOnSale = () => {
    const params = { is_onsale: "true" };
    fetchProducts(params, setProductsOnSale, setLoadingSale, setErrorSale);
  };

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8000/api/cart", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_id: product.id }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.status === 0) {
        alert(`${product.name} added to cart!`);
      } else {
        throw new Error(data.msg || "Failed to add to cart.");
      }
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert(err.message || "Error adding item to cart.");
    }
  };

  // Initial Data Fetching
  useEffect(() => {
    fetchCategories();
    fetchFeaturedProducts();
    fetchProductsOnSale();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <Container fluid className="p-0">
      {/* Hero Section */}
      <section
        className="hero-section text-center p-5"
        style={{ backgroundColor: "#F1F8E9" }}
      >
        <Container>
          <Row>
            <Col>
              <h1 className="mt-4">Fresh & Healthy Organic Food</h1>
              <Button
                variant="success"
                onClick={() => navigate("/products")}
                className="mt-3"
              >
                Shop Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="intro-section p-5">
        <Container>
          <Row className="text-center">
            <Col md={4} sm={12} className="mb-4">
              <FaLeaf size={50} style={{ color: "green" }} />
              <h4 className="mt-3">100% Organic</h4>
              <p>We offer organic food that is healthy and fresh.</p>
            </Col>
            <Col md={4} sm={12} className="mb-4">
              <FaBox size={50} style={{ color: "orange" }} />
              <h4 className="mt-3">Fresh Products</h4>
              <p>Our products are delivered fresh to your door.</p>
            </Col>
            <Col md={4} sm={12} className="mb-4">
              <FaTruck size={50} style={{ color: "blue" }} />
              <h4 className="mt-3">Fast Delivery</h4>
              <p>Get your groceries delivered within 24 hours.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories Navbar Section */}
      <section className="categories-navbar-section py-3 bg-light">
        <Container>
          {loadingCategories ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : errorCategories ? (
            <Alert variant="danger" className="text-center">
              {errorCategories}
            </Alert>
          ) : (
            <Nav className="justify-content-center flex-wrap">
              <Nav.Link
                className={`category-link ${
                  selectedCategory === null ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(null);
                  navigate("/products");
                }}
              >
                <i className="fa fa-th-large me-2" aria-hidden="true"></i> All
              </Nav.Link>
              {categories.map((category) => (
                <Nav.Item key={category.id}>
                  <Nav.Link
                    className={`category-link ${
                      selectedCategory === category.id ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <i
                      className={`fa ${category.icon} me-2`}
                      aria-hidden="true"
                    ></i>{" "}
                    {category.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
              <Nav.Item></Nav.Item>
            </Nav>
          )}
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="products-section py-5">
        <Container>
          <h2 className="text-center mb-5">Featured Products</h2>
          {loadingFeatured ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : errorFeatured ? (
            <Alert variant="danger" className="text-center">
              {errorFeatured}
            </Alert>
          ) : featuredProducts.length === 0 ? (
            <Alert variant="info" className="text-center">
              No featured products available.
            </Alert>
          ) : (
            <Row>
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </Row>
          )}
        </Container>
      </section>

      {/* Special Products Section */}
      <section
        className="special-products-section text-center py-5"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <Container>
          <h2 className="mb-4">Our Special Products</h2>
          <Row>
            <Col>
              <p className="mt-3">
                Delicious and fresh organic food just for you!
              </p>
              <Button
                variant="success"
                onClick={() => navigate("/products")}
                className="mt-3"
              >
                Shop Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Clients Say</h2>
          <Row className="text-center">
            <Col md={4} sm={12} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <i
                    className="fa fa-star mb-3"
                    aria-hidden="true"
                    style={{ fontSize: "2rem", color: "#007bff" }}
                  ></i>
                  <Card.Text>
                    "Best quality organic products I have ever purchased!"
                  </Card.Text>
                </Card.Body>
                <Card.Footer>- Client 1</Card.Footer>
              </Card>
            </Col>
            <Col md={4} sm={12} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <i
                    className="fa fa-thumbs-up mb-3"
                    aria-hidden="true"
                    style={{ fontSize: "2rem", color: "#007bff" }}
                  ></i>
                  <Card.Text>
                    "Fast delivery and fresh products every time!"
                  </Card.Text>
                </Card.Body>
                <Card.Footer>- Client 2</Card.Footer>
              </Card>
            </Col>
            <Col md={4} sm={12} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <i
                    className="fa fa-smile mb-3"
                    aria-hidden="true"
                    style={{ fontSize: "2rem", color: "#007bff" }}
                  ></i>
                  <Card.Text>"Excellent service and product quality!"</Card.Text>
                </Card.Body>
                <Card.Footer>- Client 3</Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products on Sale Section */}
      <section className="products-section py-5">
        <Container>
          <h2 className="text-center mb-5">Products on Sale</h2>
          {loadingSale ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : errorSale ? (
            <Alert variant="danger" className="text-center">
              {errorSale}
            </Alert>
          ) : productsOnSale.length === 0 ? (
            <Alert variant="info" className="text-center">
              No products on sale at the moment.
            </Alert>
          ) : (
            <Row>
              {productsOnSale.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </Row>
          )}
        </Container>
      </section>
    </Container>
  );
};

export default HomePage;