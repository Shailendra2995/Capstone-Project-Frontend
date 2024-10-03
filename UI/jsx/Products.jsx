import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Nav,
  Form,
  FormControl,
  Modal,
} from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const ProductPage = () => {
  // Define allProducts within the component
  const allProducts = {
    fruits: {
      citrusFruits: [
        {
          id: 3,
          name: "Orange",
          price: "$1.00",
          img: "https://via.placeholder.com/150",
          description: "Juicy organic orange rich in Vitamin C.",
        },
      ],
      berries: [
        {
          id: 4,
          name: "Strawberry",
          price: "$2.00",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic strawberries, great for desserts.",
        },
        {
          id: 8,
          name: "Blueberries",
          price: "$2.20",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic blueberries, great for smoothies.",
        },
      ],
      tropicalFruits: [
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
          id: 10,
          name: "Kiwi",
          price: "$1.00",
          img: "https://via.placeholder.com/150",
          description: "Sweet and tart organic kiwi.",
        },
      ],
      pomeFruits: [
        {
          id: 1,
          name: "Green Apple",
          price: "$1.50",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic green apple with a crisp taste.",
        },
      ],
      stoneFruits: [
        {
          id: 9,
          name: "Peach",
          price: "$1.50",
          img: "https://via.placeholder.com/150",
          description: "Juicy organic peaches, perfect for summer.",
        },
      ],
      otherFruits: [
        {
          id: 2,
          name: "Banana",
          price: "$0.50",
          img: "https://via.placeholder.com/150",
          description: "Sweet organic bananas, perfect for snacking.",
        },
        {
          id: 5,
          name: "Grapes",
          price: "$3.00",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic grapes, sweet and juicy.",
        },
      ],
    },
    vegetables: {
      leafyGreens: [
        {
          id: 4,
          name: "Lettuce",
          price: "$1.50",
          img: "https://via.placeholder.com/150",
          description: "Crisp organic lettuce for fresh salads.",
        },
        {
          id: 6,
          name: "Spinach",
          price: "$1.50",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic spinach, packed with nutrients.",
        },
      ],
      cruciferousVegetables: [
        {
          id: 2,
          name: "Broccoli",
          price: "$2.50",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic broccoli, rich in vitamins.",
        },
        {
          id: 9,
          name: "Cauliflower",
          price: "$2.00",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic cauliflower, great for low-carb meals.",
        },
      ],
      rootVegetables: [
        {
          id: 3,
          name: "Carrot",
          price: "$0.80",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic carrots, crunchy and sweet.",
        },
      ],
      alliums: [
        {
          id: 10,
          name: "Onion",
          price: "$0.50",
          img: "https://via.placeholder.com/150",
          description: "Organic onions, essential for flavor.",
        },
      ],
      nightshades: [
        {
          id: 1,
          name: "Tomato",
          price: "$1.20",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic tomatoes, perfect for salads.",
        },
        {
          id: 5,
          name: "Peppers",
          price: "$2.00",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic peppers, colorful and crunchy.",
        },
      ],
      otherVegetables: [
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
      ],
    },
    dairy: {
      milkProducts: [
        {
          id: 1,
          name: "Milk",
          price: "$1.20",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic milk, rich and creamy.",
        },
        {
          id: 10,
          name: "Almond Milk",
          price: "$2.50",
          img: "https://via.placeholder.com/150",
          description: "Organic almond milk, dairy-free option.",
        },
      ],
      cheese: [
        {
          id: 2,
          name: "Cheese",
          price: "$3.00",
          img: "https://via.placeholder.com/150",
          description: "Organic cheese, perfect for sandwiches.",
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
      ],
      butterAndCream: [
        {
          id: 3,
          name: "Butter",
          price: "$2.00",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic butter, creamy and rich.",
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
      ],
      yogurtAndIceCream: [
        {
          id: 4,
          name: "Yogurt",
          price: "$1.50",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic yogurt, smooth and tasty.",
        },
        {
          id: 9,
          name: "Ice Cream",
          price: "$4.00",
          img: "https://via.placeholder.com/150",
          description: "Delicious organic ice cream, creamy and sweet.",
        },
      ],
    },
    beverages: {
      juices: [
        {
          id: 1,
          name: "Orange Juice",
          price: "$3.50",
          img: "https://via.placeholder.com/150",
          description: "Fresh orange juice, rich in vitamin C.",
        },
      ],
      teasAndCoffees: [
        {
          id: 2,
          name: "Green Tea",
          price: "$2.00",
          img: "https://via.placeholder.com/150",
          description: "Healthy organic green tea.",
        },
        {
          id: 8,
          name: "Herbal Tea",
          price: "$2.00",
          img: "https://via.placeholder.com/150",
          description: "Soothing organic herbal tea.",
        },
        {
          id: 3,
          name: "Coffee",
          price: "$4.00",
          img: "https://via.placeholder.com/150",
          description: "Fresh brewed organic coffee.",
        },
      ],
      coldDrinks: [
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
          id: 9,
          name: "Sparkling Water",
          price: "$1.50",
          img: "https://via.placeholder.com/150",
          description: "Refreshing sparkling water.",
        },
      ],
      hotDrinks: [
        {
          id: 10,
          name: "Hot Chocolate",
          price: "$3.00",
          img: "https://via.placeholder.com/150",
          description: "Rich hot chocolate, perfect for winter.",
        },
      ],
      blendedDrinks: [
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
      ],
    },
    snacks: {
      saltySnacks: [
        {
          id: 1,
          name: "Chips",
          price: "$2.50",
          img: "https://via.placeholder.com/150",
          description: "Crunchy potato chips.",
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
          id: 8,
          name: "Beef Jerky",
          price: "$4.50",
          img: "https://via.placeholder.com/150",
          description: "Savory beef jerky, high in protein.",
        },
      ],
      sweetSnacks: [
        {
          id: 2,
          name: "Cookies",
          price: "$3.00",
          img: "https://via.placeholder.com/150",
          description: "Tasty cookies, perfect for snacks.",
        },
        {
          id: 10,
          name: "Chocolate Bar",
          price: "$1.80",
          img: "https://via.placeholder.com/150",
          description: "Delicious chocolate bar, sweet treat.",
        },
        {
          id: 9,
          name: "Fruit Snacks",
          price: "$1.50",
          img: "https://via.placeholder.com/150",
          description: "Chewy fruit snacks, perfect for kids.",
        },
      ],
      healthySnacks: [
        {
          id: 3,
          name: "Granola",
          price: "$3.50",
          img: "https://via.placeholder.com/150",
          description: "Healthy granola bars, great for energy.",
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
      ],
    },
    bakery: {
      breads: [
        {
          id: 1,
          name: "Bread",
          price: "$2.00",
          img: "https://via.placeholder.com/150",
          description: "Freshly baked organic bread.",
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
      ],
      pastriesAndSweets: [
        {
          id: 2,
          name: "Croissant",
          price: "$1.50",
          img: "https://via.placeholder.com/150",
          description: "Buttery croissant, flaky and delicious.",
        },
        {
          id: 4,
          name: "Muffin",
          price: "$1.80",
          img: "https://via.placeholder.com/150",
          description: "Delicious muffin, perfect for snacks.",
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
      breakfastItems: [
        {
          id: 3,
          name: "Bagel",
          price: "$1.20",
          img: "https://via.placeholder.com/150",
          description: "Fresh bagels, great for breakfast.",
        },
      ],
    },
    grains: {
      wholeGrains: [
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
          id: 10,
          name: "Buckwheat",
          price: "$2.00",
          img: "https://via.placeholder.com/150",
          description: "Nutritious buckwheat, gluten-free option.",
        },
      ],
      pastaAndCouscous: [
        {
          id: 4,
          name: "Pasta",
          price: "$1.50",
          img: "https://via.placeholder.com/150",
          description: "Organic pasta, quick and easy meals.",
        },
        {
          id: 9,
          name: "Couscous",
          price: "$1.50",
          img: "https://via.placeholder.com/150",
          description: "Fluffy couscous, great side dish.",
        },
      ],
      bakingIngredients: [
        {
          id: 7,
          name: "Flour",
          price: "$1.80",
          img: "https://via.placeholder.com/150",
          description: "Organic flour for baking.",
        },
        {
          id: 6,
          name: "Bread Crumbs",
          price: "$1.00",
          img: "https://via.placeholder.com/150",
          description: "Organic bread crumbs for cooking.",
        },
        {
          id: 8,
          name: "Cornmeal",
          price: "$2.20",
          img: "https://via.placeholder.com/150",
          description: "Organic cornmeal for polenta.",
        },
      ],
      otherGrains: [
        {
          id: 5,
          name: "Barley",
          price: "$2.00",
          img: "https://via.placeholder.com/150",
          description: "Nutritious barley for soups and salads.",
        },
      ],
    },
    meat: {
      poultry: [
        {
          id: 1,
          name: "Chicken Breast",
          price: "$5.00",
          img: "https://via.placeholder.com/150",
          description: "Fresh organic chicken breast, lean and healthy.",
        },
        {
          id: 4,
          name: "Turkey Breast",
          price: "$5.50",
          img: "https://via.placeholder.com/150",
          description: "Lean turkey breast, healthy protein source.",
        },
      ],
      beefAndPork: [
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
          id: 8,
          name: "Beef Steaks",
          price: "$10.00",
          img: "https://via.placeholder.com/150",
          description: "Premium beef steaks, rich in flavor.",
        },
      ],
      processedMeats: [
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
      ],
      lambAndVeal: [
        {
          id: 7,
          name: "Lamb Chops",
          price: "$8.00",
          img: "https://via.placeholder.com/150",
          description: "Tender lamb chops, perfect for roasting.",
        },
        {
          id: 10,
          name: "Veal Cutlets",
          price: "$12.00",
          img: "https://via.placeholder.com/150",
          description: "Tender veal cutlets, great for fine dining.",
        },
      ],
      otherMeats: [
        {
          id: 9,
          name: "Duck Breast",
          price: "$9.00",
          img: "https://via.placeholder.com/150",
          description: "Rich duck breast, great for gourmet meals.",
        },
      ],
    },
    seafood: {
      fish: [
        {
          id: 1,
          name: "Salmon",
          price: "$12.00",
          img: "https://via.placeholder.com/150",
          description: "Fresh salmon fillet, rich in omega-3.",
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
          name: "Frozen Fish",
          price: "$6.00",
          img: "https://via.placeholder.com/150",
          description: "Fresh frozen fish fillets.",
        },
      ],
      shellfish: [
        {
          id: 2,
          name: "Shrimp",
          price: "$10.00",
          img: "https://via.placeholder.com/150",
          description: "Juicy shrimp, perfect for grilling.",
        },
        {
          id: 7,
          name: "Lobster",
          price: "$25.00",
          img: "https://via.placeholder.com/150",
          description: "Succulent lobster tail, luxurious and tasty.",
        },
        {
          id: 3,
          name: "Crab Legs",
          price: "$20.00",
          img: "https://via.placeholder.com/150",
          description: "Sweet crab legs, perfect for special occasions.",
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
    },
    frozenFoods: {
      frozenVegetablesAndFruits: [
        {
          id: 1,
          name: "Frozen Vegetables",
          price: "$2.50",
          img: "https://via.placeholder.com/150",
          description: "Mixed frozen vegetables, quick and easy.",
        },
        {
          id: 4,
          name: "Frozen Berries",
          price: "$3.00",
          img: "https://via.placeholder.com/150",
          description: "Mixed frozen berries, great for smoothies.",
        },
        {
          id: 8,
          name: "Frozen Fruit Bars",
          price: "$2.50",
          img: "https://via.placeholder.com/150",
          description: "Refreshing frozen fruit bars.",
        },
      ],
      frozenMeals: [
        {
          id: 3,
          name: "Frozen Pizza",
          price: "$8.00",
          img: "https://via.placeholder.com/150",
          description: "Quick frozen pizza, easy to cook.",
        },
        {
          id: 6,
          name: "Frozen Dinners",
          price: "$7.00",
          img: "https://via.placeholder.com/150",
          description: "Complete frozen meals, easy to prepare.",
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
      frozenSnacks: [
        {
          id: 2,
          name: "Ice Cream",
          price: "$4.00",
          img: "https://via.placeholder.com/150",
          description: "Delicious ice cream, various flavors.",
        },
        {
          id: 7,
          name: "Frozen Potatoes",
          price: "$3.50",
          img: "https://via.placeholder.com/150",
          description: "Frozen potato fries, quick side dish.",
        },
      ],
      frozenFish: [
        {
          id: 5,
          name: "Frozen Fish",
          price: "$6.00",
          img: "https://via.placeholder.com/150",
          description: "Fresh frozen fish fillets.",
        },
      ],
    },
  };

  // Define categories
  const categories = [
    { id: 1, name: "Fruits", key: "fruits", icon: "fa-apple-whole" },
    { id: 2, name: "Vegetables", key: "vegetables", icon: "fa-carrot" },
    { id: 3, name: "Dairy", key: "dairy", icon: "fa-cheese" },
    { id: 4, name: "Beverages", key: "beverages", icon: "fa-coffee" },
    { id: 5, name: "Snacks", key: "snacks", icon: "fa-cookie" },
    { id: 6, name: "Bakery", key: "bakery", icon: "fa-bread-slice" },
    { id: 7, name: "Grains", key: "grains", icon: "fa-seedling" },
    { id: 8, name: "Meat", key: "meat", icon: "fa-drumstick-bite" },
    { id: 9, name: "Seafood", key: "seafood", icon: "fa-fish" },
    { id: 10, name: "Frozen Foods", key: "frozenFoods", icon: "fa-ice-cream" },
  ];

  // Extract categoryKey from URL parameters
  const { categoryKey } = useParams();

  // State variables
  const [selectedCategory, setSelectedCategory] = useState(
    categoryKey || "fruits"
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  // Update selectedCategory when categoryKey changes
  useEffect(() => {
    if (categoryKey && categoryKey !== selectedCategory) {
      setSelectedCategory(categoryKey);
      setSelectedSubcategory(null); // Reset subcategory when category changes
    }
  }, [categoryKey]);

  // Debounce the search input to optimize performance
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Get current category data
  const category = allProducts[selectedCategory];

  // Handle category click
  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory(categoryKey);
    setSelectedSubcategory(null); // Reset subcategory on category change
  };

  // Handle subcategory click
  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  // Handle product click to show modal
  const handleProductClick = (product) => {
    setModalProduct(product);
    setShowModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
    setModalProduct(null);
  };

  // Format subcategory names
  const formatSubcategoryName = (name) => {
    return name
      .replace(/([A-Z])/g, " $1") // Insert space before capital letters
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
  };

  // Get subcategories
  const subcategories = category ? Object.keys(category) : [];

  // Get products based on selected subcategory
  let products = [];
  if (selectedSubcategory) {
    products = category[selectedSubcategory] || [];
  } else {
    // Flatten all products from all subcategories
    products = Object.values(category || {}).flat();
  }

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <Container fluid className="p-0">
      {/* Search Bar */}
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
                <Button variant="outline-success">Search</Button>
              </Form>
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
                  <i
                    className={`fa ${category.icon} me-2`}
                    aria-hidden="true"
                  ></i>
                  {category.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </section>

      {/* Subcategory Tabs */}
      {subcategories.length > 0 && (
        <section className="subcategory-tabs-section py-3">
          <Container>
            <Nav variant="tabs" className="justify-content-center flex-wrap">
              {subcategories.map((subcategory) => (
                <Nav.Item key={subcategory}>
                  <Nav.Link
                    active={selectedSubcategory === subcategory}
                    onClick={() => handleSubcategoryClick(subcategory)}
                  >
                    {formatSubcategoryName(subcategory)}
                  </Nav.Link>
                </Nav.Item>
              ))}
              {/* Option to view all products */}
              <Nav.Item>
                <Nav.Link
                  active={selectedSubcategory === null}
                  onClick={() => handleSubcategoryClick(null)}
                >
                  All
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </section>
      )}

      {/* Products Section */}
      <section className="products-section py-5">
        <Container>
          <h2 className="text-center mb-5 text-capitalize">
            {selectedSubcategory
              ? `${formatSubcategoryName(selectedSubcategory)}`
              : `${
                  categories.find((cat) => cat.key === selectedCategory)?.name
                }`}
          </h2>
          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col md={3} key={product.id} className="mb-4">
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={product.img}
                      alt={`${product.name} image`}
                      loading="lazy"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleProductClick(product)}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>Price: {product.price}</Card.Text>
                      <Card.Text className="flex-grow-1">
                        {product.description}
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col className="text-center">
                <h4>No products found</h4>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      {/* Product Details Modal */}
      {modalProduct && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modalProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={modalProduct.img}
              alt={`${modalProduct.name} image`}
              className="img-fluid mb-3"
            />
            <h5>Price: {modalProduct.price}</h5>
            <p>{modalProduct.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary">Add to Cart</Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ProductPage;
