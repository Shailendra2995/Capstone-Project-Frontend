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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
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
      setError('Please enter a valid email address.');
      return;
    }
    var data = new FormData();
    data.append('email', email);
    data.append('action', 'SEND_EMAIL_LINK');
    fetch('http://localhost/Capstone-Project-Backend/public/reset_password.php', {
      method: 'POST',
      body: data // Set the body to FormData
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Bad Request');
      }
      return response.json();
    }).then(function (data) {
      if (data.status == 0) {
        setMessage('Password reset link has been sent to your email.');
        setError('');
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
        setMessage('');
      }
    }).catch(function (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
      setMessage('');
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container d-flex justify-content-center align-items-center vh-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card shadow-sm p-4",
    style: {
      maxWidth: '400px',
      width: '100%'
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

var HomePage = function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Welcome to PrimeMart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This is the homepage. You can navigate to different pages using the links above."));
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
      email: '',
      password: ''
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
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      var data = new FormData();
      data.append('email', formData.email);
      data.append('password', formData.password);
      var requestOptions = {
        method: 'POST',
        body: data
      };
      fetch('http://localhost/Capstone-Project-Backend/public/login.php', requestOptions).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.status == 0) {
          console.log('Login successful', data);

          // Save token or user data to localStorage/sessionStorage
          localStorage.setItem('token', data.token); //  'data.token' is returned

          navigate('/');
        } else {
          setErrors({
            login: data.message || 'Login failed'
          });
        }
      }).catch(function (error) {
        console.error('Error during login:', error);
        setErrors({
          login: 'An error occurred. Please try again.'
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
    to: "/forgotpassword"
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
  var title = _ref.title,
    isLoggedIn = _ref.isLoggedIn;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
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
    className: "nav-link ".concat(location.pathname === '/' ? 'active' : ''),
    to: "/",
    "aria-current": location.pathname === '/' ? 'page' : undefined
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === '/products' ? 'active' : ''),
    to: "/products",
    "aria-current": location.pathname === '/products' ? 'page' : undefined
  }, "Products")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === '/cart' ? 'active' : ''),
    to: "/cart",
    "aria-current": location.pathname === '/cart' ? 'page' : undefined
  }, "Cart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === '/profile' ? 'active' : ''),
    to: "/profile",
    "aria-current": location.pathname === '/profile' ? 'page' : undefined
  }, "Profile")), !isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === '/register' ? 'active' : ''),
    to: "/register",
    "aria-current": location.pathname === '/register' ? 'page' : undefined
  }, "Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === '/login' ? 'active' : ''),
    to: "/login",
    "aria-current": location.pathname === '/login' ? 'page' : undefined
  }, "Login"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link ".concat(location.pathname === '/logout' ? 'active' : ''),
    to: "/logout",
    "aria-current": location.pathname === '/logout' ? 'page' : undefined
  }, "Logout")))));
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

var Profile = function Profile() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Profile"));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
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


