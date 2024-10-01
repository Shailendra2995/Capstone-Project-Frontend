/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./jsx/Cart.jsx":
/*!**********************!*\
  !*** ./jsx/Cart.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Cart = function Cart() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Cart"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ "./jsx/Footer.jsx":
/*!************************!*\
  !*** ./jsx/Footer.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "footer mt-auto py-3 custom-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-dark"
  }, "All rights reserved \xA9 Arun | Shailendra | Peng")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./jsx/ForgotPassword.jsx":
/*!********************************!*\
  !*** ./jsx/ForgotPassword.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var PasswordResetRequest = function PasswordResetRequest() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];

  // Handle input change
  var handleChange = function handleChange(e) {
    setEmail(e.target.value);
  };

  // Handle form submission
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    // Simple email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    var data = new FormData();
    data.append("email", email);
    fetch("http://localhost:8000/api/user/forgot-password", {
      method: "POST",
      body: data // Set the body to FormData
    }).then(function (response) {
      if (!response.ok) {
        throw new Error("Bad Request");
      }
      return response.json();
    }).then(function (data) {
      if (data.status == 0) {
        setMessage("Password reset link has been sent to your email.");
        setError("");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
        setMessage("");
      }
    }).catch(function (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again.");
      setMessage("");
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container d-flex justify-content-center align-items-center vh-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card shadow-sm p-4",
    style: {
      maxWidth: "400px",
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center mb-4"
  }, "Reset Your Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email",
    className: "form-label"
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    className: "form-control",
    placeholder: "Enter your email",
    value: email,
    onChange: handleChange,
    required: true
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-danger mt-2"
  }, error), message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-success mt-2"
  }, message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btn btn-primary w-100"
  }, "Send Reset Link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-3 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login",
    className: "text-decoration-none"
  }, "Back to Login")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordResetRequest);

/***/ }),

