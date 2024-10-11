import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Using useNavigate for navigation
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

const HomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  // Dummy data for featured products and products on sale
  const featuredProducts = [
    {
      id: 1,
      name: "Organic Avocado",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic avocado, creamy and rich.",
    },
    {
      id: 2,
      name: "Local Honey",
      price: "$5.00",
      img: "https://via.placeholder.com/150",
      description: "Natural local honey, sweet and pure.",
    },
  ];

  const productsOnSale = [
    {
      id: 1,
      name: "Tomatoes",
      price: "$0.70",
      originalPrice: "$1.20",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic tomatoes, now on sale!",
    },
    {
      id: 2,
      name: "Bananas",
      price: "$0.30",
      originalPrice: "$0.50",
      img: "https://via.placeholder.com/150",
      description: "Sweet organic bananas, discounted!",
    },
  ];

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8000/api/category", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.status === 0 && Array.isArray(data.data)) {
        setCategories(data.data);
        if (!selectedCategory && data.data.length > 0) {
          setSelectedCategory(data.data[0].id);
        }
      } else {
        throw new Error(data.msg || "Failed to load categories.");
      }
    } catch (err) {
      setError(err.message || "Error fetching categories.");
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async (categoryId, search) => {
    setLoadingProducts(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (categoryId) params.append("category_id", categoryId);
      if (search) params.append("name", search);

      const response = await fetch(
        `http://localhost:8000/api/product?${params.toString()}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.status === 0 && Array.isArray(data.data)) {
        setProducts(data.data);
      } else {
        throw new Error(data.msg || "Failed to load products.");
      }
    } catch (err) {
      setError(err.message || "Error fetching products.");
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchProducts(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory(categoryKey);
    navigate(`/products`);
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
              <img
                src="./image1.png"
                alt="Fresh Organic Food"
                className="img-fluid"
              />
              <h1>Fresh & Healthy Organic Food</h1>
              <Button variant="success" onClick={() => navigate("/products")}>
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
            <Col md={4}>
              <FaLeaf size={50} style={{ color: "green" }} />
              <h4>100% Organic</h4>
              <p>We offer organic food that is healthy and fresh.</p>
            </Col>
            <Col md={4}>
              <FaBox size={50} style={{ color: "orange" }} />
              <h4>Fresh Products</h4>
              <p>Our products are delivered fresh to your door.</p>
            </Col>
            <Col md={4}>
              <FaTruck size={50} style={{ color: "blue" }} />
              <h4>Fast Delivery</h4>
              <p>Get your groceries delivered within 24 hours.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories Navbar Section */}
      <section className="categories-navbar-section py-3 bg-light">
        <Container>
          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : error ? (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          ) : (
            <Nav className="justify-content-center flex-wrap">
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
                    ></i>
                    {category.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
              <Nav.Item>
                <Nav.Link
                  className={`category-link ${
                    selectedCategory === null ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(null)}
                >
                  <i className="fa fa-th-large me-2" aria-hidden="true"></i>
                  All
                </Nav.Link>
              </Nav.Item>
            </Nav>
          )}
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="products-section py-5">
        <Container>
          <h2 className="text-center mb-5">Featured Products</h2>
          <Row>
            {featuredProducts.map((product) => (
              <Col md={3} key={product.id}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: {product.price}</Card.Text>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
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
              <img
                src="./image.png"
                alt="Special Products"
                className="img-fluid"
              />
              <p>Delicious and fresh organic food just for you!</p>
              <Button variant="success" onClick={() => navigate("/products")}>
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
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <i
                    className="fa fa-star mb-2"
                    aria-hidden="true"
                    style={{ fontSize: "2rem", color: "#007bff" }}
                  ></i>
                  <Card.Text>
                    "Best quality organic products I have ever purchased!"
                  </Card.Text>
                  <Card.Footer>- Client 1</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <i
                    className="fa fa-thumbs-up mb-2"
                    aria-hidden="true"
                    style={{ fontSize: "2rem", color: "#007bff" }}
                  ></i>
                  <Card.Text>
                    "Fast delivery and fresh products every time!"
                  </Card.Text>
                  <Card.Footer>- Client 2</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <i
                    className="fa fa-smile mb-2"
                    aria-hidden="true"
                    style={{ fontSize: "2rem", color: "#007bff" }}
                  ></i>
                  <Card.Text>
                    "Excellent service and product quality!"
                  </Card.Text>
                  <Card.Footer>- Client 3</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products on Sale Section */}
      <section className="products-section py-5">
        <Container>
          <h2 className="text-center mb-5">Products on Sale</h2>
          <Row>
            {productsOnSale.map((product) => (
              <Col md={3} key={product.id}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      Price: {product.price}{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        {product.originalPrice}
                      </span>
                    </Card.Text>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default HomePage;