var Register = function Register() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
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

  // Handling data changes
  var handleChange = function handleChange(e) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  // Form Validation
  var validateForm = function validateForm() {
    var newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      data.append('email', formData.email);
      data.append('password', formData.password);
      var requestOptions = {
        method: 'POST',
        body: data
      };
      fetch('http://localhost/Capstone-Project-Backend/public/register.php', requestOptions).then(function (response) {
        return response.json();
      }).then(function (data) {
        setPostId(data.id);
        console.log('Registration successful:', data);
      }).catch(function (error) {
        console.error('Error during registration:', error);
      });
    } else {
      setErrors(validationErrors);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "register-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "register-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
  }, "Already have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
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
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/esm/index.mjs");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var PasswordResetForm = function PasswordResetForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    password = _useState2[0],
    setPassword = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    confirmPassword = _useState4[0],
    setConfirmPassword = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    errors = _useState6[0],
    setErrors = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    message = _useState8[0],
    setMessage = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    email = _useState10[0],
    setEmail = _useState10[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0]; // Move this to the top level
  var sessionId = searchParams.get("PHPSESSID");
  var token = searchParams.get("token");
  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_4__["default"]();
  cookies.set('PHPSESSID', sessionId, {
    path: '/'
  });
  var validateForm = function validateForm() {
    var newErrors = {};
    if (!password) newErrors.password = 'Password is required';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      var data = new FormData();
      data.append('email', email);
      data.append('new_password', password);
      data.append('token', token);
      data.append('action', 'RESET');
      fetch('http://localhost/Capstone-Project-Backend/public/reset_password.php', {
        method: 'POST',
        body: data,
        credentials: 'include'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          setMessage('Password has been successfully reset.');
          setTimeout(function () {
            return navigate('/login');
          }, 100);
        } else {
          setErrors({
            form: data.message || 'Something went wrong. Please try again.'
          });
        }
      }).catch(function (error) {
        console.error('Error:', error);
        setErrors({
          form: 'An error occurred. Please try again.'
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
      maxWidth: '400px',
      width: '100%'
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
    path: "/forgotpassword",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ForgotPassword_jsx__WEBPACK_IMPORTED_MODULE_16__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/resetpassword",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Reset_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};

// Root container element
var container = document.getElementById('contents');
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");


var Logout = function Logout() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var handleLogout = function handleLogout() {
    // Remove the token or user data from localStorage
    localStorage.removeItem('token');

    // Redirect to the login page
    navigate('/login');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-center mt-4"
  }, /*#__PURE__*/React.createElement("button", {
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
___CSS_LOADER_EXPORT___.push([module.id, `.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.register-form {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.register-form h2 {
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
  color: #333;
}

.register-form input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.register-form button {
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

.register-form button:hover {
  background-color: #019f87;
}

.login-link {
  margin-top: 20px;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}

.custom-navbar {
  background-color: rgb(2, 115, 159);
  padding: 1rem 2rem;
}

.custom-navbar .navbar-nav {
  margin-left: 0;
}

.custom-navbar .navbar-brand {
  margin-left: 0;
  font-size: 32px;
}

.custom-navbar .navbar-toggler {
  border: none;
}

.nav-link {
  padding: 0.75rem 1.5rem;
  color: white;
  font-size: 24px;
}

.nav-link.active {
  font-weight: bold;
  color: rgb(49, 155, 91);
}

.custom-footer {
  background-color: rgb(2, 115, 159);
  color: white;
  text-align: center;
  padding: 1rem 0;
  font-size: 18px;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
}

/*Login*/
.login-container,
.forgot-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f0f0f0;
}

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

.login-form h2,
.forgot-password-form h2 {
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
  color: #333;
}

.login-form input,
.forgot-password-form input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

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

.login-form button:hover,
.forgot-password-form button:hover {
  background-color: #019f87;
}

.register-link,
.forgot-password-link {
  margin-top: 20px;
}

.register-link a {
  color: #1463b8;
  text-decoration: none;
}

.reset-link a {
  color: #ff0000;
  text-decoration: none;
}

.arrange a:hover,
.forgot-password-link a:hover {
  text-decoration: underline;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
}

.success {
  color: green;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
}

.arrange {
  margin-top: 10px;
  padding: 10px;
}`, "",{"version":3,"sources":["webpack://./public/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,0CAA0C;EAC1C,gBAAgB;EAChB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA,QAAQ;AACR;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;;EAEE,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,0CAA0C;EAC1C,gBAAgB;EAChB,WAAW;EACX,kBAAkB;AACpB;;AAEA;;EAEE,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;;EAEE,WAAW;EACX,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf","sourcesContent":[".register-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 80vh;\r\n}\r\n\r\n.register-form {\r\n  background-color: white;\r\n  padding: 30px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\r\n  max-width: 400px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.register-form h2 {\r\n  margin-bottom: 20px;\r\n  font-family: Arial, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n.register-form input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n}\r\n\r\n.register-form button {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background-color: #00bfa6;\r\n  border: none;\r\n  color: white;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.register-form button:hover {\r\n  background-color: #019f87;\r\n}\r\n\r\n.login-link {\r\n  margin-top: 20px;\r\n}\r\n\r\n.login-link a {\r\n  color: #007bff;\r\n  text-decoration: none;\r\n}\r\n\r\n.login-link a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.custom-navbar {\r\n  background-color: rgb(2, 115, 159);\r\n  padding: 1rem 2rem;\r\n}\r\n\r\n.custom-navbar .navbar-nav {\r\n  margin-left: 0;\r\n}\r\n\r\n.custom-navbar .navbar-brand {\r\n  margin-left: 0;\r\n  font-size: 32px;\r\n}\r\n\r\n.custom-navbar .navbar-toggler {\r\n  border: none;\r\n}\r\n\r\n.nav-link {\r\n  padding: 0.75rem 1.5rem;\r\n  color: white;\r\n  font-size: 24px;\r\n}\r\n\r\n.nav-link.active {\r\n  font-weight: bold;\r\n  color: rgb(49, 155, 91);\r\n}\r\n\r\n.custom-footer {\r\n  background-color: rgb(2, 115, 159);\r\n  color: white;\r\n  text-align: center;\r\n  padding: 1rem 0;\r\n  font-size: 18px;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n  font-size: 14px;\r\n  margin-top: -10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*Login*/\r\n.login-container,\r\n.forgot-password-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 80vh;\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n.login-form,\r\n.forgot-password-form {\r\n  background-color: white;\r\n  padding: 30px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\r\n  max-width: 400px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.login-form h2,\r\n.forgot-password-form h2 {\r\n  margin-bottom: 20px;\r\n  font-family: Arial, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n.login-form input,\r\n.forgot-password-form input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n}\r\n\r\n.login-form button,\r\n.forgot-password-form button {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background-color: #00bfa6;\r\n  border: none;\r\n  color: white;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.login-form button:hover,\r\n.forgot-password-form button:hover {\r\n  background-color: #019f87;\r\n}\r\n\r\n.register-link,\r\n.forgot-password-link {\r\n  margin-top: 20px;\r\n}\r\n\r\n.register-link a {\r\n  color: #1463b8;\r\n  text-decoration: none;\r\n}\r\n\r\n.reset-link a {\r\n  color: #ff0000;\r\n  text-decoration: none;\r\n}\r\n\r\n.arrange a:hover,\r\n.forgot-password-link a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n  font-size: 14px;\r\n  margin-top: -10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.success {\r\n  color: green;\r\n  font-size: 14px;\r\n  margin-top: -10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.arrange {\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n}"],"sourceRoot":""}]);
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