/***/ "./jsx/HomePage.jsx":
/*!**************************!*\
  !*** ./jsx/HomePage.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var HomePage = function HomePage() {
  var _categories$find, _allProducts$selected;
  // Dummy Data for products categorized by type
  var allProducts = {
    fruits: [{
      id: 1,
      name: "Green Apple",
      price: "$1.50",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic green apple with a crisp taste."
    }, {
      id: 2,
      name: "Banana",
      price: "$0.50",
      img: "https://via.placeholder.com/150",
      description: "Sweet organic bananas, perfect for snacking."
    }, {
      id: 3,
      name: "Orange",
      price: "$1.00",
      img: "https://via.placeholder.com/150",
      description: "Juicy organic orange rich in Vitamin C."
    }, {
      id: 4,
      name: "Strawberry",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic strawberries, great for desserts."
    }, {
      id: 5,
      name: "Grapes",
      price: "$3.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic grapes, sweet and juicy."
    }, {
      id: 6,
      name: "Mango",
      price: "$1.80",
      img: "https://via.placeholder.com/150",
      description: "Ripe organic mango with tropical flavor."
    }, {
      id: 7,
      name: "Pineapple",
      price: "$2.50",
      img: "https://via.placeholder.com/150",
      description: "Sweet and tangy organic pineapple."
    }, {
      id: 8,
      name: "Blueberries",
      price: "$2.20",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic blueberries, great for smoothies."
    }, {
      id: 9,
      name: "Peach",
      price: "$1.50",
      img: "https://via.placeholder.com/150",
      description: "Juicy organic peaches, perfect for summer."
    }, {
      id: 10,
      name: "Kiwi",
      price: "$1.00",
      img: "https://via.placeholder.com/150",
      description: "Sweet and tart organic kiwi."
    }],
    vegetables: [{
      id: 1,
      name: "Tomato",
      price: "$1.20",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic tomatoes, perfect for salads."
    }, {
      id: 2,
      name: "Broccoli",
      price: "$2.50",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic broccoli, rich in vitamins."
    }, {
      id: 3,
      name: "Carrot",
      price: "$0.80",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic carrots, crunchy and sweet."
    }, {
      id: 4,
      name: "Lettuce",
      price: "$1.50",
      img: "https://via.placeholder.com/150",
      description: "Crisp organic lettuce for fresh salads."
    }, {
      id: 5,
      name: "Peppers",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic peppers, colorful and crunchy."
    }, {
      id: 6,
      name: "Spinach",
      price: "$1.50",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic spinach, packed with nutrients."
    }, {
      id: 7,
      name: "Cucumber",
      price: "$1.00",
      img: "https://via.placeholder.com/150",
      description: "Crisp organic cucumbers, refreshing and hydrating."
    }, {
      id: 8,
      name: "Zucchini",
      price: "$1.20",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic zucchini, versatile for cooking."
    }, {
      id: 9,
      name: "Cauliflower",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic cauliflower, great for low-carb meals."
    }, {
      id: 10,
      name: "Onion",
      price: "$0.50",
      img: "https://via.placeholder.com/150",
      description: "Organic onions, essential for flavor."
    }],
    dairy: [{
      id: 1,
      name: "Milk",
      price: "$1.20",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic milk, rich and creamy."
    }, {
      id: 2,
      name: "Cheese",
      price: "$3.00",
      img: "https://via.placeholder.com/150",
      description: "Organic cheese, perfect for sandwiches."
    }, {
      id: 3,
      name: "Butter",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic butter, creamy and rich."
    }, {
      id: 4,
      name: "Yogurt",
      price: "$1.50",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic yogurt, smooth and tasty."
    }, {
      id: 5,
      name: "Cream",
      price: "$2.50",
      img: "https://via.placeholder.com/150",
      description: "Organic cream, perfect for desserts."
    }, {
      id: 6,
      name: "Sour Cream",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Rich and tangy organic sour cream."
    }, {
      id: 7,
      name: "Feta Cheese",
      price: "$3.50",
      img: "https://via.placeholder.com/150",
      description: "Crumble organic feta cheese on salads."
    }, {
      id: 8,
      name: "Cottage Cheese",
      price: "$2.20",
      img: "https://via.placeholder.com/150",
      description: "Organic cottage cheese, great for snacks."
    }, {
      id: 9,
      name: "Ice Cream",
      price: "$4.00",
      img: "https://via.placeholder.com/150",
      description: "Delicious organic ice cream, creamy and sweet."
    }, {
      id: 10,
      name: "Almond Milk",
      price: "$2.50",
      img: "https://via.placeholder.com/150",
      description: "Organic almond milk, dairy-free option."
    }],
    beverages: [{
      id: 1,
      name: "Orange Juice",
      price: "$3.50",
      img: "https://via.placeholder.com/150",
      description: "Fresh orange juice, rich in vitamin C."
    }, {
      id: 2,
      name: "Green Tea",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Healthy organic green tea."
    }, {
      id: 3,
      name: "Coffee",
      price: "$4.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh brewed organic coffee."
    }, {
      id: 4,
      name: "Milkshake",
      price: "$5.00",
      img: "https://via.placeholder.com/150",
      description: "Delicious milkshake, rich and creamy."
    }, {
      id: 5,
      name: "Smoothie",
      price: "$4.50",
      img: "https://via.placeholder.com/150",
      description: "Healthy smoothie made with fresh fruits."
    }, {
      id: 6,
      name: "Lemonade",
      price: "$2.50",
      img: "https://via.placeholder.com/150",
      description: "Fresh lemonade, refreshing and sweet."
    }, {
      id: 7,
      name: "Coconut Water",
      price: "$3.00",
      img: "https://via.placeholder.com/150",
      description: "Hydrating organic coconut water."
    }, {
      id: 8,
      name: "Herbal Tea",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Soothing organic herbal tea."
    }, {
      id: 9,
      name: "Sparkling Water",
      price: "$1.50",
      img: "https://via.placeholder.com/150",
      description: "Refreshing sparkling water."
    }, {
      id: 10,
      name: "Hot Chocolate",
      price: "$3.00",
      img: "https://via.placeholder.com/150",
      description: "Rich hot chocolate, perfect for winter."
    }],
    snacks: [{
      id: 1,
      name: "Chips",
      price: "$2.50",
      img: "https://via.placeholder.com/150",
      description: "Crunchy potato chips."
    }, {
      id: 2,
      name: "Cookies",
      price: "$3.00",
      img: "https://via.placeholder.com/150",
      description: "Tasty cookies, perfect for snacks."
    }, {
      id: 3,
      name: "Granola",
      price: "$3.50",
      img: "https://via.placeholder.com/150",
      description: "Healthy granola bars, great for energy."
    }, {
      id: 4,
      name: "Popcorn",
      price: "$1.80",
      img: "https://via.placeholder.com/150",
      description: "Fresh popcorn, light and airy."
    }, {
      id: 5,
      name: "Nuts",
      price: "$4.00",
      img: "https://via.placeholder.com/150",
      description: "Roasted mixed nuts, healthy and crunchy."
    }, {
      id: 6,
      name: "Trail Mix",
      price: "$3.50",
      img: "https://via.placeholder.com/150",
      description: "Nut and dried fruit mix, energy booster."
    }, {
      id: 7,
      name: "Rice Cakes",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Light and crispy rice cakes."
    }, {
      id: 8,
      name: "Beef Jerky",
      price: "$4.50",
      img: "https://via.placeholder.com/150",
      description: "Savory beef jerky, high in protein."
    }, {
      id: 9,
      name: "Fruit Snacks",
      price: "$1.50",
      img: "https://via.placeholder.com/150",
      description: "Chewy fruit snacks, perfect for kids."
    }, {
      id: 10,
      name: "Chocolate Bar",
      price: "$1.80",
      img: "https://via.placeholder.com/150",
      description: "Delicious chocolate bar, sweet treat."
    }],
    bakery: [{
      id: 1,
      name: "Bread",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Freshly baked organic bread."
    }, {
      id: 2,
      name: "Croissant",
      price: "$1.50",
      img: "https://via.placeholder.com/150",
      description: "Buttery croissant, flaky and delicious."
    }, {
      id: 3,
      name: "Bagel",
      price: "$1.20",
      img: "https://via.placeholder.com/150",
      description: "Fresh bagels, great for breakfast."
    }, {
      id: 4,
      name: "Muffin",
      price: "$1.80",
      img: "https://via.placeholder.com/150",
      description: "Delicious muffin, perfect for snacks."
    }, {
      id: 5,
      name: "Sourdough",
      price: "$3.00",
      img: "https://via.placeholder.com/150",
      description: "Artisan sourdough bread, tangy flavor."
    }, {
      id: 6,
      name: "Baguette",
      price: "$2.50",
      img: "https://via.placeholder.com/150",
      description: "Crispy baguette, perfect for sandwiches."
    }, {
      id: 7,
      name: "Pita Bread",
      price: "$1.50",
      img: "https://via.placeholder.com/150",
      description: "Soft pita bread for wraps."
    }, {
      id: 8,
      name: "Brownie",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Rich chocolate brownie, sweet and fudgy."
    }, {
      id: 9,
      name: "Danish Pastry",
      price: "$2.20",
      img: "https://via.placeholder.com/150",
      description: "Sweet danish pastry, filled with fruit."
    }, {
      id: 10,
      name: "Cookies",
      price: "$1.50",
      img: "https://via.placeholder.com/150",
      description: "Fresh baked cookies, soft and chewy."
    }],
    grains: [{
      id: 1,
      name: "Rice",
      price: "$1.80",
      img: "https://via.placeholder.com/150",
      description: "Organic rice, great for meals."
    }, {
      id: 2,
      name: "Quinoa",
      price: "$2.50",
      img: "https://via.placeholder.com/150",
      description: "Healthy quinoa, high in protein."
    }, {
      id: 3,
      name: "Oats",
      price: "$1.20",
      img: "https://via.placeholder.com/150",
      description: "Whole grain oats, perfect for breakfast."
    }, {
      id: 4,
      name: "Pasta",
      price: "$1.50",
      img: "https://via.placeholder.com/150",
      description: "Organic pasta, quick and easy meals."
    }, {
      id: 5,
      name: "Barley",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Nutritious barley for soups and salads."
    }, {
      id: 6,
      name: "Bread Crumbs",
      price: "$1.00",
      img: "https://via.placeholder.com/150",
      description: "Organic bread crumbs for cooking."
    }, {
      id: 7,
      name: "Flour",
      price: "$1.80",
      img: "https://via.placeholder.com/150",
      description: "Organic flour for baking."
    }, {
      id: 8,
      name: "Cornmeal",
      price: "$2.20",
      img: "https://via.placeholder.com/150",
      description: "Organic cornmeal for polenta."
    }, {
      id: 9,
      name: "Couscous",
      price: "$1.50",
      img: "https://via.placeholder.com/150",
      description: "Fluffy couscous, great side dish."
    }, {
      id: 10,
      name: "Buckwheat",
      price: "$2.00",
      img: "https://via.placeholder.com/150",
      description: "Nutritious buckwheat, gluten-free option."
    }],
    meat: [{
      id: 1,
      name: "Chicken Breast",
      price: "$5.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh organic chicken breast, lean and healthy."
    }, {
      id: 2,
      name: "Ground Beef",
      price: "$7.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh ground beef, perfect for burgers."
    }, {
      id: 3,
      name: "Pork Chops",
      price: "$6.00",
      img: "https://via.placeholder.com/150",
      description: "Juicy pork chops, great for grilling."
    }, {
      id: 4,
      name: "Turkey Breast",
      price: "$5.50",
      img: "https://via.placeholder.com/150",
      description: "Lean turkey breast, healthy protein source."
    }, {
      id: 5,
      name: "Sausage",
      price: "$4.50",
      img: "https://via.placeholder.com/150",
      description: "Savory sausage links, great for breakfast."
    }, {
      id: 6,
      name: "Bacon",
      price: "$5.50",
      img: "https://via.placeholder.com/150",
      description: "Crispy bacon, perfect for any meal."
    }, {
      id: 7,
      name: "Lamb Chops",
      price: "$8.00",
      img: "https://via.placeholder.com/150",
      description: "Tender lamb chops, perfect for roasting."
    }, {
      id: 8,
      name: "Beef Steaks",
      price: "$10.00",
      img: "https://via.placeholder.com/150",
      description: "Premium beef steaks, rich in flavor."
    }, {
      id: 9,
      name: "Duck Breast",
      price: "$9.00",
      img: "https://via.placeholder.com/150",
      description: "Rich duck breast, great for gourmet meals."
    }, {
      id: 10,
      name: "Veal Cutlets",
      price: "$12.00",
      img: "https://via.placeholder.com/150",
      description: "Tender veal cutlets, great for fine dining."
    }],
    seafood: [{
      id: 1,
      name: "Salmon",
      price: "$12.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh salmon fillet, rich in omega-3."
    }, {
      id: 2,
      name: "Shrimp",
      price: "$10.00",
      img: "https://via.placeholder.com/150",
      description: "Juicy shrimp, perfect for grilling."
    }, {
      id: 3,
      name: "Tuna",
      price: "$14.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh tuna steaks, delicious and healthy."
    }, {
      id: 4,
      name: "Tilapia",
      price: "$8.00",
      img: "https://via.placeholder.com/150",
      description: "Mild tilapia fillet, easy to cook."
    }, {
      id: 5,
      name: "Cod",
      price: "$9.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh cod fillet, flaky and delicious."
    }, {
      id: 6,
      name: "Crab Legs",
      price: "$20.00",
      img: "https://via.placeholder.com/150",
      description: "Sweet crab legs, perfect for special occasions."
    }, {
      id: 7,
      name: "Lobster",
      price: "$25.00",
      img: "https://via.placeholder.com/150",
      description: "Succulent lobster tail, luxurious and tasty."
    }, {
      id: 8,
      name: "Mussels",
      price: "$10.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh mussels, great for pasta dishes."
    }, {
      id: 9,
      name: "Oysters",
      price: "$18.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh oysters, a delicacy."
    }, {
      id: 10,
      name: "Scallops",
      price: "$22.00",
      img: "https://via.placeholder.com/150",
      description: "Sweet scallops, perfect for searing."
    }],
    frozenFoods: [{
      id: 1,
      name: "Frozen Vegetables",
      price: "$2.50",
      img: "https://via.placeholder.com/150",
      description: "Mixed frozen vegetables, quick and easy."
    }, {
      id: 2,
      name: "Ice Cream",
      price: "$4.00",
      img: "https://via.placeholder.com/150",
      description: "Delicious ice cream, various flavors."
    }, {
      id: 3,
      name: "Frozen Pizza",
      price: "$8.00",
      img: "https://via.placeholder.com/150",
      description: "Quick frozen pizza, easy to cook."
    }, {
      id: 4,
      name: "Frozen Berries",
      price: "$3.00",
      img: "https://via.placeholder.com/150",
      description: "Mixed frozen berries, great for smoothies."
    }, {
      id: 5,
      name: "Frozen Fish",
      price: "$6.00",
      img: "https://via.placeholder.com/150",
      description: "Fresh frozen fish fillets."
    }, {
      id: 6,
      name: "Frozen Dinners",
      price: "$7.00",
      img: "https://via.placeholder.com/150",
      description: "Complete frozen meals, easy to prepare."
    }, {
      id: 7,
      name: "Frozen Potatoes",
      price: "$3.50",
      img: "https://via.placeholder.com/150",
      description: "Frozen potato fries, quick side dish."
    }, {
      id: 8,
      name: "Frozen Fruit Bars",
      price: "$2.50",
      img: "https://via.placeholder.com/150",
      description: "Refreshing frozen fruit bars."
    }, {
      id: 9,
      name: "Frozen Pancakes",
      price: "$4.50",
      img: "https://via.placeholder.com/150",
      description: "Quick and easy frozen pancakes."
    }, {
      id: 10,
      name: "Frozen Waffles",
      price: "$3.00",
      img: "https://via.placeholder.com/150",
      description: "Delicious frozen waffles, great for breakfast."
    }]
  };
  var featuredProducts = [{
    id: 1,
    name: "Organic Avocado",
    price: "$2.00",
    img: "https://via.placeholder.com/150",
    description: "Fresh organic avocado, creamy and rich."
  }, {
    id: 2,
    name: "Local Honey",
    price: "$5.00",
    img: "https://via.placeholder.com/150",
    description: "Natural local honey, sweet and pure."
  }];
  var productsOnSale = [{
    id: 1,
    name: "Tomatoes",
    price: "$0.70",
    originalPrice: "$1.20",
    img: "https://via.placeholder.com/150",
    description: "Fresh organic tomatoes, now on sale!"
  }, {
    id: 2,
    name: "Bananas",
    price: "$0.30",
    originalPrice: "$0.50",
    img: "https://via.placeholder.com/150",
    description: "Sweet organic bananas, discounted!"
  }];
  var categories = [{
    id: 1,
    name: "Fruits",
    key: "fruits"
  }, {
    id: 2,
    name: "Vegetables",
    key: "vegetables"
  }, {
    id: 3,
    name: "Dairy",
    key: "dairy"
  }, {
    id: 4,
    name: "Beverages",
    key: "beverages"
  }, {
    id: 5,
    name: "Snacks",
    key: "snacks"
  }, {
    id: 6,
    name: "Bakery",
    key: "bakery"
  }, {
    id: 7,
    name: "Grains",
    key: "grains"
  }, {
    id: 8,
    name: "Meat",
    key: "meat"
  }, {
    id: 9,
    name: "Seafood",
    key: "seafood"
  }, {
    id: 10,
    name: "Frozen Foods",
    key: "frozenFoods"
  }];

  // State for the selected category
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("fruits"),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCategory = _useState2[0],
    setSelectedCategory = _useState2[1];

  // Modal state for showing product details
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showModal = _useState4[0],
    setShowModal = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    modalProduct = _useState6[0],
    setModalProduct = _useState6[1];
  var handleCategoryClick = function handleCategoryClick(categoryKey) {
    setSelectedCategory(categoryKey);
  };
  var handleProductClick = function handleProductClick(product) {
    setModalProduct(product);
    setShowModal(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fluid: true,
    className: "p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "hero-section text-center p-5",
    style: {
      backgroundColor: "#F1F8E9"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://via.placeholder.com/500x250",
    alt: "Fresh Organic Food",
    className: "img-fluid"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Fresh & Healthy Organic Food"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "success"
  }, "Shop Now"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "intro-section p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "100% Organic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We offer organic food that is healthy and fresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Fresh Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Our products are delivered fresh to your door.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Fast Delivery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Get your groceries delivered within 24 hours."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "categories-navbar-section py-3 bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "justify-content-center"
  }, categories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
      key: category.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
      className: "category-link ".concat(selectedCategory === category.key ? "active" : ""),
      onClick: function onClick() {
        return handleCategoryClick(category.key);
      }
    }, category.name));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "products-section py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center mb-5"
  }, "Products:", " ", (_categories$find = categories.find(function (cat) {
    return cat.key === selectedCategory;
  })) === null || _categories$find === void 0 ? void 0 : _categories$find.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, (_allProducts$selected = allProducts[selectedCategory]) === null || _allProducts$selected === void 0 ? void 0 : _allProducts$selected.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      md: 3,
      key: product.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Img, {
      variant: "top",
      src: product.img
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Title, null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Text, null, "Price: ", product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Text, null, product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "primary"
    }, "Add to Cart"))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "special-products-section text-center py-5",
    style: {
      backgroundColor: "#F9F9F9"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "mb-4"
  }, "Our Special Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://via.placeholder.com/500x250",
    alt: "Special Products",
    className: "img-fluid"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Delicious and fresh organic food just for you!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "success"
  }, "Shop Now"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "testimonials-section py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center mb-5"
  }, "What Our Clients Say"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Text, null, "\"Best quality organic products I have ever purchased!\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Footer, null, "- Client 1")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Text, null, "\"Fast delivery and fresh products every time!\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Footer, null, "- Client 2")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Text, null, "\"Excellent service and product quality!\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Footer, null, "- Client 3"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "products-section py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center mb-5"
  }, "Featured Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, featuredProducts.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      md: 3,
      key: product.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Img, {
      variant: "top",
      src: product.img
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Title, null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Text, null, "Price: ", product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Text, null, product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "primary"
    }, "Add to Cart"))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "products-section py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center mb-5"
  }, "Products on Sale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, productsOnSale.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      md: 3,
      key: product.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Img, {
      variant: "top",
      src: product.img
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Title, null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Text, null, "Price: ", product.price, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        textDecoration: "line-through"
      }
    }, product.originalPrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Text, null, product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "primary"
    }, "Add to Cart"))));
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./jsx/Login.jsx":
/*!***********************!*\
  !*** ./jsx/Login.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var Login = function Login() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      email: "",
      password: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var handleChange = function handleChange(e) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  // Form Validation
  var validateForm = function validateForm() {
    var newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      var data = new FormData();
      data.append("email", formData.email);
      data.append("password", formData.password);
      var requestOptions = {
        method: "POST",
        body: data
        //credentials: 'include' if we are using cookies than this is required
      };
      fetch("http://localhost:8000/api/user/login", requestOptions).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.status == 0) {
          console.log("Login successful", data);

          // Save token or user data to localStorage/sessionStorage
          localStorage.setItem("isLoggedIn", true); //  'data.token' is returned
          localStorage.setItem("token", data.data.token);
          navigate("/");
        } else {
          setErrors({
            login: data.message || "Login failed"
          });
        }
      }).catch(function (error) {
        console.error("Error during login:", error);
        setErrors({
          login: "An error occurred. Please try again."
        });
      });
    } else {
      setErrors(validationErrors);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email",
    value: formData.email,
    onChange: handleChange
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "error"
  }, errors.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Password",
    value: formData.password,
    onChange: handleChange
  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "error"
  }, errors.password), errors.login && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "error"
  }, errors.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "arrange"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "reset-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Forgot Password?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/forgot-password"
  }, " Reset"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "register-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Don't have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/register"
  }, "Register"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./jsx/NavPage.jsx":
/*!*************************!*\
  !*** ./jsx/NavPage.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");


var NavPage = function NavPage(_ref) {
  var title = _ref.title;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light custom-navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "navbar-brand",
    to: "/"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "navbar-nav ms-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === "/" ? "active" : ""),
    to: "/",
    "aria-current": location.pathname === "/" ? "page" : undefined
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === "/products" ? "active" : ""),
    to: "/products",
    "aria-current": location.pathname === "/products" ? "page" : undefined
  }, "Products")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === "/cart" ? "active" : ""),
    to: "/cart",
    "aria-current": location.pathname === "/cart" ? "page" : undefined
  }, "Cart")), !isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === "/register" ? "active" : ""),
    to: "/register",
    "aria-current": location.pathname === "/register" ? "page" : undefined
  }, "Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === "/login" ? "active" : ""),
    to: "/login",
    "aria-current": location.pathname === "/login" ? "page" : undefined
  }, "Login"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === "/logout" ? "active" : ""),
    to: "/logout",
    "aria-current": location.pathname === "/logout" ? "page" : undefined
  }, "Logout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === "/profile" ? "active" : ""),
    to: "/profile",
    "aria-current": location.pathname === "/profile" ? "page" : undefined
  }, "Profile"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavPage);

/***/ }),

