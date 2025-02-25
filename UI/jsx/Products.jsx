import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Nav, Form, FormControl, Spinner, Alert } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import ProductModal from "./ProductModalComponent.jsx";

const ProductPage = () => {
  const { categoryKey } = useParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    categoryKey ? Number(categoryKey) : null
  );
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts(selectedCategory, debouncedSearch);
  }, [selectedCategory, debouncedSearch]);

  const fetchCategories = async () => {
    const token = localStorage.getItem("token");
    setLoadingCategories(true);
    setError(null);
    try {
      const response = await fetch(`${window.ENV.REACT_APP_API_URL}/api/category`, {
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
      } else {
        throw new Error(data.msg || "Failed to load categories.");
      }
    } catch (err) {
      setError(err.message || "Error fetching categories.");
    } finally {
      setLoadingCategories(false);
    }
  };

  const fetchProducts = async (categoryId, search) => {
    const token = localStorage.getItem("token");
    setLoadingProducts(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (categoryId) params.append("category_id", categoryId);
      if (search) params.append("name", search);
      const response = await fetch(
        `${window.ENV.REACT_APP_API_URL}/api/product?${params.toString()}`,
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
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalProduct(null);
  };

  const addToCart = async (product) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${window.ENV.REACT_APP_API_URL}/api/cart`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_id: product.id , quantity:1}),
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

  return (
    <Container fluid className="p-0">
      <section className="search-bar-section py-3 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Search Products"
                  className="me-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search Products"
                />
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="categories-navbar-section py-3 bg-light">
        <Container>
          {loadingCategories ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : error ? (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          ) : (
            <Nav className="justify-content-center flex-wrap">
              <Nav.Item>
                <Nav.Link
                  className={`category-link ${
                    selectedCategory === null ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(null)}
                >
                  <i className="fa fa-th-large me-2" aria-hidden="true"></i> All
                </Nav.Link>
              </Nav.Item>
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
            </Nav>
          )}
        </Container>
      </section>
      <section className="products-section py-5">
        <Container>
          <h2 className="text-center mb-5 text-capitalize">
            {selectedCategory
              ? categories.find((cat) => cat.id === selectedCategory)?.name
              : "All Products"}
          </h2>
          {loadingProducts ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : error ? (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          ) : products.length > 0 ? (
            <Row>
              {products.map((product) => (
                <Col md={3} key={product.id} className="mb-4">
                  <Card className="h-100">
                    <div onClick={() => handleProductClick(product)}>
                      <Card.Img
                        variant="top"
                        src={`${window.ENV.REACT_APP_API_URL}/storage/${product.image_url}`}
                        alt={`${product.name} image`}
                        loading="lazy"
                      />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                          <strong>Price:</strong> ${product.price}
                        </Card.Text>
                        <Card.Text className="flex-grow-1">
                          {product.description}
                        </Card.Text>
                      </Card.Body>
                    </div>
                    <Card.Footer>
                      <Button
                        variant="primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <Row>
              <Col className="text-center">
                <h4>No products found.</h4>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <ProductModal
        show={showModal}
        onClose={handleCloseModal}
        product={modalProduct}
        onAddToCart={addToCart}
      />
    </Container>
  );
};

export default ProductPage;