import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Nav, Modal } from "react-bootstrap";

const HomePage = () => {
  // Dummy Data for products categorized by type
  const allProducts = {
    fruits: [
      {
        id: 1,
        name: "Green Apple",
        price: "$1.50",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic green apple with a crisp taste.",
      },
      {
        id: 2,
        name: "Banana",
        price: "$0.50",
        img: "https://via.placeholder.com/150",
        description: "Sweet organic bananas, perfect for snacking.",
      },
      {
        id: 3,
        name: "Orange",
        price: "$1.00",
        img: "https://via.placeholder.com/150",
        description: "Juicy organic orange rich in Vitamin C.",
      },
      {
        id: 4,
        name: "Strawberry",
        price: "$2.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic strawberries, great for desserts.",
      },
      {
        id: 5,
        name: "Grapes",
        price: "$3.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic grapes, sweet and juicy.",
      },
      {
        id: 6,
        name: "Mango",
        price: "$1.80",
        img: "https://via.placeholder.com/150",
        description: "Ripe organic mango with tropical flavor.",
      },
      {
        id: 7,
        name: "Pineapple",
        price: "$2.50",
        img: "https://via.placeholder.com/150",
        description: "Sweet and tangy organic pineapple.",
      },
      {
        id: 8,
        name: "Blueberries",
        price: "$2.20",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic blueberries, great for smoothies.",
      },
      {
        id: 9,
        name: "Peach",
        price: "$1.50",
        img: "https://via.placeholder.com/150",
        description: "Juicy organic peaches, perfect for summer.",
      },
      {
        id: 10,
        name: "Kiwi",
        price: "$1.00",
        img: "https://via.placeholder.com/150",
        description: "Sweet and tart organic kiwi.",
      },
    ],
    vegetables: [
      {
        id: 1,
        name: "Tomato",
        price: "$1.20",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic tomatoes, perfect for salads.",
      },
      {
        id: 2,
        name: "Broccoli",
        price: "$2.50",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic broccoli, rich in vitamins.",
      },
      {
        id: 3,
        name: "Carrot",
        price: "$0.80",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic carrots, crunchy and sweet.",
      },
      {
        id: 4,
        name: "Lettuce",
        price: "$1.50",
        img: "https://via.placeholder.com/150",
        description: "Crisp organic lettuce for fresh salads.",
      },
      {
        id: 5,
        name: "Peppers",
        price: "$2.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic peppers, colorful and crunchy.",
      },
      {
        id: 6,
        name: "Spinach",
        price: "$1.50",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic spinach, packed with nutrients.",
      },
      {
        id: 7,
        name: "Cucumber",
        price: "$1.00",
        img: "https://via.placeholder.com/150",
        description: "Crisp organic cucumbers, refreshing and hydrating.",
      },
      {
        id: 8,
        name: "Zucchini",
        price: "$1.20",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic zucchini, versatile for cooking.",
      },
      {
        id: 9,
        name: "Cauliflower",
        price: "$2.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic cauliflower, great for low-carb meals.",
      },
      {
        id: 10,
        name: "Onion",
        price: "$0.50",
        img: "https://via.placeholder.com/150",
        description: "Organic onions, essential for flavor.",
      },
    ],
    dairy: [
      {
        id: 1,
        name: "Milk",
        price: "$1.20",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic milk, rich and creamy.",
      },
      {
        id: 2,
        name: "Cheese",
        price: "$3.00",
        img: "https://via.placeholder.com/150",
        description: "Organic cheese, perfect for sandwiches.",
      },
      {
        id: 3,
        name: "Butter",
        price: "$2.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic butter, creamy and rich.",
      },
      {
        id: 4,
        name: "Yogurt",
        price: "$1.50",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic yogurt, smooth and tasty.",
      },
      {
        id: 5,
        name: "Cream",
        price: "$2.50",
        img: "https://via.placeholder.com/150",
        description: "Organic cream, perfect for desserts.",
      },
      {
        id: 6,
        name: "Sour Cream",
        price: "$2.00",
        img: "https://via.placeholder.com/150",
        description: "Rich and tangy organic sour cream.",
      },
      {
        id: 7,
        name: "Feta Cheese",
        price: "$3.50",
        img: "https://via.placeholder.com/150",
        description: "Crumble organic feta cheese on salads.",
      },
      {
        id: 8,
        name: "Cottage Cheese",
        price: "$2.20",
        img: "https://via.placeholder.com/150",
        description: "Organic cottage cheese, great for snacks.",
      },
      {
        id: 9,
        name: "Ice Cream",
        price: "$4.00",
        img: "https://via.placeholder.com/150",
        description: "Delicious organic ice cream, creamy and sweet.",
      },
      {
        id: 10,
        name: "Almond Milk",
        price: "$2.50",
        img: "https://via.placeholder.com/150",
        description: "Organic almond milk, dairy-free option.",
      },
    ],
    beverages: [
      {
        id: 1,
        name: "Orange Juice",
        price: "$3.50",
        img: "https://via.placeholder.com/150",
        description: "Fresh orange juice, rich in vitamin C.",
      },
      {
        id: 2,
        name: "Green Tea",
        price: "$2.00",
        img: "https://via.placeholder.com/150",
        description: "Healthy organic green tea.",
      },
      {
        id: 3,
        name: "Coffee",
        price: "$4.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh brewed organic coffee.",
      },
      {
        id: 4,
        name: "Milkshake",
        price: "$5.00",
        img: "https://via.placeholder.com/150",
        description: "Delicious milkshake, rich and creamy.",
      },
      {
        id: 5,
        name: "Smoothie",
        price: "$4.50",
        img: "https://via.placeholder.com/150",
        description: "Healthy smoothie made with fresh fruits.",
      },
      {
        id: 6,
        name: "Lemonade",
        price: "$2.50",
        img: "https://via.placeholder.com/150",
        description: "Fresh lemonade, refreshing and sweet.",
      },
      {
        id: 7,
        name: "Coconut Water",
        price: "$3.00",
        img: "https://via.placeholder.com/150",
        description: "Hydrating organic coconut water.",
      },
      {
        id: 8,
        name: "Herbal Tea",
        price: "$2.00",
        img: "https://via.placeholder.com/150",
        description: "Soothing organic herbal tea.",
      },
      {
        id: 9,
        name: "Sparkling Water",
        price: "$1.50",
        img: "https://via.placeholder.com/150",
        description: "Refreshing sparkling water.",
      },
      {
        id: 10,
        name: "Hot Chocolate",
        price: "$3.00",
        img: "https://via.placeholder.com/150",
        description: "Rich hot chocolate, perfect for winter.",
      },
    ],
    snacks: [
      {
        id: 1,
        name: "Chips",
        price: "$2.50",
        img: "https://via.placeholder.com/150",
        description: "Crunchy potato chips.",
      },
      {
        id: 2,
        name: "Cookies",
        price: "$3.00",
        img: "https://via.placeholder.com/150",
        description: "Tasty cookies, perfect for snacks.",
      },
      {
        id: 3,
        name: "Granola",
        price: "$3.50",
        img: "https://via.placeholder.com/150",
        description: "Healthy granola bars, great for energy.",
      },
      {
        id: 4,
        name: "Popcorn",
        price: "$1.80",
        img: "https://via.placeholder.com/150",
        description: "Fresh popcorn, light and airy.",
      },
      {
        id: 5,
        name: "Nuts",
        price: "$4.00",
        img: "https://via.placeholder.com/150",
        description: "Roasted mixed nuts, healthy and crunchy.",
      },
      {
        id: 6,
        name: "Trail Mix",
        price: "$3.50",
        img: "https://via.placeholder.com/150",
        description: "Nut and dried fruit mix, energy booster.",
      },
      {
        id: 7,
        name: "Rice Cakes",
        price: "$2.00",
        img: "https://via.placeholder.com/150",
        description: "Light and crispy rice cakes.",
      },
      {
        id: 8,
        name: "Beef Jerky",
        price: "$4.50",
        img: "https://via.placeholder.com/150",
        description: "Savory beef jerky, high in protein.",
      },
      {
        id: 9,
        name: "Fruit Snacks",
        price: "$1.50",
        img: "https://via.placeholder.com/150",
        description: "Chewy fruit snacks, perfect for kids.",
      },
      {
        id: 10,
        name: "Chocolate Bar",
        price: "$1.80",
        img: "https://via.placeholder.com/150",
        description: "Delicious chocolate bar, sweet treat.",
      },
    ],
    bakery: [
      {
        id: 1,
        name: "Bread",
        price: "$2.00",
        img: "https://via.placeholder.com/150",
        description: "Freshly baked organic bread.",
      },
      {
        id: 2,
        name: "Croissant",
        price: "$1.50",
        img: "https://via.placeholder.com/150",
        description: "Buttery croissant, flaky and delicious.",
      },
      {
        id: 3,
        name: "Bagel",
        price: "$1.20",
        img: "https://via.placeholder.com/150",
        description: "Fresh bagels, great for breakfast.",
      },
      {
        id: 4,
        name: "Muffin",
        price: "$1.80",
        img: "https://via.placeholder.com/150",
        description: "Delicious muffin, perfect for snacks.",
      },
      {
        id: 5,
        name: "Sourdough",
        price: "$3.00",
        img: "https://via.placeholder.com/150",
        description: "Artisan sourdough bread, tangy flavor.",
      },
      {
        id: 6,
        name: "Baguette",
        price: "$2.50",
        img: "https://via.placeholder.com/150",
        description: "Crispy baguette, perfect for sandwiches.",
      },
      {
        id: 7,
        name: "Pita Bread",
        price: "$1.50",
        img: "https://via.placeholder.com/150",
        description: "Soft pita bread for wraps.",
      },
      {
        id: 8,
        name: "Brownie",
        price: "$2.00",
        img: "https://via.placeholder.com/150",
        description: "Rich chocolate brownie, sweet and fudgy.",
      },
      {
        id: 9,
        name: "Danish Pastry",
        price: "$2.20",
        img: "https://via.placeholder.com/150",
        description: "Sweet danish pastry, filled with fruit.",
      },
      {
        id: 10,
        name: "Cookies",
        price: "$1.50",
        img: "https://via.placeholder.com/150",
        description: "Fresh baked cookies, soft and chewy.",
      },
    ],
    grains: [
      {
        id: 1,
        name: "Rice",
        price: "$1.80",
        img: "https://via.placeholder.com/150",
        description: "Organic rice, great for meals.",
      },
      {
        id: 2,
        name: "Quinoa",
        price: "$2.50",
        img: "https://via.placeholder.com/150",
        description: "Healthy quinoa, high in protein.",
      },
      {
        id: 3,
        name: "Oats",
        price: "$1.20",
        img: "https://via.placeholder.com/150",
        description: "Whole grain oats, perfect for breakfast.",
      },
      {
        id: 4,
        name: "Pasta",
        price: "$1.50",
        img: "https://via.placeholder.com/150",
        description: "Organic pasta, quick and easy meals.",
      },
      {
        id: 5,
        name: "Barley",
        price: "$2.00",
        img: "https://via.placeholder.com/150",
        description: "Nutritious barley for soups and salads.",
      },
      {
        id: 6,
        name: "Bread Crumbs",
        price: "$1.00",
        img: "https://via.placeholder.com/150",
        description: "Organic bread crumbs for cooking.",
      },
      {
        id: 7,
        name: "Flour",
        price: "$1.80",
        img: "https://via.placeholder.com/150",
        description: "Organic flour for baking.",
      },
      {
        id: 8,
        name: "Cornmeal",
        price: "$2.20",
        img: "https://via.placeholder.com/150",
        description: "Organic cornmeal for polenta.",
      },
      {
        id: 9,
        name: "Couscous",
        price: "$1.50",
        img: "https://via.placeholder.com/150",
        description: "Fluffy couscous, great side dish.",
      },
      {
        id: 10,
        name: "Buckwheat",
        price: "$2.00",
        img: "https://via.placeholder.com/150",
        description: "Nutritious buckwheat, gluten-free option.",
      },
    ],
    meat: [
      {
        id: 1,
        name: "Chicken Breast",
        price: "$5.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh organic chicken breast, lean and healthy.",
      },
      {
        id: 2,
        name: "Ground Beef",
        price: "$7.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh ground beef, perfect for burgers.",
      },
      {
        id: 3,
        name: "Pork Chops",
        price: "$6.00",
        img: "https://via.placeholder.com/150",
        description: "Juicy pork chops, great for grilling.",
      },
      {
        id: 4,
        name: "Turkey Breast",
        price: "$5.50",
        img: "https://via.placeholder.com/150",
        description: "Lean turkey breast, healthy protein source.",
      },
      {
        id: 5,
        name: "Sausage",
        price: "$4.50",
        img: "https://via.placeholder.com/150",
        description: "Savory sausage links, great for breakfast.",
      },
      {
        id: 6,
        name: "Bacon",
        price: "$5.50",
        img: "https://via.placeholder.com/150",
        description: "Crispy bacon, perfect for any meal.",
      },
      {
        id: 7,
        name: "Lamb Chops",
        price: "$8.00",
        img: "https://via.placeholder.com/150",
        description: "Tender lamb chops, perfect for roasting.",
      },
      {
        id: 8,
        name: "Beef Steaks",
        price: "$10.00",
        img: "https://via.placeholder.com/150",
        description: "Premium beef steaks, rich in flavor.",
      },
      {
        id: 9,
        name: "Duck Breast",
        price: "$9.00",
        img: "https://via.placeholder.com/150",
        description: "Rich duck breast, great for gourmet meals.",
      },
      {
        id: 10,
        name: "Veal Cutlets",
        price: "$12.00",
        img: "https://via.placeholder.com/150",
        description: "Tender veal cutlets, great for fine dining.",
      },
    ],
    seafood: [
      {
        id: 1,
        name: "Salmon",
        price: "$12.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh salmon fillet, rich in omega-3.",
      },
      {
        id: 2,
        name: "Shrimp",
        price: "$10.00",
        img: "https://via.placeholder.com/150",
        description: "Juicy shrimp, perfect for grilling.",
      },
      {
        id: 3,
        name: "Tuna",
        price: "$14.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh tuna steaks, delicious and healthy.",
      },
      {
        id: 4,
        name: "Tilapia",
        price: "$8.00",
        img: "https://via.placeholder.com/150",
        description: "Mild tilapia fillet, easy to cook.",
      },
      {
        id: 5,
        name: "Cod",
        price: "$9.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh cod fillet, flaky and delicious.",
      },
      {
        id: 6,
        name: "Crab Legs",
        price: "$20.00",
        img: "https://via.placeholder.com/150",
        description: "Sweet crab legs, perfect for special occasions.",
      },
      {
        id: 7,
        name: "Lobster",
        price: "$25.00",
        img: "https://via.placeholder.com/150",
        description: "Succulent lobster tail, luxurious and tasty.",
      },
      {
        id: 8,
        name: "Mussels",
        price: "$10.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh mussels, great for pasta dishes.",
      },
      {
        id: 9,
        name: "Oysters",
        price: "$18.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh oysters, a delicacy.",
      },
      {
        id: 10,
        name: "Scallops",
        price: "$22.00",
        img: "https://via.placeholder.com/150",
        description: "Sweet scallops, perfect for searing.",
      },
    ],
    frozenFoods: [
      {
        id: 1,
        name: "Frozen Vegetables",
        price: "$2.50",
        img: "https://via.placeholder.com/150",
        description: "Mixed frozen vegetables, quick and easy.",
      },
      {
        id: 2,
        name: "Ice Cream",
        price: "$4.00",
        img: "https://via.placeholder.com/150",
        description: "Delicious ice cream, various flavors.",
      },
      {
        id: 3,
        name: "Frozen Pizza",
        price: "$8.00",
        img: "https://via.placeholder.com/150",
        description: "Quick frozen pizza, easy to cook.",
      },
      {
        id: 4,
        name: "Frozen Berries",
        price: "$3.00",
        img: "https://via.placeholder.com/150",
        description: "Mixed frozen berries, great for smoothies.",
      },
      {
        id: 5,
        name: "Frozen Fish",
        price: "$6.00",
        img: "https://via.placeholder.com/150",
        description: "Fresh frozen fish fillets.",
      },
      {
        id: 6,
        name: "Frozen Dinners",
        price: "$7.00",
        img: "https://via.placeholder.com/150",
        description: "Complete frozen meals, easy to prepare.",
      },
      {
        id: 7,
        name: "Frozen Potatoes",
        price: "$3.50",
        img: "https://via.placeholder.com/150",
        description: "Frozen potato fries, quick side dish.",
      },
      {
        id: 8,
        name: "Frozen Fruit Bars",
        price: "$2.50",
        img: "https://via.placeholder.com/150",
        description: "Refreshing frozen fruit bars.",
      },
      {
        id: 9,
        name: "Frozen Pancakes",
        price: "$4.50",
        img: "https://via.placeholder.com/150",
        description: "Quick and easy frozen pancakes.",
      },
      {
        id: 10,
        name: "Frozen Waffles",
        price: "$3.00",
        img: "https://via.placeholder.com/150",
        description: "Delicious frozen waffles, great for breakfast.",
      },
    ],
  };
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

  const categories = [
    { id: 1, name: "Fruits", key: "fruits" },
    { id: 2, name: "Vegetables", key: "vegetables" },
    { id: 3, name: "Dairy", key: "dairy" },
    { id: 4, name: "Beverages", key: "beverages" },
    { id: 5, name: "Snacks", key: "snacks" },
    { id: 6, name: "Bakery", key: "bakery" },
    { id: 7, name: "Grains", key: "grains" },
    { id: 8, name: "Meat", key: "meat" },
    { id: 9, name: "Seafood", key: "seafood" },
    { id: 10, name: "Frozen Foods", key: "frozenFoods" },
  ];

  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState("fruits");

  // Modal state for showing product details
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  const handleProductClick = (product) => {
    setModalProduct(product);
    setShowModal(true);
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
                src="https://via.placeholder.com/500x250"
                alt="Fresh Organic Food"
                className="img-fluid"
              />
              <h1>Fresh & Healthy Organic Food</h1>
              <Button variant="success">Shop Now</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="intro-section p-5">
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <h4>100% Organic</h4>
              <p>We offer organic food that is healthy and fresh.</p>
            </Col>
            <Col md={4}>
              <h4>Fresh Products</h4>
              <p>Our products are delivered fresh to your door.</p>
            </Col>
            <Col md={4}>
              <h4>Fast Delivery</h4>
              <p>Get your groceries delivered within 24 hours.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories Navbar Section */}
      <section className="categories-navbar-section py-3 bg-light">
        <Container>
          <Nav className="justify-content-center">
            {categories.map((category) => (
              <Nav.Item key={category.id}>
                <Nav.Link
                  className={`category-link ${
                    selectedCategory === category.key ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category.key)}
                >
                  {category.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </section>

      {/* Products Section */}
      <section className="products-section py-5">
        <Container>
          <h2 className="text-center mb-5">
            Products:{" "}
            {categories.find((cat) => cat.key === selectedCategory)?.name}
          </h2>
          <Row>
            {allProducts[selectedCategory]?.map((product) => (
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
                src="https://via.placeholder.com/500x250"
                alt="Special Products"
                className="img-fluid"
              />
              <p>Delicious and fresh organic food just for you!</p>
              <Button variant="success">Shop Now</Button>
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