/***/ "./jsx/ProductDetails.jsx":
/*!********************************!*\
  !*** ./jsx/ProductDetails.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var ProductDetails = /*#__PURE__*/function (_Component) {
  function ProductDetails(props) {
    var _this;
    _classCallCheck(this, ProductDetails);
    _this = _callSuper(this, ProductDetails, [props]);
    // Initialize state
    _this.state = {};
    return _this;
  }
  _inherits(ProductDetails, _Component);
  return _createClass(ProductDetails, [{
    key: "render",
    value: function render() {
      return;
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetails);

/***/ }),

/***/ "./jsx/Products.jsx":
/*!**************************!*\
  !*** ./jsx/Products.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Products.jsx

var Products = function Products() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Product List"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

/***/ }),

/***/ "./jsx/Profile.jsx":
/*!*************************!*\
  !*** ./jsx/Profile.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var provinces = [{
  id: 1,
  name: "Alberta"
}, {
  id: 2,
  name: "British Columbia"
}, {
  id: 3,
  name: "Manitoba"
}, {
  id: 4,
  name: "New Brunswick"
}, {
  id: 5,
  name: "Newfoundland and Labrador"
}, {
  id: 7,
  name: "Nova Scotia"
}, {
  id: 6,
  name: "Northwest Territories"
}, {
  id: 8,
  name: "Nunavut"
}, {
  id: 9,
  name: "Ontario"
}, {
  id: 10,
  name: "Prince Edward Island"
}, {
  id: 11,
  name: "Quebec"
}, {
  id: 12,
  name: "Saskatchewan"
}, {
  id: 13,
  name: "Yukon"
}];
var Profile = function Profile() {
  var _profileData$profileI, _profileData$billingA, _profileData$billingA2, _profileData$billingA3, _profileData$billingA4, _profileData$billingA5, _profileData$billingA6, _profileData$shipping, _profileData$shipping2, _profileData$shipping3, _profileData$shipping4, _profileData$shipping5, _profileData$shipping6;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      username: "",
      email: "",
      phone: "",
      shippingAddress: {
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        postcode: "",
        phone: "",
        province_id: ""
      },
      billingAddress: {
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        postcode: "",
        phone: "",
        province_id: ""
      },
      old_password: "",
      new_password: "",
      profileImage: null,
      profileImageName: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    profileData = _useState2[0],
    setProfileData = _useState2[1];
  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setProfileData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, value));
    });
  };
  var handleAddressChange = function handleAddressChange(e, addressType) {
    var _e$target2 = e.target,
      name = _e$target2.name,
      value = _e$target2.value;
    setProfileData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, addressType, _objectSpread(_objectSpread({}, prevState[addressType]), {}, _defineProperty({}, name, value))));
    });
  };
  var handleProfileImageChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var file;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            file = URL.createObjectURL(e.target.files[0]);
            setProfileData(_objectSpread(_objectSpread({}, profileData), {}, {
              profileImage: file,
              profileImageName: e.target.files[0]
            }));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleProfileImageChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSaveImage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var formData, token, response, data, path;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            formData = new FormData();
            token = localStorage.getItem("token");
            formData.append("file", profileData.profileImageName);
            _context2.prev = 3;
            _context2.next = 6;
            return fetch("http://localhost:8000/api/upload/avatar", {
              method: "POST",
              body: formData,
              headers: {
                Authorization: "Bearer " + token
              }
            });
          case 6:
            response = _context2.sent;
            _context2.next = 9;
            return response.json();
          case 9:
            data = _context2.sent;
            if (data.status === 0) {
              path = "http://localhost:8000/storage/" + data.data.path;
              setProfileData(_objectSpread(_objectSpread({}, profileData), {}, {
                profileImage: path
              }));
              alert("Profile changes saved!");
            } else {
              alert("Failed to save changes.");
            }
            _context2.next = 17;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](3);
            console.error("Error saving profile:", _context2.t0);
            alert("Error saving profile.");
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 13]]);
    }));
    return function handleSaveImage() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSaveChanges = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var formData, response, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            formData = new FormData();
            formData.append("username", profileData.username);
            formData.append("email", profileData.email);
            formData.append("phone", profileData.phone);

            // Append profile image if it exists
            if (profileData.profileImageName) {
              formData.append("profileImage", profileData.profileImageName);
            }
            _context3.prev = 5;
            _context3.next = 8;
            return fetch("http://localhost:8000/api/user/profile/basic", {
              method: "POST",
              body: formData,
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            });
          case 8:
            response = _context3.sent;
            _context3.next = 11;
            return response.json();
          case 11:
            data = _context3.sent;
            if (data.status === 0) {
              alert("Profile changes saved!");
            } else {
              alert("Failed to save changes: " + data.msg);
            }
            _context3.next = 19;
            break;
          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](5);
            console.error("Error saving profile:", _context3.t0);
            alert("Error saving profile.");
          case 19:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[5, 15]]);
    }));
    return function handleSaveChanges() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleSaveBillingAddress = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var formData, billingKeys, response, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            formData = new FormData(); // Append billing address
            billingKeys = Object.keys(profileData.billingAddress);
            billingKeys.forEach(function (key) {
              formData.append("".concat(key), profileData.billingAddress[key]);
            });
            _context4.prev = 3;
            _context4.next = 6;
            return fetch("http://localhost:8000/api/user/profile/billing-address", {
              method: "POST",
              body: formData,
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            });
          case 6:
            response = _context4.sent;
            _context4.next = 9;
            return response.json();
          case 9:
            data = _context4.sent;
            if (data.status === 0) {
              alert("Billing address saved successfully!");
            } else {
              alert("Failed to save billing address: " + data.msg);
            }
            _context4.next = 17;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](3);
            console.error("Error saving billing address:", _context4.t0);
            alert("Error saving billing address.");
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[3, 13]]);
    }));
    return function handleSaveBillingAddress() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleSaveShippingAddress = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var formData, shippingKeys, response, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            formData = new FormData(); // Append shipping address
            shippingKeys = Object.keys(profileData.shippingAddress);
            shippingKeys.forEach(function (key) {
              formData.append("".concat(key), profileData.shippingAddress[key]);
            });
            _context5.prev = 3;
            _context5.next = 6;
            return fetch("http://localhost:8000/api/user/profile/shipping-address", {
              method: "POST",
              body: formData,
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            });
          case 6:
            response = _context5.sent;
            _context5.next = 9;
            return response.json();
          case 9:
            data = _context5.sent;
            if (data.status === 0) {
              alert("Shipping address saved successfully!");
            } else {
              alert("Failed to save shipping address: " + data.msg);
            }
            _context5.next = 17;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](3);
            console.error("Error saving shipping address:", _context5.t0);
            alert("Error saving shipping address.");
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[3, 13]]);
    }));
    return function handleSaveShippingAddress() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handlePasswordChange = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var formData, response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!(profileData.new_password !== profileData.new_password_confirmation)) {
              _context6.next = 3;
              break;
            }
            alert("Passwords do not match!");
            return _context6.abrupt("return");
          case 3:
            formData = new FormData();
            formData.append("old_password", profileData.old_password);
            formData.append("new_password", profileData.new_password);
            formData.append("new_password_confirmation", profileData.new_password_confirmation);
            _context6.prev = 7;
            _context6.next = 10;
            return fetch("http://localhost:8000/api/user/profile/password", {
              method: "POST",
              body: formData,
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            });
          case 10:
            response = _context6.sent;
            if (response.ok) {
              alert("Password changed successfully!");
            } else {
              alert("Failed to change password.");
            }
            _context6.next = 18;
            break;
          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](7);
            console.error("Error changing password:", _context6.t0);
            alert("Error changing password.");
          case 18:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[7, 14]]);
    }));
    return function handlePasswordChange() {
      return _ref6.apply(this, arguments);
    };
  }();
  var loadData = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var token, response, data, _data$data, username, email, phone, photoUrl, billing_address, shipping_address;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            token = localStorage.getItem("token");
            _context7.prev = 1;
            _context7.next = 4;
            return fetch("http://localhost:8000/api/user/profile", {
              method: "GET",
              headers: {
                Authorization: "Bearer " + token
              }
            });
          case 4:
            response = _context7.sent;
            _context7.next = 7;
            return response.json();
          case 7:
            data = _context7.sent;
            if (data.status === 0) {
              _data$data = data.data, username = _data$data.username, email = _data$data.email, phone = _data$data.phone, photoUrl = _data$data.photoUrl, billing_address = _data$data.billing_address, shipping_address = _data$data.shipping_address;
              setProfileData(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  username: username,
                  email: email,
                  phone: phone,
                  profileImage: "http://localhost:8000/storage/" + data.data.photoUrl,
                  billingAddress: {
                    firstname: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.firstname) || "",
                    lastname: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.lastname) || "",
                    address: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.address) || "",
                    city: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.city) || "",
                    postcode: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.postcode) || "",
                    phone: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.phone) || "",
                    province_id: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.province_id) || ""
                  },
                  shippingAddress: {
                    firstname: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.firstname) || "",
                    lastname: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.lastname) || "",
                    address: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.address) || "",
                    city: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.city) || "",
                    postcode: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.postcode) || "",
                    phone: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.phone) || "",
                    province_id: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.province_id) || ""
                  }
                });
              });
            } else {
              alert("Failed to load data: " + data.msg);
            }
            _context7.next = 15;
            break;
          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](1);
            console.error("Error loading data:", _context7.t0);
            alert("Error loading data.");
          case 15:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[1, 11]]);
    }));
    return function loadData() {
      return _ref7.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mt-5 account-settings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center mb-4 profile-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (_profileData$profileI = profileData.profileImage) !== null && _profileData$profileI !== void 0 ? _profileData$profileI : "./img1.jpg",
    alt: "Profile",
    className: "rounded-circle profile-img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-file-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "custom-file-label",
    htmlFor: "profileImageUpload"
  }, "Choose Profile Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    id: "profileImageUpload",
    className: "custom-file-input",
    onChange: handleProfileImageChange
  }), profileData.profileImage && profileData.profileImage.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "file-name"
  }, profileData.profileImage.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary mt-3",
    onClick: handleSaveImage
  }, "Save Changes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "mb-5 section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, "Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "username",
    className: "form-control",
    value: profileData.username,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    className: "form-control",
    value: profileData.email,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Phone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "tel",
    name: "phone",
    className: "form-control",
    value: profileData.phone || "",
    onChange: handleInputChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary mt-3",
    onClick: handleSaveChanges
  }, "Save Changes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "mb-5 section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, "Billing Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "firstname",
    className: "form-control",
    value: ((_profileData$billingA = profileData.billingAddress) === null || _profileData$billingA === void 0 ? void 0 : _profileData$billingA.firstname) || "",
    onChange: function onChange(e) {
      return handleAddressChange(e, "billingAddress");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "lastname",
    className: "form-control",
    value: ((_profileData$billingA2 = profileData.billingAddress) === null || _profileData$billingA2 === void 0 ? void 0 : _profileData$billingA2.lastname) || "",
    onChange: function onChange(e) {
      return handleAddressChange(e, "billingAddress");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Street Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "address",
    className: "form-control",
    value: ((_profileData$billingA3 = profileData.billingAddress) === null || _profileData$billingA3 === void 0 ? void 0 : _profileData$billingA3.address) || "",
    onChange: function onChange(e) {
      return handleAddressChange(e, "billingAddress");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "city",
    className: "form-control",
    value: ((_profileData$billingA4 = profileData.billingAddress) === null || _profileData$billingA4 === void 0 ? void 0 : _profileData$billingA4.city) || "",
    onChange: function onChange(e) {
      return handleAddressChange(e, "billingAddress");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Postal Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "postcode",
    className: "form-control",
    value: ((_profileData$billingA5 = profileData.billingAddress) === null || _profileData$billingA5 === void 0 ? void 0 : _profileData$billingA5.postcode) || "",
    onChange: function onChange(e) {
      return handleAddressChange(e, "billingAddress");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "phone",
    className: "form-control",
    value: ((_profileData$billingA6 = profileData.billingAddress) === null || _profileData$billingA6 === void 0 ? void 0 : _profileData$billingA6.phone) || "",
    onChange: function onChange(e) {
      return handleAddressChange(e, "billingAddress");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Province"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "province_id",
    value: profileData.billingAddress.province_id,
    onChange: function onChange(e) {
      return handleAddressChange(e, "billingAddress");
    },
    className: "form-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Select Province"), provinces.map(function (province) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: province.id,
      value: province.id
    }, province.name);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary mt-3",
    onClick: function onClick() {
      return handleSaveBillingAddress("billingAddress");
    }
  }, "Save Billing Address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "mb-5 section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, "Shipping Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "firstname",
    className: "form-control",
    value: ((_profileData$shipping = profileData.shippingAddress) === null || _profileData$shipping === void 0 ? void 0 : _profileData$shipping.firstname) || "",
    onChange: function onChange(e) {
      return handleAddressChange(e, "shippingAddress");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "lastname",
    className: "form-control",
    value: ((_profileData$shipping2 = profileData.shippingAddress) === null || _profileData$shipping2 === void 0 ? void 0 : _profileData$shipping2.lastname) || "",
    onChange: function onChange(e) {
      return handleAddressChange(e, "shippingAddress");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Street Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "address",
    className: "form-control",
    value: ((_profileData$shipping3 = profileData.shippingAddress) === null || _profileData$shipping3 === void 0 ? void 0 : _profileData$shipping3.address) || "",
    onChange: function onChange(e) {
      return handleAddressChange(e, "shippingAddress");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "city",
    className: "form-control",
    value: ((_profileData$shipping4 = profileData.shippingAddress) === null || _profileData$shipping4 === void 0 ? void 0 : _profileData$shipping4.city) || "",
    onChange: function onChange(e) {
      return handleAddressChange(e, "shippingAddress");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Postal Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "postcode",
    className: "form-control",
    value: ((_profileData$shipping5 = profileData.shippingAddress) === null || _profileData$shipping5 === void 0 ? void 0 : _profileData$shipping5.postcode) || "",
    onChange: function onChange(e) {
      return handleAddressChange(e, "shippingAddress");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "phone",
    className: "form-control",
    value: ((_profileData$shipping6 = profileData.shippingAddress) === null || _profileData$shipping6 === void 0 ? void 0 : _profileData$shipping6.phone) || "",
    onChange: function onChange(e) {
      return handleAddressChange(e, "shippingAddress");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Province"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "province_id",
    value: profileData.shippingAddress.province_id,
    onChange: function onChange(e) {
      return handleAddressChange(e, "shippingAddress");
    },
    className: "form-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Select Province"), provinces.map(function (province) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: province.id,
      value: province.id
    }, province.name);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary mt-3",
    onClick: function onClick() {
      return handleSaveShippingAddress("shippingAddress");
    }
  }, "Save Shipping Address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "mb-5 section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, "Change Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Current Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "old_password",
    className: "form-control",
    value: profileData.old_password,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "New Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "new_password",
    className: "form-control",
    value: profileData.new_password,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Confirm New Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "new_password_confirmation",
    className: "form-control",
    value: profileData.confirmPassword,
    onChange: handleInputChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary mt-3",
    onClick: handlePasswordChange
  }, "Change Password")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./jsx/Register.jsx":
/*!**************************!*\
  !*** ./jsx/Register.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

 // useNavigate imported

var Register = function Register() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    postId = _useState6[0],
    setPostId = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    message = _useState8[0],
    setMessage = _useState8[1]; // State to hold success/error message
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)(); // Initializing the navigate function

  // Handling data changes
  var handleChange = function handleChange(e) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  // Form Validation
  var validateForm = function validateForm() {
    var newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  // Handle form submission
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission
      var data = new FormData();
      data.append("username", formData.username);
      data.append("email", formData.email);
      data.append("password", formData.password);
      var requestOptions = {
        method: "POST",
        body: data
      };
      fetch("http://localhost:8000/api/user/register", requestOptions).then(function (response) {
        return response.json();
      }).then(function (data) {
        setPostId(data.id);
        if (data.status === 0) {
          setMessage("Registration successful! Redirecting to login..."); // Display success message
          setTimeout(function () {
            return navigate("/login");
          }, 2000); // Redirect after 2 seconds
        } else {
          setMessage(data.message || "Registration failed. Please try again."); // Display error message from backend
        }
      }).catch(function (error) {
        setMessage("Error during registration. Please try again later.");
      });
    } else {
      setErrors(validationErrors);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "register-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "register-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Register"), message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "message"
  }, message), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "username",
    placeholder: "Username",
    value: formData.username,
    onChange: handleChange
  }), errors.username && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "error"
  }, errors.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email",
    value: formData.email,
    onChange: handleChange
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "error"
  }, errors.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Password",
    value: formData.password,
    onChange: handleChange
  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "error"
  }, errors.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirm Password",
    value: formData.confirmPassword,
    onChange: handleChange
  }), errors.confirmPassword && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "error"
  }, errors.confirmPassword), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login-link"
  }, "Already have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login"
  }, "Login"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ "./jsx/Reset.jsx":
/*!***********************!*\
  !*** ./jsx/Reset.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var PasswordResetForm = function PasswordResetForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    password = _useState2[0],
    setPassword = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    confirmPassword = _useState4[0],
    setConfirmPassword = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    errors = _useState6[0],
    setErrors = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    message = _useState8[0],
    setMessage = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    email = _useState10[0],
    setEmail = _useState10[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0]; // Move this to the top level
  var token = searchParams.get("token");
  var validateForm = function validateForm() {
    var newErrors = {};
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords did not match";
    return newErrors;
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      var data = new FormData();
      data.append("email", email);
      data.append("password", password);
      data.append("token", token);
      fetch("http://localhost:8000/api/user/reset-password", {
        method: "POST",
        body: data
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.status == 0) {
          setMessage("Password has been successfully reset.");
          setTimeout(function () {
            return navigate("/login");
          }, 100);
        } else {
          setErrors({
            form: data.message || "Something went wrong. Please try again."
          });
        }
      }).catch(function (error) {
        console.error("Error:", error);
        setErrors({
          form: "An error occurred. Please try again."
        });
      });
    } else {
      setErrors(validationErrors);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container d-flex justify-content-center align-items-center vh-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card shadow-sm p-4",
    style: {
      maxWidth: "400px",
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center mb-4"
  }, "Set a New Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email",
    className: "form-label"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    className: "form-control",
    placeholder: "Enter your email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    value: email,
    required: true
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-danger mt-2"
  }, errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "password",
    className: "form-label"
  }, "New Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    className: "form-control",
    placeholder: "Enter your new password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    required: true
  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-danger mt-2"
  }, errors.password)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "confirmPassword",
    className: "form-label"
  }, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    id: "confirmPassword",
    name: "confirmPassword",
    className: "form-control",
    placeholder: "Confirm your new password",
    value: confirmPassword,
    onChange: function onChange(e) {
      return setConfirmPassword(e.target.value);
    },
    required: true
  }), errors.confirmPassword && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-danger mt-2"
  }, errors.confirmPassword)), errors.form && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-danger mt-3"
  }, errors.form), message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-success mt-3"
  }, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btn btn-primary w-100"
  }, "Reset Password"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordResetForm);

/***/ }),

/***/ "./jsx/app.jsx":
/*!*********************!*\
  !*** ./jsx/app.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _NavPage_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavPage.jsx */ "./jsx/NavPage.jsx");
/* harmony import */ var _Footer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.jsx */ "./jsx/Footer.jsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Register_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Register.jsx */ "./jsx/Register.jsx");
/* harmony import */ var _Products_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Products.jsx */ "./jsx/Products.jsx");
/* harmony import */ var _Cart_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Cart.jsx */ "./jsx/Cart.jsx");
/* harmony import */ var _Login_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Login.jsx */ "./jsx/Login.jsx");
/* harmony import */ var _ProductDetails_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProductDetails.jsx */ "./jsx/ProductDetails.jsx");
/* harmony import */ var _Profile_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Profile.jsx */ "./jsx/Profile.jsx");
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/styles.css */ "./public/styles.css");
/* harmony import */ var _HomePage_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./HomePage.jsx */ "./jsx/HomePage.jsx");
/* harmony import */ var _logout_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logout.jsx */ "./jsx/logout.jsx");
/* harmony import */ var _Reset_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Reset.jsx */ "./jsx/Reset.jsx");
/* harmony import */ var _ForgotPassword_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ForgotPassword.jsx */ "./jsx/ForgotPassword.jsx");



















// Main application component
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-column min-vh-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavPage_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "PrimeMart"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "flex-grow-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HomePage_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Register_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/cart",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Cart_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductDetails_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Profile_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/logout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_logout_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/forgot-password",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ForgotPassword_jsx__WEBPACK_IMPORTED_MODULE_16__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/reset-password",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Reset_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};

// Root container element
var container = document.getElementById("contents");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ "./jsx/logout.jsx":
/*!************************!*\
  !*** ./jsx/logout.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");


var Logout = function Logout() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var handleLogout = function handleLogout() {
    // Remove the token or user data from localStorage
    localStorage.removeItem("isLoggedIn");

    // Redirect to the login page
    navigate("/login");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleLogout,
    className: "btn btn-danger"
  }, "Logout"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/styles.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General Container Styles */
.register-container,
.login-container,
.forgot-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f0f0f0;
}

/* Form Styles */
.register-form,
.login-form,
.forgot-password-form {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.register-form h2,
.login-form h2,
.forgot-password-form h2 {
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
  color: #333;
}

/* Input Fields */
.register-form input,
.login-form input,
.forgot-password-form input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

/* Buttons */
.register-form button,
.login-form button,
.forgot-password-form button {
  width: 100%;
  padding: 10px;
  background-color: #00bfa6;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}

.register-form button:hover,
.login-form button:hover,
.forgot-password-form button:hover {
  background-color: #019f87;
}

/* Links */
.login-link,
.register-link,
.forgot-password-link {
  margin-top: 20px;
}

.login-link a,
.register-link a,
.reset-link a {
  color: #007bff;
  text-decoration: none;
}

.login-link a:hover,
.register-link a:hover,
.forgot-password-link a:hover,
.reset-link a:hover {
  text-decoration: underline;
}

/* Error and Success Messages */
.error {
  color: #ff3333;
  /* Consolidated error styles */
  font-size: 14px;
  margin: -10px 0 10px;
  /* Shortened margin definition */
}

.success {
  color: #28a745;
  /* Consolidated success styles */
  font-size: 14px;
  margin: -10px 0 10px;
  /* Shortened margin definition */
}

/* Navbar Styles */
.custom-navbar {
  background-color: rgb(2, 115, 159);
  padding: 1.5rem;
  /* Consistent padding */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.custom-navbar .navbar-brand {
  font-size: 36px;
  color: white;
  font-weight: bold;
}

.custom-navbar .navbar-nav .nav-link {
  color: white;
  font-size: 24px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.custom-navbar .navbar-nav .nav-link:hover,
.custom-navbar .navbar-nav .nav-link.active {
  color: #31c27a;
  font-weight: bold;
}

/* Footer Styles */
.custom-footer {
  background-color: rgb(2, 115, 159);
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  font-size: 18px;
}

/* Account Settings Layout */
.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
}

.profile-section {
  display: flex;
  flex-direction: column;
  /* Stack children vertically */
  align-items: center;
  /* Center children horizontally */
  text-align: center;
  /* Center text inside */
}

.profile-img {
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.profile-img:hover {
  transform: scale(1.05);
}

/* Hide the default file input */
.custom-file-input {
  visibility: hidden;
  width: 0;
  height: 0;
  position: absolute;
}

/* Style the label to look like a button */
.custom-file-label {
  display: inline-block;
  padding: 8px 15px;
  background-color: #0f8d1e;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease;
}

.custom-file-label:hover {
  background-color: #0056b3;
}

/* Style the container where selected file name will appear */
.file-name {
  margin-left: 15px;
  font-size: 1rem;
  color: #333;
}


/* Button Outline Styles */
.btn-outline-success {
  color: #00bfa6;
  border-color: #00bfa6;
  margin-top: 10px;
  /* Add some space between the image and the button */
}

/* Button hover effect */
.btn-outline-success:hover {
  background-color: #00bfa6;
  /* Change background color on hover */
  color: white;
  /* Change text color on hover */
}


/* Section Titles */
.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

/* Label Styles */
label {
  font-weight: 600;
  font-size: 1rem;
  color: #555;
  margin-bottom: 8px;
  display: block;
}

/* Input and Select Styles */
input,
select {
  height: 45px;
  font-size: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #ced4da;
  padding: 0 15px;
  transition: all 0.2s ease-in-out;
}

input:focus,
select:focus {
  border-color: #00bfa6;
  box-shadow: 0 0 0 2px rgba(0, 191, 166, 0.2);
}

/* Button General Styles */
button {
  font-size: 1.2rem;
  padding: 12px 25px;
  border-radius: 5px;
  background-color: #00bfa6;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #019f87;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

/* Section Styles */
.section {
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
}

hr {
  margin: 50px 0;
  border: 1px solid #ddd;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-img {
    width: 120px;
    height: 120px;
    margin-bottom: 15px;
  }

  .btn-outline-success,
  .btn-primary,
  .btn-success {
    width: 100%;
    margin-top: 15px;
  }

  .col-md-6,
  .col-md-4 {
    width: 100%;
    margin-bottom: 20px;
  }

  input,
  select {
    width: 100%;
  }
}

/* Animations for Interactive Feel */
@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

button:hover,
.profile-img:hover {
  animation: pulse 0.3s ease-in-out ;
}`, "",{"version":3,"sources":["webpack://./public/styles.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;;;EAGE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA,gBAAgB;AAChB;;;EAGE,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,0CAA0C;EAC1C,gBAAgB;EAChB,WAAW;EACX,kBAAkB;AACpB;;AAEA;;;EAGE,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;;AAEA,iBAAiB;AACjB;;;EAGE,WAAW;EACX,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;AACjB;;AAEA,YAAY;AACZ;;;EAGE,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;;EAGE,yBAAyB;AAC3B;;AAEA,UAAU;AACV;;;EAGE,gBAAgB;AAClB;;AAEA;;;EAGE,cAAc;EACd,qBAAqB;AACvB;;AAEA;;;;EAIE,0BAA0B;AAC5B;;AAEA,+BAA+B;AAC/B;EACE,cAAc;EACd,8BAA8B;EAC9B,eAAe;EACf,oBAAoB;EACpB,gCAAgC;AAClC;;AAEA;EACE,cAAc;EACd,gCAAgC;EAChC,eAAe;EACf,oBAAoB;EACpB,gCAAgC;AAClC;;AAEA,kBAAkB;AAClB;EACE,kCAAkC;EAClC,eAAe;EACf,uBAAuB;EACvB,yCAAyC;AAC3C;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;;EAEE,cAAc;EACd,iBAAiB;AACnB;;AAEA,kBAAkB;AAClB;EACE,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA,4BAA4B;AAC5B;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,iCAAiC;EACjC,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,0CAA0C;EAC1C,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;AACxB;;AAEA,gCAAgC;AAChC;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,kBAAkB;AACpB;;AAEA,0CAA0C;AAC1C;EACE,qBAAqB;EACrB,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,6DAA6D;AAC7D;EACE,iBAAiB;EACjB,eAAe;EACf,WAAW;AACb;;;AAGA,0BAA0B;AAC1B;EACE,cAAc;EACd,qBAAqB;EACrB,gBAAgB;EAChB,oDAAoD;AACtD;;AAEA,wBAAwB;AACxB;EACE,yBAAyB;EACzB,qCAAqC;EACrC,YAAY;EACZ,+BAA+B;AACjC;;;AAGA,mBAAmB;AACnB;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;AACb;;AAEA,iBAAiB;AACjB;EACE,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,cAAc;AAChB;;AAEA,4BAA4B;AAC5B;;EAEE,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,yBAAyB;EACzB,eAAe;EACf,gCAAgC;AAClC;;AAEA;;EAEE,qBAAqB;EACrB,4CAA4C;AAC9C;;AAEA,0BAA0B;AAC1B;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,sCAAsC;EACtC,yCAAyC;AAC3C;;AAEA;EACE,yBAAyB;EACzB,0CAA0C;AAC5C;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,0CAA0C;EAC1C,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,sBAAsB;AACxB;;AAEA,sBAAsB;AACtB;EACE;IACE,YAAY;IACZ,aAAa;IACb,mBAAmB;EACrB;;EAEA;;;IAGE,WAAW;IACX,gBAAgB;EAClB;;EAEA;;IAEE,WAAW;IACX,mBAAmB;EACrB;;EAEA;;IAEE,WAAW;EACb;AACF;;AAEA,oCAAoC;AACpC;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;;EAEE,kCAAkC;AACpC","sourcesContent":["/* General Container Styles */\r\n.register-container,\r\n.login-container,\r\n.forgot-password-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 80vh;\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n/* Form Styles */\r\n.register-form,\r\n.login-form,\r\n.forgot-password-form {\r\n  background-color: white;\r\n  padding: 30px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\r\n  max-width: 400px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.register-form h2,\r\n.login-form h2,\r\n.forgot-password-form h2 {\r\n  margin-bottom: 20px;\r\n  font-family: Arial, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n/* Input Fields */\r\n.register-form input,\r\n.login-form input,\r\n.forgot-password-form input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n}\r\n\r\n/* Buttons */\r\n.register-form button,\r\n.login-form button,\r\n.forgot-password-form button {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background-color: #00bfa6;\r\n  border: none;\r\n  color: white;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.register-form button:hover,\r\n.login-form button:hover,\r\n.forgot-password-form button:hover {\r\n  background-color: #019f87;\r\n}\r\n\r\n/* Links */\r\n.login-link,\r\n.register-link,\r\n.forgot-password-link {\r\n  margin-top: 20px;\r\n}\r\n\r\n.login-link a,\r\n.register-link a,\r\n.reset-link a {\r\n  color: #007bff;\r\n  text-decoration: none;\r\n}\r\n\r\n.login-link a:hover,\r\n.register-link a:hover,\r\n.forgot-password-link a:hover,\r\n.reset-link a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* Error and Success Messages */\r\n.error {\r\n  color: #ff3333;\r\n  /* Consolidated error styles */\r\n  font-size: 14px;\r\n  margin: -10px 0 10px;\r\n  /* Shortened margin definition */\r\n}\r\n\r\n.success {\r\n  color: #28a745;\r\n  /* Consolidated success styles */\r\n  font-size: 14px;\r\n  margin: -10px 0 10px;\r\n  /* Shortened margin definition */\r\n}\r\n\r\n/* Navbar Styles */\r\n.custom-navbar {\r\n  background-color: rgb(2, 115, 159);\r\n  padding: 1.5rem;\r\n  /* Consistent padding */\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.custom-navbar .navbar-brand {\r\n  font-size: 36px;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.custom-navbar .navbar-nav .nav-link {\r\n  color: white;\r\n  font-size: 24px;\r\n  font-weight: 500;\r\n  transition: color 0.3s ease;\r\n}\r\n\r\n.custom-navbar .navbar-nav .nav-link:hover,\r\n.custom-navbar .navbar-nav .nav-link.active {\r\n  color: #31c27a;\r\n  font-weight: bold;\r\n}\r\n\r\n/* Footer Styles */\r\n.custom-footer {\r\n  background-color: rgb(2, 115, 159);\r\n  color: white;\r\n  text-align: center;\r\n  padding: 1.5rem 0;\r\n  font-size: 18px;\r\n}\r\n\r\n/* Account Settings Layout */\r\n.container {\r\n  max-width: 1600px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n}\r\n\r\n.profile-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* Stack children vertically */\r\n  align-items: center;\r\n  /* Center children horizontally */\r\n  text-align: center;\r\n  /* Center text inside */\r\n}\r\n\r\n.profile-img {\r\n  width: 250px;\r\n  height: 250px;\r\n  margin-bottom: 20px;\r\n  border-radius: 50%;\r\n  object-fit: cover;\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.profile-img:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n/* Hide the default file input */\r\n.custom-file-input {\r\n  visibility: hidden;\r\n  width: 0;\r\n  height: 0;\r\n  position: absolute;\r\n}\r\n\r\n/* Style the label to look like a button */\r\n.custom-file-label {\r\n  display: inline-block;\r\n  padding: 8px 15px;\r\n  background-color: #0f8d1e;\r\n  color: white;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.custom-file-label:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n/* Style the container where selected file name will appear */\r\n.file-name {\r\n  margin-left: 15px;\r\n  font-size: 1rem;\r\n  color: #333;\r\n}\r\n\r\n\r\n/* Button Outline Styles */\r\n.btn-outline-success {\r\n  color: #00bfa6;\r\n  border-color: #00bfa6;\r\n  margin-top: 10px;\r\n  /* Add some space between the image and the button */\r\n}\r\n\r\n/* Button hover effect */\r\n.btn-outline-success:hover {\r\n  background-color: #00bfa6;\r\n  /* Change background color on hover */\r\n  color: white;\r\n  /* Change text color on hover */\r\n}\r\n\r\n\r\n/* Section Titles */\r\n.section-title {\r\n  font-size: 1.8rem;\r\n  font-weight: 600;\r\n  margin-bottom: 20px;\r\n  color: #333;\r\n}\r\n\r\n/* Label Styles */\r\nlabel {\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  color: #555;\r\n  margin-bottom: 8px;\r\n  display: block;\r\n}\r\n\r\n/* Input and Select Styles */\r\ninput,\r\nselect {\r\n  height: 45px;\r\n  font-size: 1rem;\r\n  border-radius: 0.375rem;\r\n  border: 1px solid #ced4da;\r\n  padding: 0 15px;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\ninput:focus,\r\nselect:focus {\r\n  border-color: #00bfa6;\r\n  box-shadow: 0 0 0 2px rgba(0, 191, 166, 0.2);\r\n}\r\n\r\n/* Button General Styles */\r\nbutton {\r\n  font-size: 1.2rem;\r\n  padding: 12px 25px;\r\n  border-radius: 5px;\r\n  background-color: #00bfa6;\r\n  color: white;\r\n  border: none;\r\n  transition: background-color 0.3s ease;\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #019f87;\r\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n/* Section Styles */\r\n.section {\r\n  padding: 30px;\r\n  background: white;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\r\n  margin-bottom: 50px;\r\n}\r\n\r\nhr {\r\n  margin: 50px 0;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 768px) {\r\n  .profile-img {\r\n    width: 120px;\r\n    height: 120px;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .btn-outline-success,\r\n  .btn-primary,\r\n  .btn-success {\r\n    width: 100%;\r\n    margin-top: 15px;\r\n  }\r\n\r\n  .col-md-6,\r\n  .col-md-4 {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  input,\r\n  select {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/* Animations for Interactive Feel */\r\n@keyframes pulse {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.05);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\nbutton:hover,\r\n.profile-img:hover {\r\n  animation: pulse 0.3s ease-in-out ;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/styles.css":
/*!***************************!*\
  !*** ./public/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./public/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunks24prog8731"] = self["webpackChunks24prog8731"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./jsx/app.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map