/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./jsx/Admin.jsx":
/*!***********************!*\
  !*** ./jsx/Admin.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var Admin = function Admin() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      totalUsers: 0,
      totalCategories: 0,
      totalProducts: 0,
      totalOrders: 0,
      recentOrders: [],
      recentUsers: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    stats = _useState2[0],
    setStats = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/dashboard/summary', {
                headers: {
                  // Add authorization header if needed
                  'Authorization': "Bearer ".concat(localStorage.getItem('token'))
                }
              });
            case 3:
              response = _context.sent;
              data = response.data.data;
              setStats(function (prevStats) {
                return _objectSpread(_objectSpread({}, prevStats), {}, {
                  totalUsers: data.users_count,
                  totalCategories: data.categories_count,
                  totalProducts: data.products_count,
                  totalOrders: data.orders_count
                });
              });
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error("Error fetching data: ", _context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8]]);
      }));
      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var StatCard = function StatCard(_ref2) {
    var icon = _ref2.icon,
      title = _ref2.title,
      value = _ref2.value,
      color = _ref2.color;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "mb-4 shadow-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      xs: 3,
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(icon, {
      size: 48,
      color: color
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      xs: 9,
      className: "text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "h5 mb-0 font-weight-bold text-gray-800"
    }, value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-muted"
    }, title)))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ms-sm-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "h2"
  }, "Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StatCard, {
    icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUsers,
    title: "Total Users",
    value: stats.totalUsers,
    color: "#007bff"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StatCard, {
    icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTag,
    title: "Total Categories",
    value: stats.totalCategories,
    color: "#28a745"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StatCard, {
    icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaBox,
    title: "Total Products",
    value: stats.totalProducts,
    color: "#ffc107"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StatCard, {
    icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaShoppingCart,
    title: "Total Orders",
    value: stats.totalOrders,
    color: "#dc3545"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
    as: "h5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaClipboardList, {
    className: "me-2"
  }), " Recent Orders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    striped: true,
    bordered: true,
    hover: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Order ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Status"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, stats.recentOrders.map(function (order) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: order.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, order.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, order.customer_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "$", order.total.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, order.status));
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
    as: "h5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUsers, {
    className: "me-2"
  }), " Recent Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    striped: true,
    bordered: true,
    hover: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "User ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Joined"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, stats.recentUsers.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: user.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, user.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, user.created_at));
  }))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);

/***/ }),

/***/ "./jsx/AdminLayout.jsx":
/*!*****************************!*\
  !*** ./jsx/AdminLayout.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ListGroup.js");




var AdminLayout = function AdminLayout() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 3,
    lg: 2,
    className: "bg-light sidebar",
    style: {
      position: 'fixed',
      height: '100vh',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "position-sticky pt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "h6 px-3 py-4 mb-0 border-bottom"
  }, "Admin Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "flush"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
    to: "/admin",
    action: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChartLine, {
    className: "me-2"
  }), " Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
    to: "/admin/products",
    action: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaBox, {
    className: "me-2"
  }), " Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
    to: "/admin/categories",
    action: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTag, {
    className: "me-2"
  }), " Categories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
    to: "/admin/users",
    action: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUsers, {
    className: "me-2"
  }), " Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
    to: "/admin/orders",
    action: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaShoppingCart, {
    className: "me-2"
  }), " Orders")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 9,
    lg: 10,
    className: "ms-sm-auto px-md-4",
    style: {
      marginLeft: '16.66%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Outlet, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLayout);

/***/ }),

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




 // Use FaArrowLeft for backward arrow

// Initial state for the cart
var initialState = {
  cartItems: [],
  total: 0,
  tax: 0,
  finalTotal: 0,
  loading: true,
  error: null,
  coupon: "",
  discount: 0,
  showModal: false,
  itemToRemove: null
};

// Cart reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case "SET_CART":
      return _objectSpread(_objectSpread({}, state), {}, {
        cartItems: action.payload,
        loading: false
      });
    case "SET_LOADING":
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.payload
      });
    case "SET_ERROR":
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload,
        loading: false
      });
    case "SET_TOTAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        total: action.payload
      });
    case "SET_TAX":
      return _objectSpread(_objectSpread({}, state), {}, {
        tax: action.payload
      });
    case "SET_FINAL_TOTAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        finalTotal: action.payload
      });
    case "SET_COUPON":
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: action.payload
      });
    case "SET_DISCOUNT":
      return _objectSpread(_objectSpread({}, state), {}, {
        discount: action.payload
      });
    case "SHOW_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        showModal: true,
        itemToRemove: action.payload
      });
    case "HIDE_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        showModal: false,
        itemToRemove: null
      });
    case "REMOVE_ITEM":
      return _objectSpread(_objectSpread({}, state), {}, {
        cartItems: state.cartItems.filter(function (item) {
          return item.id !== action.payload;
        })
      });
    default:
      return state;
  }
}
function Cart() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(cartReducer, initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var cartItems = state.cartItems,
    total = state.total,
    tax = state.tax,
    finalTotal = state.finalTotal,
    loading = state.loading,
    error = state.error,
    coupon = state.coupon,
    discount = state.discount,
    showModal = state.showModal,
    itemToRemove = state.itemToRemove;
  var TAX_RATE = 0.13; // 13% tax

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchCart();
  }, []);
  var fetchCart = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var token, _response$data, response, items;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            token = localStorage.getItem("token");
            dispatch({
              type: "SET_LOADING",
              payload: true
            });
            dispatch({
              type: "SET_ERROR",
              payload: null
            });
            _context.prev = 3;
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("http://localhost:8000/api/cart", {
              headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json"
              }
            });
          case 6:
            response = _context.sent;
            items = ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) || [];
            dispatch({
              type: "SET_CART",
              payload: items
            });
            calculateTotal(items);
            _context.next = 16;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            dispatch({
              type: "SET_ERROR",
              payload: "Error fetching cart items. Please try again."
            });
            console.error("Error fetching cart items:", _context.t0);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 12]]);
    }));
    return function fetchCart() {
      return _ref.apply(this, arguments);
    };
  }();
  var calculateTotal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (items) {
    var subtotal = items.reduce(function (acc, item) {
      return acc + (Number(item.price) * item.quantity || 0);
    }, 0);
    dispatch({
      type: "SET_TOTAL",
      payload: subtotal
    });
    var taxAmount = subtotal * TAX_RATE;
    dispatch({
      type: "SET_TAX",
      payload: taxAmount
    });
    dispatch({
      type: "SET_FINAL_TOTAL",
      payload: subtotal + taxAmount - discount
    });
  }, [discount]);
  var updateQuantity = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id, quantity) {
      var token;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            token = localStorage.getItem("token");
            _context2.prev = 1;
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("http://localhost:8000/api/cart/".concat(id), {
              quantity: quantity
            }, {
              headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json"
              }
            });
          case 4:
            fetchCart();
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            console.error("Error updating quantity:", _context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 7]]);
    }));
    return function updateQuantity(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var applyCoupon = function applyCoupon(e) {
    e.preventDefault();
    if (coupon === "SAVE10") {
      dispatch({
        type: "SET_DISCOUNT",
        payload: 10
      });
    } else {
      alert("Invalid coupon code");
      dispatch({
        type: "SET_DISCOUNT",
        payload: 0
      });
    }
    dispatch({
      type: "SET_COUPON",
      payload: ""
    });
  };
  var handleRemoveItem = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var token;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            token = localStorage.getItem("token");
            if (!itemToRemove) {
              _context3.next = 12;
              break;
            }
            _context3.prev = 2;
            _context3.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_1__["default"].delete("http://localhost:8000/api/cart/".concat(itemToRemove.id), {
              headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json"
              }
            });
          case 5:
            dispatch({
              type: "REMOVE_ITEM",
              payload: itemToRemove.id
            });
            dispatch({
              type: "HIDE_MODAL"
            });
            _context3.next = 12;
            break;
          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            console.error("Error removing item:", _context3.t0);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 9]]);
    }));
    return function handleRemoveItem() {
      return _ref3.apply(this, arguments);
    };
  }();
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "my-5 text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      animation: "border",
      variant: "primary"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "mt-3"
    }, "Loading your cart..."));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center mb-4"
  }, "Shopping Cart"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "danger",
    className: "text-center"
  }, error), cartItems.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Your cart is empty."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/",
    variant: "primary",
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaArrowLeft, null), " Continue Shopping")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    md: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    responsive: "sm",
    bordered: true,
    hover: true,
    className: "bg-white shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
    className: "table-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, cartItems.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "http://localhost:8000/storage/products/".concat(item.product.image_url),
      alt: item.product.name,
      className: "me-3",
      style: {
        width: "80px",
        height: "80px",
        objectFit: "contain",
        borderRadius: "5px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, item.product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontSize: "12px",
        color: "#888"
      }
    }, item.product.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "$", Number(item.price).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "outline-secondary",
      size: "sm",
      onClick: function onClick() {
        return updateQuantity(item.id, item.quantity - 1);
      },
      disabled: item.quantity === 1,
      className: "me-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaMinus, null)), item.quantity, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "outline-secondary",
      size: "sm",
      onClick: function onClick() {
        return updateQuantity(item.id, item.quantity + 1);
      },
      className: "ms-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaPlus, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "$", (Number(item.price) * item.quantity).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "danger",
      size: "sm",
      onClick: function onClick() {
        return dispatch({
          type: "SHOW_MODAL",
          payload: item
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTrash, null))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/",
    variant: "outline-primary",
    className: "w-100 mb-3 d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaArrowLeft, {
    className: "me-2"
  }), " Continue Shopping"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "shadow-lg rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "summary-title text-center mb-4"
  }, "Order Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-muted"
  }, "Subtotal:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "subtotal-price"
  }, "$", total.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-muted"
  }, "Tax (13%):"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tax"
  }, "$", tax.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onSubmit: applyCoupon,
    className: "my-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Control, {
    type: "text",
    placeholder: "Enter coupon code",
    value: coupon,
    onChange: function onChange(e) {
      return dispatch({
        type: "SET_COUPON",
        payload: e.target.value
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit",
    variant: "outline-primary",
    className: "w-100"
  }, "Apply Coupon")), discount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between text-success mt-2 savings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Discount:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "-$", discount.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between estimated-total"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Total:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    className: "total-amount"
  }, "$", finalTotal.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/checkout",
    variant: "success",
    className: "mt-3 w-100 d-flex align-items-center justify-content-center"
  }, "Go to Checkout ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaArrowRight, {
    className: "ms-2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "small-note text-muted text-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaReceipt, {
    className: "me-2"
  }), " All fees and taxes are estimates. Final charges will be itemized on your receipt."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    show: showModal,
    onHide: function onHide() {
      return dispatch({
        type: "HIDE_MODAL"
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Title, null, "Confirm Removal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Body, null, "Are you sure you want to remove this item from your cart?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "secondary",
    onClick: function onClick() {
      return dispatch({
        type: "HIDE_MODAL"
      });
    }
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "danger",
    onClick: handleRemoveItem
  }, "Remove Item"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ "./jsx/CategoriesPage.jsx":
/*!********************************!*\
  !*** ./jsx/CategoriesPage.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Snackbar/Snackbar.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Delete.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var CategoriesPage = function CategoriesPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    editingCategory = _useState6[0],
    setEditingCategory = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: '',
      icon: ''
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    formData = _useState8[0],
    setFormData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    snackbarOpen = _useState10[0],
    setSnackbarOpen = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    snackbarMessage = _useState12[0],
    setSnackbarMessage = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState14 = _slicedToArray(_useState13, 2),
    isLoading = _useState14[0],
    setIsLoading = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Set the Authorization header with the token from local storage
    var token = localStorage.getItem('token');
    if (token) {
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers.common['Authorization'] = "Bearer ".concat(token);
    }
    fetchCategories();
  }, []);
  var fetchCategories = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setIsLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('http://localhost:8000/api/category');
          case 4:
            response = _context.sent;
            // Adjust base URL if needed
            setCategories(response.data.data || []);
            _context.next = 12;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error('Error fetching categories:', _context.t0);
            showSnackbar('Error fetching categories');
          case 12:
            _context.prev = 12;
            setIsLoading(false);
            return _context.finish(12);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8, 12, 15]]);
    }));
    return function fetchCategories() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleOpen = function handleOpen() {
    var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    setEditingCategory(category);
    setFormData(category || {
      name: '',
      icon: ''
    });
    setOpen(true);
  };
  var handleClose = function handleClose() {
    setOpen(false);
    setEditingCategory(null);
    setFormData({
      name: '',
      icon: ''
    });
  };
  var handleInputChange = function handleInputChange(e) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var _error$response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            _context2.prev = 1;
            if (!editingCategory) {
              _context2.next = 8;
              break;
            }
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("http://localhost:8000/api/category/".concat(editingCategory.id), formData);
          case 5:
            // Update category
            showSnackbar('Category updated successfully');
            _context2.next = 11;
            break;
          case 8:
            _context2.next = 10;
            return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('http://localhost:8000/api/category', formData);
          case 10:
            // Add new category
            showSnackbar('Category added successfully');
          case 11:
            fetchCategories();
            handleClose();
            _context2.next = 19;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](1);
            console.error('Error saving category:', _context2.t0.response || _context2.t0);
            showSnackbar(((_error$response = _context2.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || 'Error saving category');
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 15]]);
    }));
    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
      var _error$response2;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!window.confirm('Are you sure you want to delete this category?')) {
              _context3.next = 12;
              break;
            }
            _context3.prev = 1;
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1__["default"].delete("http://localhost:8000/api/category/".concat(id));
          case 4:
            // Delete category
            fetchCategories();
            showSnackbar('Category deleted successfully');
            _context3.next = 12;
            break;
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.error('Error deleting category:', _context3.t0);
            showSnackbar(((_error$response2 = _context3.t0.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || 'Error deleting category');
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 8]]);
    }));
    return function handleDelete(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var showSnackbar = function showSnackbar(message) {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };
  var handleSnackbarClose = function handleSnackbarClose() {
    setSnackbarOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxWidth: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      my: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4",
    component: "h1",
    gutterBottom: true
  }, "Manage Categories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__["default"], null),
    onClick: function onClick() {
      return handleOpen();
    },
    sx: {
      mb: 2
    }
  }, "Add New Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, "Icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    align: "right"
  }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    colSpan: 3,
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null))) : categories.length > 0 ? categories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: category.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, category.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, category.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      align: "right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onClick: function onClick() {
        return handleOpen(category);
      },
      color: "primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onClick: function onClick() {
        return handleDelete(category.id);
      },
      color: "error"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_17__["default"], null))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    colSpan: 3,
    align: "center"
  }, "No categories found"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: open,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, editingCategory ? 'Edit Category' : 'Add New Category'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    autoFocus: true,
    margin: "dense",
    name: "name",
    label: "Category Name",
    type: "text",
    fullWidth: true,
    variant: "outlined",
    value: formData.name,
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    margin: "dense",
    name: "icon",
    label: "Icon",
    type: "text",
    fullWidth: true,
    variant: "outlined",
    value: formData.icon,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleSubmit,
    variant: "contained",
    color: "primary"
  }, editingCategory ? 'Update' : 'Add'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: snackbarOpen,
    autoHideDuration: 6000,
    onClose: handleSnackbarClose,
    message: snackbarMessage
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesPage);

/***/ }),

/***/ "./jsx/Checkout.jsx":
/*!**************************!*\
  !*** ./jsx/Checkout.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







// Provinces list
var PROVINCES = [{
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
  id: 6,
  name: "Nova Scotia"
}, {
  id: 7,
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
function CheckoutPage(_ref) {
  var _profileData$billingA, _profileData$billingA2, _profileData$billingA3, _profileData$billingA4, _profileData$billingA5, _profileData$billingA6, _profileData$billingA7, _profileData$shipping, _profileData$shipping2, _profileData$shipping3, _profileData$shipping4, _profileData$shipping5, _profileData$shipping6, _profileData$shipping7;
  var _ref$initialProfileDa = _ref.initialProfileData,
    initialProfileData = _ref$initialProfileDa === void 0 ? {
      email: "",
      phone: "",
      billingAddress: {},
      shippingAddress: {}
    } : _ref$initialProfileDa;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialProfileData),
    _useState2 = _slicedToArray(_useState, 2),
    profileData = _useState2[0],
    setProfileData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    useBillingAsDelivery = _useState4[0],
    setUseBillingAsDelivery = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    validated = _useState6[0],
    setValidated = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      firstname: (profileData === null || profileData === void 0 || (_profileData$billingA = profileData.billingAddress) === null || _profileData$billingA === void 0 ? void 0 : _profileData$billingA.firstname) || "",
      lastname: (profileData === null || profileData === void 0 || (_profileData$billingA2 = profileData.billingAddress) === null || _profileData$billingA2 === void 0 ? void 0 : _profileData$billingA2.lastname) || "",
      address: (profileData === null || profileData === void 0 || (_profileData$billingA3 = profileData.billingAddress) === null || _profileData$billingA3 === void 0 ? void 0 : _profileData$billingA3.address) || "",
      city: (profileData === null || profileData === void 0 || (_profileData$billingA4 = profileData.billingAddress) === null || _profileData$billingA4 === void 0 ? void 0 : _profileData$billingA4.city) || "",
      postcode: (profileData === null || profileData === void 0 || (_profileData$billingA5 = profileData.billingAddress) === null || _profileData$billingA5 === void 0 ? void 0 : _profileData$billingA5.postcode) || "",
      phone: (profileData === null || profileData === void 0 || (_profileData$billingA6 = profileData.billingAddress) === null || _profileData$billingA6 === void 0 ? void 0 : _profileData$billingA6.phone) || "",
      province_id: (profileData === null || profileData === void 0 || (_profileData$billingA7 = profileData.billingAddress) === null || _profileData$billingA7 === void 0 ? void 0 : _profileData$billingA7.province_id) || ""
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    billingAddress = _useState8[0],
    setBillingAddress = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      firstname: (profileData === null || profileData === void 0 || (_profileData$shipping = profileData.shippingAddress) === null || _profileData$shipping === void 0 ? void 0 : _profileData$shipping.firstname) || "",
      lastname: (profileData === null || profileData === void 0 || (_profileData$shipping2 = profileData.shippingAddress) === null || _profileData$shipping2 === void 0 ? void 0 : _profileData$shipping2.lastname) || "",
      address: (profileData === null || profileData === void 0 || (_profileData$shipping3 = profileData.shippingAddress) === null || _profileData$shipping3 === void 0 ? void 0 : _profileData$shipping3.address) || "",
      city: (profileData === null || profileData === void 0 || (_profileData$shipping4 = profileData.shippingAddress) === null || _profileData$shipping4 === void 0 ? void 0 : _profileData$shipping4.city) || "",
      postcode: (profileData === null || profileData === void 0 || (_profileData$shipping5 = profileData.shippingAddress) === null || _profileData$shipping5 === void 0 ? void 0 : _profileData$shipping5.postcode) || "",
      phone: (profileData === null || profileData === void 0 || (_profileData$shipping6 = profileData.shippingAddress) === null || _profileData$shipping6 === void 0 ? void 0 : _profileData$shipping6.phone) || "",
      province_id: (profileData === null || profileData === void 0 || (_profileData$shipping7 = profileData.shippingAddress) === null || _profileData$shipping7 === void 0 ? void 0 : _profileData$shipping7.province_id) || ""
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    shippingAddress = _useState10[0],
    setShippingAddress = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      email: (profileData === null || profileData === void 0 ? void 0 : profileData.email) || "",
      phone: (profileData === null || profileData === void 0 ? void 0 : profileData.phone) || ""
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    contactInfo = _useState12[0],
    setContactInfo = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    giftOption = _useState14[0],
    setGiftOption = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    formErrors = _useState16[0],
    setFormErrors = _useState16[1];
  var token = localStorage.getItem("token");
  var memoizedProvinces = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return PROVINCES;
  }, []);

  // Correct postal code regex without delimiters
  var postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var loadData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var token, response, data, _data$data, username, email, phone, billing_address, shipping_address;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          token = localStorage.getItem("token");
          _context.prev = 1;
          _context.next = 4;
          return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("http://localhost:8000/api/user/profile", {
            headers: {
              Authorization: "Bearer " + token
            }
          });
        case 4:
          response = _context.sent;
          data = response.data;
          if (data.status === 0) {
            _data$data = data.data, username = _data$data.username, email = _data$data.email, phone = _data$data.phone, billing_address = _data$data.billing_address, shipping_address = _data$data.shipping_address;
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
            setBillingAddress(function (prevState) {
              return _objectSpread(_objectSpread({}, prevState), {}, {
                firstname: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.firstname) || "",
                lastname: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.lastname) || "",
                address: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.address) || "",
                city: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.city) || "",
                postcode: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.postcode) || "",
                phone: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.phone) || "",
                province_id: (billing_address === null || billing_address === void 0 ? void 0 : billing_address.province_id) || ""
              });
            });
            setShippingAddress(function (prevState) {
              return _objectSpread(_objectSpread({}, prevState), {}, {
                firstname: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.firstname) || "",
                lastname: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.lastname) || "",
                address: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.address) || "",
                city: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.city) || "",
                postcode: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.postcode) || "",
                phone: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.phone) || "",
                province_id: (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.province_id) || ""
              });
            });
            setContactInfo(function (prevState) {
              return _objectSpread(_objectSpread({}, prevState), {}, {
                email: email,
                phone: phone
              });
            });
          } else {
            alert("Failed to load data: " + data.msg);
          }
          _context.next = 13;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.error("Error loading data:", _context.t0);
          alert("Error loading data.");
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 9]]);
  })), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadData();
  }, [loadData]);
  var validatePostalCode = function validatePostalCode(postcode) {
    var cleanedPostcode = postcode.replace(/[\s-]/g, "");
    return postalCodeRegex.test(cleanedPostcode);
  };
  var validateForm = function validateForm() {
    var errors = {};
    var phoneRegex = /^(\+\d{1,2}\s?)?(\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Contact Info Validations
    if (!emailRegex.test(contactInfo.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!phoneRegex.test(contactInfo.phone)) {
      errors.phone = "Please enter a valid phone number.";
    }

    // Billing Address Validations
    if (!billingAddress.firstname) {
      errors.billingFirstname = "First name is required.";
    }
    if (!billingAddress.lastname) {
      errors.billingLastname = "Last name is required.";
    }
    if (!billingAddress.address) {
      errors.billingAddress = "Address is required.";
    }
    if (!billingAddress.city) {
      errors.billingCity = "City is required.";
    }
    if (!validatePostalCode(billingAddress.postcode)) {
      errors.billingPostcode = "Please enter a valid postal code (A1A 1A1).";
    }
    if (!billingAddress.phone) {
      errors.billingPhone = "Phone number is required.";
    }
    if (!billingAddress.province_id) {
      errors.billingProvince = "Please select a province.";
    }

    // Shipping Address Validations
    if (!useBillingAsDelivery) {
      if (!shippingAddress.firstname) {
        errors.shippingFirstname = "First name is required.";
      }
      if (!shippingAddress.lastname) {
        errors.shippingLastname = "Last name is required.";
      }
      if (!shippingAddress.address) {
        errors.shippingAddress = "Address is required.";
      }
      if (!shippingAddress.city) {
        errors.shippingCity = "City is required.";
      }
      if (!validatePostalCode(shippingAddress.postcode)) {
        errors.shippingPostcode = "Please enter a valid postal code (A1A 1A1).";
      }
      if (!shippingAddress.phone) {
        errors.shippingPhone = "Phone number is required.";
      }
      if (!shippingAddress.province_id) {
        errors.shippingProvince = "Please select a province.";
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setValidated(true);
    if (validateForm()) {
      var data = new FormData();
      data.append("email", contactInfo.email);
      data.append("phone", contactInfo.phone);
      data.append("include_gift", giftOption);
      Object.keys(billingAddress).forEach(function (key) {
        data.append("billing_address_".concat(key), billingAddress[key]);
      });
      Object.keys(shippingAddress).forEach(function (key) {
        data.append("shipping_address_".concat(key), shippingAddress[key]);
      });
      var requestOptions = {
        method: "POST",
        body: data,
        headers: {
          Authorization: "Bearer " + token
        }
      };
      fetch("http://localhost:8000/api/order/checkout", requestOptions).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.status === 0) {
          alert("Order Placed successfully");
          setTimeout(function () {
            return navigate("/payment", {
              replace: true,
              state: {
                clientSecret: data.data.clientSecret
              }
            });
          }, 1000); // Redirect after 2 seconds
        } else {
          alert(data.message || "Checkout failed");
        }
      }).catch(function (error) {
        console.error("Error submitting order:", error);
        alert("Order submission failed: ".concat(error.message));
      });
    }
  };
  var _handleAddressChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e, addressType) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var updateFunction = addressType === "billing" ? setBillingAddress : setShippingAddress;
    updateFunction(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
  }, []);
  var handleContactInfoChange = function handleContactInfoChange(e) {
    var _e$target2 = e.target,
      id = _e$target2.id,
      value = _e$target2.value;
    setContactInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, value));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "checkout-container container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "checkout-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    noValidate: true,
    validated: validated,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Group, {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Label, {
    className: "form-section-title"
  }, "Gift Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Check, {
    type: "checkbox",
    label: "Order includes gift(s). The packing slip included with your order will not display prices.",
    checked: giftOption,
    onChange: function onChange(e) {
      return setGiftOption(e.target.checked);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "form-section-title"
  }, "Billing Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddressForm, {
    address: billingAddress,
    useProfileAddresses: false,
    handleAddressChange: function handleAddressChange(e) {
      return _handleAddressChange(e, "billing");
    },
    provinces: memoizedProvinces,
    addressType: "billing",
    formErrors: formErrors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "form-section-title"
  }, "Delivery Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Check, {
    type: "checkbox",
    label: "Use as billing address",
    checked: useBillingAsDelivery,
    onChange: function onChange(e) {
      return setUseBillingAsDelivery(e.target.checked);
    }
  }), !useBillingAsDelivery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddressForm, {
    address: shippingAddress,
    useProfileAddresses: false,
    handleAddressChange: function handleAddressChange(e) {
      return _handleAddressChange(e, "shipping");
    },
    provinces: memoizedProvinces,
    addressType: "shipping",
    formErrors: formErrors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContactInfo, {
    contactInfo: contactInfo,
    handleContactInfoChange: handleContactInfoChange,
    formErrors: formErrors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-actions mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "primary",
    type: "submit",
    className: "checkout-button"
  }, "Checkout"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "secondary",
    className: "back-button"
  }, "Back")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OrderSummary, {
    giftOption: giftOption
  }));
}

// Prop Types
CheckoutPage.propTypes = {
  initialProfileData: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    email: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    phone: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    billingAddress: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
      firstname: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
      lastname: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
      address: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
      city: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
      postcode: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
      phone: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
      province_id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)
    }),
    shippingAddress: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
      firstname: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
      lastname: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
      address: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
      city: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
      postcode: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
      phone: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
      province_id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)
    })
  })
};

// Address Form Component
function AddressForm(_ref3) {
  var address = _ref3.address,
    useProfileAddresses = _ref3.useProfileAddresses,
    handleAddressChange = _ref3.handleAddressChange,
    provinces = _ref3.provinces,
    addressType = _ref3.addressType,
    formErrors = _ref3.formErrors;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "mb-5 section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, ["firstname", "lastname", "address", "city", "postcode", "phone"].map(function (field) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col-md-6 mb-3",
      key: field
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, field.charAt(0).toUpperCase() + field.slice(1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      name: field,
      className: "form-control ".concat(formErrors["".concat(addressType).concat(field.charAt(0).toUpperCase() + field.slice(1))] ? "is-invalid" : ""),
      value: address[field] || "",
      onChange: handleAddressChange,
      disabled: useProfileAddresses
      // Apply pattern for postal code validation
      ,
      pattern: field === "postcode" ? "^[A-Za-z]\\d[A-Za-z][ -]?\\d[A-Za-z]\\d$" : undefined,
      "aria-label": "".concat(field.charAt(0).toUpperCase() + field.slice(1), " input"),
      "aria-required": "true"
    }), formErrors["".concat(addressType).concat(field.charAt(0).toUpperCase() + field.slice(1))] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "invalid-feedback"
    }, formErrors["".concat(addressType).concat(field.charAt(0).toUpperCase() + field.slice(1))]));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Province"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "province_id",
    value: address.province_id || "",
    onChange: handleAddressChange,
    className: "form-control ".concat(formErrors["".concat(addressType, "Province")] ? "is-invalid" : ""),
    disabled: useProfileAddresses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Select Province"), Array.isArray(provinces) && provinces.map(function (province) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: province.id,
      value: province.id
    }, province.name);
  })), formErrors["".concat(addressType, "Province")] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "invalid-feedback"
  }, formErrors["".concat(addressType, "Province")]))));
}

// Order Summary Component
function OrderSummary(_ref4) {
  var giftOption = _ref4.giftOption;
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    cartItems = _useState18[0],
    setCartItems = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    error = _useState20[0],
    setError = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    loading = _useState22[0],
    setLoading = _useState22[1];
  var fetchCart = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var token, _response$data, response, items;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            token = localStorage.getItem("token");
            setLoading(true);
            setError(null);
            _context2.prev = 3;
            _context2.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("http://localhost:8000/api/cart", {
              headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json"
              }
            });
          case 6:
            response = _context2.sent;
            items = ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) || [];
            setCartItems(items);
            _context2.next = 15;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](3);
            setError("Error fetching cart items. Please try again.");
            console.error("Error fetching cart items:", _context2.t0);
          case 15:
            _context2.prev = 15;
            setLoading(false);
            return _context2.finish(15);
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 11, 15, 18]]);
    }));
    return function fetchCart() {
      return _ref5.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchCart();
  }, []);
  var calculateSubtotal = function calculateSubtotal() {
    return cartItems.reduce(function (total, item) {
      return total + item.price * item.quantity;
    }, 0);
  };
  var calculateSavings = function calculateSavings() {
    return 0; // Implement savings logic if needed
  };
  var calculateTax = function calculateTax() {
    return (calculateSubtotal() - calculateSavings()) * 0.13;
  };
  var calculateTotal = function calculateTotal() {
    return calculateSubtotal() - calculateSavings() + calculateTax();
  };
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading cart...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, error);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "order-summary mb-4 shadow-lg rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Body, {
    className: "summary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Title, {
    className: "summary-title mb-4"
  }, "Order Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-muted"
  }, "Subtotal (", cartItems.length, " item", cartItems.length > 1 ? "s" : "", ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "subtotal-price"
  }, "$", calculateSubtotal().toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between align-items-center mb-3 savings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-muted"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaPercentage, {
    className: "me-2"
  }), " Savings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "savings-amount"
  }, "- $", calculateSavings().toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-muted"
  }, "Subtotal after savings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "subtotal-after"
  }, "$", (calculateSubtotal() - calculateSavings()).toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-muted"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaTruck, {
    className: "me-2"
  }), " PrimeMart Delivery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "delivery-free text-success"
  }, "FREE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between align-items-center mb-3 tax-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-muted"
  }, "13% HST"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tax"
  }, "$", calculateTax().toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between align-items-center estimated-total mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Estimated Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    className: "total-amount"
  }, "$", calculateTotal().toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "small-note text-muted"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaReceipt, {
    className: "me-2"
  }), "All fees and taxes are estimates. Final charges will be itemized on your receipt.")));
}

// Contact Info Component
function ContactInfo(_ref6) {
  var contactInfo = _ref6.contactInfo,
    handleContactInfoChange = _ref6.handleContactInfoChange,
    formErrors = _ref6.formErrors;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "form-section-title"
  }, "Contact Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Group, {
    controlId: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Label, null, "Email Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Control, {
    type: "email",
    placeholder: "Enter your email",
    required: true,
    value: contactInfo.email || "",
    onChange: handleContactInfoChange,
    className: formErrors.email ? "is-invalid" : ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Control.Feedback, {
    type: "invalid"
  }, formErrors.email || "Please provide a valid email.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Group, {
    controlId: "phone",
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Label, null, "Phone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Control, {
    type: "text",
    placeholder: "Phone Number",
    required: true,
    value: contactInfo.phone || "",
    onChange: handleContactInfoChange,
    className: formErrors.phone ? "is-invalid" : ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Control.Feedback, {
    type: "invalid"
  }, formErrors.phone || "Please provide a valid phone number.")));
}
//checkout
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutPage);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





// Reusable ProductCard Component
var ProductCard = function ProductCard(_ref) {
  var product = _ref.product,
    onAddToCart = _ref.onAddToCart,
    _onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    md: 3,
    sm: 6,
    xs: 12,
    key: product.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mb-4",
    onClick: function onClick() {
      return _onClick(product);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Img, {
    variant: "top",
    src: "http://localhost:8000/storage/".concat(product.image_url),
    alt: product.name,
    onError: function onError(e) {
      e.target.onerror = null;
      e.target.src = "https://via.placeholder.com/150?text=Image+Not+Found";
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Title, null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Text, null, "Price: $", product.price), product.onsale_price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      textDecoration: "line-through",
      color: "red"
    }
  }, "$", product.price), " ", "$", product.onsale_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Text, null, product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "primary",
    onClick: function onClick(e) {
      e.stopPropagation(); // Prevent the Card's onClick event from firing
      onAddToCart(product);
    }
  }, "Add to Cart"))));
};
var HomePage = function HomePage() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var token = localStorage.getItem("token");

  // State for Categories
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loadingCategories = _useState4[0],
    setLoadingCategories = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    errorCategories = _useState6[0],
    setErrorCategories = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedCategory = _useState8[0],
    setSelectedCategory = _useState8[1];

  // State for Featured Products
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    featuredProducts = _useState10[0],
    setFeaturedProducts = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    loadingFeatured = _useState12[0],
    setLoadingFeatured = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    errorFeatured = _useState14[0],
    setErrorFeatured = _useState14[1];

  // State for Products on Sale
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    productsOnSale = _useState16[0],
    setProductsOnSale = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState18 = _slicedToArray(_useState17, 2),
    loadingSale = _useState18[0],
    setLoadingSale = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    errorSale = _useState20[0],
    setErrorSale = _useState20[1];
  var handleProductClick = function handleProductClick(product) {
    navigate("/product/".concat(product.id));
  };

  // Generic Fetch Function
  var fetchProducts = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(params, setState, setLoading, setError) {
      var queryParams, response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            setError(null);
            _context.prev = 2;
            queryParams = new URLSearchParams(params).toString();
            _context.next = 6;
            return fetch("http://localhost:8000/api/product?".concat(queryParams), {
              method: "GET",
              headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json"
              }
            });
          case 6:
            response = _context.sent;
            if (response.ok) {
              _context.next = 9;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 9:
            _context.next = 11;
            return response.json();
          case 11:
            data = _context.sent;
            if (!(data.status === 0 && Array.isArray(data.data))) {
              _context.next = 16;
              break;
            }
            setState(data.data);
            _context.next = 17;
            break;
          case 16:
            throw new Error(data.msg || "Failed to load products.");
          case 17:
            _context.next = 22;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](2);
            setError(_context.t0.message || "Error fetching products.");
          case 22:
            _context.prev = 22;
            setLoading(false);
            return _context.finish(22);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 19, 22, 25]]);
    }));
    return function fetchProducts(_x, _x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  // Fetch Categories
  var fetchCategories = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setLoadingCategories(true);
            setErrorCategories(null);
            _context2.prev = 2;
            _context2.next = 5;
            return fetch("http://localhost:8000/api/category", {
              method: "GET",
              headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json"
              }
            });
          case 5:
            response = _context2.sent;
            if (response.ok) {
              _context2.next = 8;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 8:
            _context2.next = 10;
            return response.json();
          case 10:
            data = _context2.sent;
            if (!(data.status === 0 && Array.isArray(data.data))) {
              _context2.next = 15;
              break;
            }
            setCategories(data.data);
            _context2.next = 16;
            break;
          case 15:
            throw new Error(data.msg || "Failed to load categories.");
          case 16:
            _context2.next = 21;
            break;
          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](2);
            setErrorCategories(_context2.t0.message || "Error fetching categories.");
          case 21:
            _context2.prev = 21;
            setLoadingCategories(false);
            return _context2.finish(21);
          case 24:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 18, 21, 24]]);
    }));
    return function fetchCategories() {
      return _ref3.apply(this, arguments);
    };
  }();

  // Fetch Featured Products
  var fetchFeaturedProducts = function fetchFeaturedProducts() {
    var params = {
      is_featured: "true"
    };
    fetchProducts(params, setFeaturedProducts, setLoadingFeatured, setErrorFeatured);
  };

  // Fetch Products on Sale
  var fetchProductsOnSale = function fetchProductsOnSale() {
    var params = {
      is_onsale: "true"
    };
    fetchProducts(params, setProductsOnSale, setLoadingSale, setErrorSale);
  };
  var handleAddToCart = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(product) {
      var token, response, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            token = localStorage.getItem("token");
            _context3.prev = 1;
            _context3.next = 4;
            return fetch("http://localhost:8000/api/cart", {
              method: "POST",
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                product_id: product.id,
                quantity: 1
              })
            });
          case 4:
            response = _context3.sent;
            if (response.ok) {
              _context3.next = 7;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 7:
            _context3.next = 9;
            return response.json();
          case 9:
            data = _context3.sent;
            if (!(data.status === 0)) {
              _context3.next = 14;
              break;
            }
            alert("".concat(product.name, " added to cart!"));
            _context3.next = 15;
            break;
          case 14:
            throw new Error(data.msg || "Failed to add to cart.");
          case 15:
            _context3.next = 21;
            break;
          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](1);
            console.error("Error adding to cart:", _context3.t0);
            alert(_context3.t0.message || "Error adding item to cart.");
          case 21:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 17]]);
    }));
    return function handleAddToCart(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  // Initial Data Fetching
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchCategories();
    fetchFeaturedProducts();
    fetchProductsOnSale();
  }, []);
  var handleCategoryClick = function handleCategoryClick(categoryId) {
    setSelectedCategory(categoryId);
    navigate("/products?category=".concat(categoryId));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fluid: true,
    className: "p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "hero-section text-center p-5",
    style: {
      backgroundColor: "#F1F8E9"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "mt-4"
  }, "Fresh & Healthy Organic Food"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "success",
    onClick: function onClick() {
      return navigate("/products");
    },
    className: "mt-3"
  }, "Shop Now"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "intro-section p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    md: 4,
    sm: 12,
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaLeaf, {
    size: 50,
    style: {
      color: "green"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "mt-3"
  }, "100% Organic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We offer organic food that is healthy and fresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    md: 4,
    sm: 12,
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaBox, {
    size: 50,
    style: {
      color: "orange"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "mt-3"
  }, "Fresh Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Our products are delivered fresh to your door.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    md: 4,
    sm: 12,
    className: "mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaTruck, {
    size: 50,
    style: {
      color: "blue"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "mt-3"
  }, "Fast Delivery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Get your groceries delivered within 24 hours."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "categories-navbar-section py-3 bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, loadingCategories ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    animation: "border",
    variant: "primary"
  })) : errorCategories ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "danger",
    className: "text-center"
  }, errorCategories) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "justify-content-center flex-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Link, {
    className: "category-link ".concat(selectedCategory === null ? "active" : ""),
    onClick: function onClick() {
      handleProductClick(product);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fa fa-th-large me-2",
    "aria-hidden": "true"
  }), " All"), categories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
      key: category.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Link, {
      className: "category-link ".concat(selectedCategory === category.id ? "active" : ""),
      onClick: function onClick() {
        return handleCategoryClick(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fa ".concat(category.icon, " me-2"),
      "aria-hidden": "true"
    }), " ", category.name));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "products-section py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center mb-4"
  }, "Featured Products"), loadingFeatured ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    animation: "border",
    variant: "primary"
  })) : errorFeatured ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "danger",
    className: "text-center"
  }, errorFeatured) : featuredProducts.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "info",
    className: "text-center"
  }, "No featured products available.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, featuredProducts.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProductCard, {
      key: product.id,
      product: product,
      onAddToCart: handleAddToCart,
      onClick: handleProductClick
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "products-sale-section py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center mb-4"
  }, "Products on Sale"), loadingSale ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    animation: "border",
    variant: "primary"
  })) : errorSale ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "danger",
    className: "text-center"
  }, errorSale) : productsOnSale.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "info",
    className: "text-center"
  }, "No products on sale at the moment.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, productsOnSale.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProductCard, {
      key: product.id,
      product: product,
      onAddToCart: handleAddToCart,
      onClick: handleProductClick
    });
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
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



var Login = function Login(_ref) {
  var setIsAuthenticated = _ref.setIsAuthenticated;
  // Accept a prop to manage auth state
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
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var validationErrors, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            validationErrors = validateForm();
            if (!(Object.keys(validationErrors).length === 0)) {
              _context.next = 16;
              break;
            }
            _context.prev = 3;
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('http://localhost:8000/api/user/login', formData);
          case 6:
            response = _context.sent;
            // Check if login was successful
            if (response.data.status === 0) {
              console.log("Login successful", response.data);

              // Save token or user data to localStorage (if needed)
              localStorage.setItem("token", response.data.data.token);
              localStorage.setItem("is_admin", response.data.data.user.is_admin == 1 ? true : false);

              // Set axios default headers for future requests
              axios__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.headers.common['Authorization'] = "Bearer ".concat(response.data.data.token);

              // Update authentication state
              setIsAuthenticated(true); // Call prop function to update auth state

              navigate("/"); // Redirect to home or another page
            } else {
              setErrors({
                login: response.data.message || "Login failed"
              });
            }
            _context.next = 14;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.error("Error during login:", _context.t0);
            setErrors({
              login: "An error occurred. Please try again."
            });
          case 14:
            _context.next = 17;
            break;
          case 16:
            setErrors(validationErrors);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 10]]);
    }));
    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Forgot Password?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/forgot-password"
  }, " Reset"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "register-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Don't have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var NavPage = function NavPage(_ref) {
  var title = _ref.title,
    isAuthenticated = _ref.isAuthenticated,
    isAdmin = _ref.isAdmin,
    setIsAuthenticated = _ref.setIsAuthenticated;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var handleLogout = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var confirmLogout, token;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            confirmLogout = window.confirm("Are you sure you want to log out?");
            if (!confirmLogout) {
              _context.next = 22;
              break;
            }
            _context.prev = 2;
            token = localStorage.getItem("token");
            if (token) {
              _context.next = 9;
              break;
            }
            console.warn("No token found, logging out locally.");
            localStorage.removeItem("isLoggedIn");
            setIsAuthenticated(false);
            return _context.abrupt("return");
          case 9:
            _context.next = 11;
            return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:8000/api/user/logout", {}, {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });
          case 11:
            // Clear session data and set the authentication state to false
            localStorage.removeItem("token");
            localStorage.removeItem("isLoggedIn");
            setIsAuthenticated(false);
            navigate("/");
            _context.next = 20;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](2);
            console.error("Logout failed:", _context.t0);
          case 20:
            _context.next = 23;
            break;
          case 22:
            console.log("Logout cancelled");
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 17]]);
    }));
    return function handleLogout() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light custom-navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "navbar-brand d-flex align-items-center",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "./logo.svg",
    alt: "PrimeMart Logo",
    className: "img-fluid logo-img me-2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "nav-link ".concat(location.pathname === "/" ? "active" : ""),
    to: "/",
    "aria-current": location.pathname === "/" ? "page" : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaHome, null), " Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "nav-link ".concat(location.pathname === "/products" ? "active" : ""),
    to: "/products",
    "aria-current": location.pathname === "/products" ? "page" : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaProductHunt, null), " Products")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "nav-link ".concat(location.pathname === "/cart" ? "active" : ""),
    to: "/cart",
    "aria-current": location.pathname === "/cart" ? "page" : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaShoppingCart, null), " Cart")), isAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "nav-link ".concat(location.pathname === "/Admin" ? "active" : ""),
    to: "/Admin",
    "aria-current": location.pathname === "/Admin" ? "page" : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUserTie, null), " Admin")), !isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "nav-link ".concat(location.pathname === "/register" ? "active" : ""),
    to: "/register",
    "aria-current": location.pathname === "/register" ? "page" : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUserPlus, null), " Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "nav-link ".concat(location.pathname === "/login" ? "active" : ""),
    to: "/login",
    "aria-current": location.pathname === "/login" ? "page" : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSignInAlt, null), " Login"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "nav-link ".concat(location.pathname === "/profile" ? "active" : ""),
    to: "/profile",
    "aria-current": location.pathname === "/profile" ? "page" : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUserAlt, null), " Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "nav-link logout-link",
    onClick: handleLogout,
    role: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSignOutAlt, null), " Logout"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavPage);

/***/ }),

/***/ "./jsx/Payment.jsx":
/*!*************************!*\
  !*** ./jsx/Payment.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/lib/index.mjs");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");





// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This test secret API key is a placeholder. Don't include personal details in requests with this key.
// To see your test secret API key embedded in code samples, sign in to your Stripe account.
// You can also find your test secret API key at https://dashboard.stripe.com/test/apikeys.
var stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__.loadStripe)("pk_test_A7jK4iCYHL045qgjjfzAfPxu");
var Payment = function Payment() {
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)(),
    state = _useLocation.state;
  var clientSecret = state.clientSecret;
  var options = {
    clientSecret: clientSecret
  };
  console.log(options);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "checkout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.EmbeddedCheckoutProvider, {
    stripe: stripePromise,
    options: options
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.EmbeddedCheckout, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payment);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ToastContainer.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Toast.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var ProductDetailPage = function ProductDetailPage() {
  var _window$ENV;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    product = _useState2[0],
    setProduct = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    reviews = _useState4[0],
    setReviews = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    addingToCart = _useState10[0],
    setAddingToCart = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState12 = _slicedToArray(_useState11, 2),
    quantity = _useState12[0],
    setQuantity = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showShareModal = _useState14[0],
    setShowShareModal = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState16 = _slicedToArray(_useState15, 2),
    currentPage = _useState16[0],
    setCurrentPage = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState18 = _slicedToArray(_useState17, 2),
    totalPages = _useState18[0],
    setTotalPages = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    showToast = _useState20[0],
    setShowToast = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    toastMessage = _useState22[0],
    setToastMessage = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("success"),
    _useState24 = _slicedToArray(_useState23, 2),
    toastVariant = _useState24[0],
    setToastVariant = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      title: "",
      content: "",
      stars: 5
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    newReview = _useState26[0],
    setNewReview = _useState26[1];
  var token = localStorage.getItem("token");
  var API_URL = ((_window$ENV = window.ENV) === null || _window$ENV === void 0 ? void 0 : _window$ENV.REACT_APP_API_URL) || "http://localhost:8000";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchProductData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$Promise$all, _yield$Promise$all2, productResponse, reviewsResponse, _err$response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Promise.all([axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("".concat(API_URL, "/api/product/").concat(id), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              }), axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("".concat(API_URL, "/api/review"), {
                params: {
                  product_id: id,
                  page_num: currentPage,
                  page_size: 5
                },
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              })]);
            case 3:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              productResponse = _yield$Promise$all2[0];
              reviewsResponse = _yield$Promise$all2[1];
              setProduct(productResponse.data.data);
              setReviews(reviewsResponse.data.data.list || []);
              setTotalPages(Math.ceil(reviewsResponse.data.data.total / 5));
              _context.next = 16;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setError(((_err$response = _context.t0.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.msg) || "Error fetching product details");
              showToastMessage("Error loading product details", "danger");
            case 16:
              _context.prev = 16;
              setLoading(false);
              return _context.finish(16);
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 12, 16, 19]]);
      }));
      return function fetchProductData() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchProductData();
  }, [id, token, API_URL, currentPage]);
  var showToastMessage = function showToastMessage(message) {
    var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };
  var addToCart = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!(quantity < 1)) {
              _context2.next = 4;
              break;
            }
            showToastMessage("Please select a valid quantity", "warning");
            return _context2.abrupt("return");
          case 4:
            if (!(quantity > product.stock)) {
              _context2.next = 7;
              break;
            }
            showToastMessage("Sorry, only ".concat(product.stock, " items available in stock"), "warning");
            return _context2.abrupt("return");
          case 7:
            setAddingToCart(true);
            _context2.next = 10;
            return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("".concat(API_URL, "/api/cart"), {
              product_id: product.id,
              quantity: quantity
            }, {
              headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json"
              }
            });
          case 10:
            response = _context2.sent;
            if (!(response.data.status === 0)) {
              _context2.next = 15;
              break;
            }
            showToastMessage("".concat(quantity, " ").concat(product.name, "(s) added to cart!"));
            _context2.next = 16;
            break;
          case 15:
            throw new Error(response.data.msg || "Failed to add to cart");
          case 16:
            _context2.next = 22;
            break;
          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);
            console.error("Cart Error:", _context2.t0);
            showToastMessage(_context2.t0.message || "Error adding to cart", "danger");
          case 22:
            _context2.prev = 22;
            setAddingToCart(false);
            return _context2.finish(22);
          case 25:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 18, 22, 25]]);
    }));
    return function addToCart() {
      return _ref2.apply(this, arguments);
    };
  }();
  var submitReview = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var reviewsResponse;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            e.preventDefault();
            _context3.prev = 1;
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("".concat(API_URL, "/api/review"), _objectSpread({
              product_id: id
            }, newReview), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });
          case 4:
            setNewReview({
              title: "",
              content: "",
              stars: 5
            });
            showToastMessage("Review submitted successfully");

            // Refresh reviews
            _context3.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("".concat(API_URL, "/api/review"), {
              params: {
                product_id: id,
                page_num: currentPage,
                page_size: 5
              },
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });
          case 8:
            reviewsResponse = _context3.sent;
            setReviews(reviewsResponse.data.data.list || []);
            _context3.next = 15;
            break;
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            showToastMessage("Error submitting review", "danger");
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 12]]);
    }));
    return function submitReview(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleReviewChange = function handleReviewChange(e) {
    setNewReview(_objectSpread(_objectSpread({}, newReview), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  var handleQuantityChange = function handleQuantityChange(e) {
    var value = parseInt(e.target.value);
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };
  var handleShareClick = function handleShareClick() {
    setShowShareModal(true);
  };
  var renderShareModal = function renderShareModal() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      show: showShareModal,
      onHide: function onHide() {
        return setShowShareModal(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
      closeButton: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Title, null, "Share Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "d-flex justify-content-around"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "outline-primary"
    }, "Facebook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "outline-info"
    }, "Twitter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "outline-danger"
    }, "Pinterest"))));
  };
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "d-flex justify-content-center align-items-center",
      style: {
        height: "100vh"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
      initial: {
        scale: 0.8,
        opacity: 0
      },
      animate: {
        scale: 1,
        opacity: 1
      },
      transition: {
        duration: 0.5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      animation: "grow",
      variant: "primary"
    })));
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "danger"
    }, error);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    position: "top-end",
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClose: function onClose() {
      return setShowToast(false);
    },
    show: showToast,
    delay: 3000,
    autohide: true,
    bg: toastVariant,
    className: "text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    className: "me-auto"
  }, "Notification")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Body, null, toastMessage))), product && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 0.5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "border-0 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    prevIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__.FaChevronLeft, {
      className: "text-dark"
    }),
    nextIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__.FaChevronRight, {
      className: "text-dark"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "d-block w-100 rounded",
    src: "".concat(API_URL, "/storage/").concat(product.image_url),
    alt: product.name,
    style: {
      objectFit: "cover",
      height: "400px"
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-muted"
  }, "Brand: ", product.brand)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    placement: "top",
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], null, "Share Product")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outline-secondary",
    className: "ms-2",
    onClick: handleShareClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__.FaShareAlt, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "my-3"
  }, product.onsale_price ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "text-danger"
  }, "Sale Price: $", product.onsale_price, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
    bg: "warning",
    className: "ms-2"
  }, Math.round((product.price - product.onsale_price) / product.price * 100), "% OFF")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-muted text-decoration-line-through"
  }, "Original: $", product.price)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Price: $", product.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: product.stock < 5 ? "text-danger" : "text-success"
  }, product.stock, " items in stock")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex align-items-center my-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outline-secondary",
    onClick: function onClick() {
      return setQuantity(Math.max(1, quantity - 1));
    },
    disabled: quantity <= 1
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Control, {
    type: "number",
    value: quantity,
    onChange: handleQuantityChange,
    min: "1",
    max: product.stock,
    className: "mx-2 text-center",
    style: {
      width: "80px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outline-secondary",
    onClick: function onClick() {
      return setQuantity(Math.min(product.stock, quantity + 1));
    },
    disabled: quantity >= product.stock
  }, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "btn btn-primary mt-3 w-100",
    onClick: addToCart,
    disabled: addingToCart || product.stock === 0
  }, addingToCart ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    as: "span",
    animation: "border",
    size: "sm",
    role: "status",
    "aria-hidden": "true",
    className: "me-2"
  }), "Adding to Cart...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__.FaShoppingCart, {
    className: "me-2"
  }), " Add to Cart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"].Title, null, "Product Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, product.description))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "mt-5"
  }, "Customer Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "p-4 mb-5"
  }, reviews.length > 0 ? reviews.map(function (review) {
    var _review$reviewer;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: review.id,
      className: "mb-4 border-bottom pb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, review.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, review.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-2"
    }, Array(review.stars).fill().map(function (_, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__.FaStar, {
        key: i,
        className: "text-warning"
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
      className: "text-muted"
    }, "By ", ((_review$reviewer = review.reviewer) === null || _review$reviewer === void 0 ? void 0 : _review$reviewer.username) || "Anonymous", " on", " ", new Date(review.created_at).toLocaleDateString()));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No reviews yet. Be the first to review this product!"), totalPages > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outline-primary",
    disabled: currentPage === 1,
    onClick: function onClick() {
      return setCurrentPage(currentPage - 1);
    },
    className: "me-2"
  }, "Previous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outline-primary",
    disabled: currentPage === totalPages,
    onClick: function onClick() {
      return setCurrentPage(currentPage + 1);
    }
  }, "Next"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Write a Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onSubmit: submitReview
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Group, {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Label, null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Control, {
    type: "text",
    name: "title",
    value: newReview.title,
    onChange: handleReviewChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Group, {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Label, null, "Your Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Control, {
    as: "textarea",
    rows: 3,
    name: "content",
    value: newReview.content,
    onChange: handleReviewChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Group, {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Label, null, "Rating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"].Select, {
    name: "stars",
    value: newReview.stars,
    onChange: handleReviewChange,
    style: {
      width: "200px"
    }
  }, [1, 2, 3, 4, 5].map(function (star) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: star,
      value: star
    }, star, " star", star !== 1 ? "s" : "");
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ms-3"
  }, Array(newReview.stars).fill().map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__.FaStar, {
      key: i,
      className: "text-warning"
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "submit",
    variant: "primary"
  }, "Submit Review")))), renderShareModal());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailPage);

/***/ }),

/***/ "./jsx/ProductModalComponent.jsx":
/*!***************************************!*\
  !*** ./jsx/ProductModalComponent.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");


var ProductModal = function ProductModal(_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    product = _ref.product,
    onAddToCart = _ref.onAddToCart;
  if (!product) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    show: show,
    onHide: onClose,
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Title, null, product.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: product.img,
    alt: "".concat(product.name, " image"),
    className: "img-fluid mb-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Price:"), " $", product.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "secondary",
    onClick: onClose
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "primary",
    onClick: function onClick() {
      onAddToCart(product);
      onClose();
    }
  }, "Add to Cart")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductModal);

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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _ProductModalComponent_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductModalComponent.jsx */ "./jsx/ProductModalComponent.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var ProductPage = function ProductPage() {
  var _categories$find;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),
    categoryKey = _useParams.categoryKey;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(categoryKey ? Number(categoryKey) : null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedCategory = _useState4[0],
    setSelectedCategory = _useState4[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    searchQuery = _useState6[0],
    setSearchQuery = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(searchQuery),
    _useState8 = _slicedToArray(_useState7, 2),
    debouncedSearch = _useState8[0],
    setDebouncedSearch = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    showModal = _useState10[0],
    setShowModal = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    modalProduct = _useState12[0],
    setModalProduct = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    products = _useState14[0],
    setProducts = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loadingCategories = _useState16[0],
    setLoadingCategories = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    loadingProducts = _useState18[0],
    setLoadingProducts = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    error = _useState20[0],
    setError = _useState20[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchCategories();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchProducts(selectedCategory, debouncedSearch);
  }, [selectedCategory, debouncedSearch]);
  var fetchCategories = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var token, response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            token = localStorage.getItem("token");
            setLoadingCategories(true);
            setError(null);
            _context.prev = 3;
            _context.next = 6;
            return fetch("".concat(window.ENV.REACT_APP_API_URL, "/api/category"), {
              method: "GET",
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
              }
            });
          case 6:
            response = _context.sent;
            if (response.ok) {
              _context.next = 9;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 9:
            _context.next = 11;
            return response.json();
          case 11:
            data = _context.sent;
            if (!(data.status === 0 && Array.isArray(data.data))) {
              _context.next = 16;
              break;
            }
            setCategories(data.data);
            _context.next = 17;
            break;
          case 16:
            throw new Error(data.msg || "Failed to load categories.");
          case 17:
            _context.next = 22;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](3);
            setError(_context.t0.message || "Error fetching categories.");
          case 22:
            _context.prev = 22;
            setLoadingCategories(false);
            return _context.finish(22);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 19, 22, 25]]);
    }));
    return function fetchCategories() {
      return _ref.apply(this, arguments);
    };
  }();
  var fetchProducts = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(categoryId, search) {
      var token, params, response, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            token = localStorage.getItem("token");
            setLoadingProducts(true);
            setError(null);
            _context2.prev = 3;
            params = new URLSearchParams();
            if (categoryId) params.append("category_id", categoryId);
            if (search) params.append("name", search);
            _context2.next = 9;
            return fetch("".concat(window.ENV.REACT_APP_API_URL, "/api/product?").concat(params.toString()), {
              method: "GET",
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
              }
            });
          case 9:
            response = _context2.sent;
            if (response.ok) {
              _context2.next = 12;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 12:
            _context2.next = 14;
            return response.json();
          case 14:
            data = _context2.sent;
            if (!(data.status === 0 && Array.isArray(data.data))) {
              _context2.next = 19;
              break;
            }
            setProducts(data.data);
            _context2.next = 20;
            break;
          case 19:
            throw new Error(data.msg || "Failed to load products.");
          case 20:
            _context2.next = 25;
            break;
          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](3);
            setError(_context2.t0.message || "Error fetching products.");
          case 25:
            _context2.prev = 25;
            setLoadingProducts(false);
            return _context2.finish(25);
          case 28:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 22, 25, 28]]);
    }));
    return function fetchProducts(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handler = setTimeout(function () {
      setDebouncedSearch(searchQuery);
    }, 300);
    return function () {
      clearTimeout(handler);
    };
  }, [searchQuery]);
  var handleCategoryClick = function handleCategoryClick(categoryId) {
    setSelectedCategory(categoryId);
  };
  var handleProductClick = function handleProductClick(product) {
    navigate("/product/".concat(product.id));
  };
  var handleCloseModal = function handleCloseModal() {
    setShowModal(false);
    setModalProduct(null);
  };
  var addToCart = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(product) {
      var token, response, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            token = localStorage.getItem("token");
            _context3.prev = 1;
            _context3.next = 4;
            return fetch("".concat(window.ENV.REACT_APP_API_URL, "/api/cart"), {
              method: "POST",
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                product_id: product.id,
                quantity: 1
              })
            });
          case 4:
            response = _context3.sent;
            if (response.ok) {
              _context3.next = 7;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 7:
            _context3.next = 9;
            return response.json();
          case 9:
            data = _context3.sent;
            if (!(data.status === 0)) {
              _context3.next = 14;
              break;
            }
            alert("".concat(product.name, " added to cart!"));
            _context3.next = 15;
            break;
          case 14:
            throw new Error(data.msg || "Failed to add to cart.");
          case 15:
            _context3.next = 21;
            break;
          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](1);
            console.error("Error adding to cart:", _context3.t0);
            alert(_context3.t0.message || "Error adding item to cart.");
          case 21:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 17]]);
    }));
    return function addToCart(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: true,
    className: "p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "search-bar-section py-3 bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "text",
    placeholder: "Search Products",
    className: "me-2",
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.target.value);
    },
    "aria-label": "Search Products"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "categories-navbar-section py-3 bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, loadingCategories ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    animation: "border",
    variant: "primary"
  })) : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "danger",
    className: "text-center"
  }, error) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "justify-content-center flex-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Link, {
    className: "category-link ".concat(selectedCategory === null ? "active" : ""),
    onClick: function onClick() {
      return handleCategoryClick(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fa fa-th-large me-2",
    "aria-hidden": "true"
  }), " All")), categories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
      key: category.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Link, {
      className: "category-link ".concat(selectedCategory === category.id ? "active" : ""),
      onClick: function onClick() {
        return handleCategoryClick(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fa ".concat(category.icon, " me-2"),
      "aria-hidden": "true"
    }), " ", category.name));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "products-section py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center mb-5 text-capitalize"
  }, selectedCategory ? (_categories$find = categories.find(function (cat) {
    return cat.id === selectedCategory;
  })) === null || _categories$find === void 0 ? void 0 : _categories$find.name : "All Products"), loadingProducts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    animation: "border",
    variant: "primary"
  })) : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "danger",
    className: "text-center"
  }, error) : products.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, products.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      md: 3,
      key: product.id,
      className: "mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "h-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      onClick: function onClick() {
        return handleProductClick(product);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Img, {
      variant: "top",
      src: "".concat(window.ENV.REACT_APP_API_URL, "/storage/").concat(product.image_url),
      alt: "".concat(product.name, " image"),
      loading: "lazy"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Body, {
      className: "d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Title, null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Price:"), " $", product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Text, {
      className: "flex-grow-1"
    }, product.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
      variant: "primary",
      onClick: function onClick(e) {
        e.stopPropagation();
        addToCart(product);
      }
    }, "Add to Cart"))));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "No products found."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductModalComponent_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    show: showModal,
    onClose: handleCloseModal,
    product: modalProduct,
    onAddToCart: addToCart
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPage);

/***/ }),

/***/ "./jsx/ProductsPage.jsx":
/*!******************************!*\
  !*** ./jsx/ProductsPage.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Snackbar/Snackbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.development.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




var StyledCard = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 16px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var ProductInfo = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n"])));
var ProductImage = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])('img')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  max-width: 100px;\n  max-height: 100px;\n  object-fit: cover;\n  border-radius: 4px;\n"])));
var ProductsPage = function ProductsPage() {
  var _window$ENV;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    products = _useState2[0],
    setProducts = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    categories = _useState4[0],
    setCategories = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      id: '',
      brand: '',
      name: '',
      description: '',
      specifications: '',
      price: '',
      onsale_price: '',
      stock: '',
      is_featured: false,
      category_id: '',
      image_url: '',
      image_file: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    formData = _useState6[0],
    setFormData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isEditing = _useState8[0],
    setIsEditing = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    snackbarMessage = _useState10[0],
    setSnackbarMessage = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('success'),
    _useState12 = _slicedToArray(_useState11, 2),
    snackbarSeverity = _useState12[0],
    setSnackbarSeverity = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    snackbarOpen = _useState14[0],
    setSnackbarOpen = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    formVisible = _useState16[0],
    setFormVisible = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    imagePreview = _useState18[0],
    setImagePreview = _useState18[1];
  var API_URL = ((_window$ENV = window.ENV) === null || _window$ENV === void 0 ? void 0 : _window$ENV.REACT_APP_API_URL) || 'http://localhost:8000';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchProducts();
    fetchCategories();
  }, []);
  var fetchProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(API_URL, "/api/product"));
          case 3:
            response = _context.sent;
            setProducts(response.data.data || []);
            _context.next = 13;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error("Error fetching products:", _context.t0);
            setSnackbarMessage('Failed to fetch products.');
            setSnackbarSeverity('error');
            handleSnackbarOpen();
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function fetchProducts() {
      return _ref.apply(this, arguments);
    };
  }();
  var fetchCategories = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(API_URL, "/api/category"));
          case 3:
            response = _context2.sent;
            setCategories(response.data.data || []);
            _context2.next = 13;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error("Error fetching categories:", _context2.t0);
            setSnackbarMessage('Failed to fetch categories.');
            setSnackbarSeverity('error');
            handleSnackbarOpen();
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function fetchCategories() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value,
      type = _e$target.type,
      checked = _e$target.checked;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, name, type === 'checkbox' ? checked : value)));
  };
  var handleFileChange = function handleFileChange(e) {
    var file = e.target.files[0];
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      image_file: file
    }));
    if (file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };
  var handleImageUpload = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(file) {
      var formData, response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            formData = new FormData();
            formData.append('file', file);
            _context3.prev = 2;
            _context3.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("".concat(API_URL, "/api/upload/product"), formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
          case 5:
            response = _context3.sent;
            if (!(response.data.status === 0)) {
              _context3.next = 10;
              break;
            }
            return _context3.abrupt("return", response.data.data.path);
          case 10:
            throw new Error(response.data.msg || 'Failed to upload image');
          case 11:
            _context3.next = 17;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](2);
            console.error('Error uploading image:', _context3.t0);
            throw _context3.t0;
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 13]]);
    }));
    return function handleImageUpload(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
      var imagePath, productData;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            e.preventDefault();
            _context4.prev = 1;
            imagePath = formData.image_url;
            if (!formData.image_file) {
              _context4.next = 7;
              break;
            }
            _context4.next = 6;
            return handleImageUpload(formData.image_file);
          case 6:
            imagePath = _context4.sent;
          case 7:
            productData = _objectSpread(_objectSpread({}, formData), {}, {
              image_url: imagePath
            });
            if (!isEditing) {
              _context4.next = 14;
              break;
            }
            _context4.next = 11;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("".concat(API_URL, "/api/product/").concat(formData.id), productData);
          case 11:
            setSnackbarMessage('Product updated successfully!');
            _context4.next = 17;
            break;
          case 14:
            _context4.next = 16;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("".concat(API_URL, "/api/product"), productData);
          case 16:
            setSnackbarMessage('Product added successfully!');
          case 17:
            setSnackbarSeverity('success');
            fetchProducts();
            resetForm();
            closeForm();
            handleSnackbarOpen();
            _context4.next = 30;
            break;
          case 24:
            _context4.prev = 24;
            _context4.t0 = _context4["catch"](1);
            console.error("Error saving product:", _context4.t0);
            setSnackbarMessage('Failed to save product.');
            setSnackbarSeverity('error');
            handleSnackbarOpen();
          case 30:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 24]]);
    }));
    return function handleSubmit(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleEdit = function handleEdit(product) {
    setFormData(_objectSpread(_objectSpread({}, product), {}, {
      is_featured: product.is_featured === 1,
      image_file: null
    }));
    setIsEditing(true);
    setImagePreview(null);
    openForm();
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!window.confirm("Are you sure you want to delete this product?")) {
              _context5.next = 16;
              break;
            }
            _context5.prev = 1;
            _context5.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].delete("".concat(API_URL, "/api/product/").concat(id));
          case 4:
            fetchProducts();
            setSnackbarMessage('Product deleted successfully!');
            setSnackbarSeverity('success');
            handleSnackbarOpen();
            _context5.next = 16;
            break;
          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](1);
            console.error("Error deleting product:", _context5.t0);
            setSnackbarMessage('Failed to delete product.');
            setSnackbarSeverity('error');
            handleSnackbarOpen();
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 10]]);
    }));
    return function handleDelete(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
  var resetForm = function resetForm() {
    setFormData({
      id: '',
      brand: '',
      name: '',
      description: '',
      specifications: '',
      price: '',
      onsale_price: '',
      stock: '',
      is_featured: false,
      category_id: '',
      image_url: '',
      image_file: null
    });
    setIsEditing(false);
    setImagePreview(null);
  };
  var openForm = function openForm() {
    setFormVisible(true);
  };
  var closeForm = function closeForm() {
    setFormVisible(false);
    resetForm();
  };
  var handleSnackbarOpen = function handleSnackbarOpen() {
    setSnackbarOpen(true);
  };
  var handleSnackbarClose = function handleSnackbarClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h4",
    gutterBottom: true
  }, "Manage Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    color: "primary",
    onClick: openForm
  }, "Add Product"), formVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit,
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    label: "Brand",
    name: "brand",
    value: formData.brand,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    label: "Product Name",
    name: "name",
    value: formData.name,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    label: "Description",
    name: "description",
    value: formData.description,
    onChange: handleChange,
    multiline: true,
    rows: 4,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    label: "Specifications",
    name: "specifications",
    value: formData.specifications,
    onChange: handleChange,
    multiline: true,
    rows: 4,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    label: "Price",
    name: "price",
    type: "number",
    value: formData.price,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    label: "On Sale Price",
    name: "onsale_price",
    type: "number",
    value: formData.onsale_price,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    label: "Stock",
    name: "stock",
    type: "number",
    value: formData.stock,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fullWidth: true,
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "category-label"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    labelId: "category-label",
    name: "category_id",
    value: formData.category_id,
    onChange: handleChange
  }, categories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: category.id,
      value: category.id
    }, category.name);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    accept: "image/*",
    type: "file",
    onChange: handleFileChange,
    style: {
      display: 'none'
    },
    id: "raised-button-file"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "raised-button-file"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    component: "span"
  }, "Upload Image")), imagePreview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: imagePreview,
    alt: "Preview",
    style: {
      marginTop: '10px',
      maxWidth: '200px',
      borderRadius: '4px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      checked: formData.is_featured,
      onChange: handleChange,
      name: "is_featured"
    }),
    label: "Featured Product"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    color: "primary",
    type: "submit"
  }, isEditing ? 'Update Product' : 'Add Product'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "text",
    onClick: closeForm,
    style: {
      marginLeft: '10px'
    }
  }, "Cancel")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, products.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledCard, {
      key: product.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProductInfo, null, product.image_url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProductImage, {
      src: "".concat(API_URL, "/storage/").concat(product.image_url),
      alt: product.name
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h6"
    }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "textSecondary"
    }, product.brand))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "small",
      color: "primary",
      onClick: function onClick() {
        return handleEdit(product);
      },
      sx: {
        marginRight: 1
      }
    }, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "small",
      color: "secondary",
      onClick: function onClick() {
        return handleDelete(product.id);
      }
    }, "Delete")));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: snackbarOpen,
    autoHideDuration: 6000,
    onClose: handleSnackbarClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onClose: handleSnackbarClose,
    severity: snackbarSeverity
  }, snackbarMessage)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsPage);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
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



//Static object to store profile data that can be accessed from other components
var ProfileData = {
  data: {
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
  }
};
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
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)(); // Initialize useHistory
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ProfileData.data = profileData;
  }, [profileData]);
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
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
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
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
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
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
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
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
  }, "Change Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-primary mt-4",
    onClick: function onClick() {
      return navigate("/history");
    } // Navigate to Purchase History
  }, "Show Purchase History"));
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

/***/ "./jsx/Thankyou.jsx":
/*!**************************!*\
  !*** ./jsx/Thankyou.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var Thankyou = function Thankyou() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    status = _useState2[0],
    setStatus = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    customerEmail = _useState4[0],
    setCustomerEmail = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var sessionId = urlParams.get("session_id");
    var token = localStorage.getItem("token");
    fetch("http://localhost:8000/api/order/checkout/status", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      method: "POST",
      body: JSON.stringify({
        session_id: sessionId
      })
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setStatus(data.data.status);
      setCustomerEmail(data.data.customer_email);
    });
  }, []);
  if (status === "open") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Navigate, {
      to: "/payment"
    });
  }
  if (status === "complete") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      id: "success",
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We appreciate your business! A confirmation email will be sent to", " ", customerEmail, ". If you have any questions, please email", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "mailto:orders@example.com"
    }, "orders@primemart.com"), "."));
  }
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thankyou);

/***/ }),

/***/ "./jsx/UsersPage.jsx":
/*!***************************!*\
  !*** ./jsx/UsersPage.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Snackbar/Snackbar.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Search.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Delete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






// Set up axios defaults
axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.baseURL = 'http://localhost:8000'; // Adjust this to your Laravel backend URL

// Add a request interceptor
axios__WEBPACK_IMPORTED_MODULE_1__["default"].interceptors.request.use(function (config) {
  var token = localStorage.getItem('token');
  config.headers.Authorization = token ? "Bearer ".concat(token) : '';
  return config;
});
var UsersPage = function UsersPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    users = _useState2[0],
    setUsers = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openDialog = _useState4[0],
    setOpenDialog = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedUser = _useState6[0],
    setSelectedUser = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      username: '',
      email: '',
      password: ''
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    formData = _useState8[0],
    setFormData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    searchTerm = _useState10[0],
    setSearchTerm = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      open: false,
      message: '',
      severity: 'success'
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    snackbar = _useState12[0],
    setSnackbar = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    error = _useState16[0],
    setError = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchUsers();
  }, []);
  var fetchUsers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading(true);
            setError(null);
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/user', {
              params: {
                username: searchTerm
              }
            });
          case 5:
            response = _context.sent;
            setUsers(response.data.data || []);
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.error('Error fetching users:', _context.t0);
            setError('Failed to fetch users. Please try again.');
          case 13:
            _context.prev = 13;
            setLoading(false);
            return _context.finish(13);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9, 13, 16]]);
    }));
    return function fetchUsers() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleOpenDialog = function handleOpenDialog() {
    var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    setSelectedUser(user);
    setFormData(user ? {
      username: user.username,
      email: user.email
    } : {
      username: '',
      email: '',
      password: ''
    });
    setOpenDialog(true);
  };
  var handleCloseDialog = function handleCloseDialog() {
    setOpenDialog(false);
    setSelectedUser(null);
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };
  var handleInputChange = function handleInputChange(e) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var _error$response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            _context2.prev = 1;
            if (!selectedUser) {
              _context2.next = 8;
              break;
            }
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/user/profile/basic', formData);
          case 5:
            showSnackbar('User updated successfully', 'success');
            _context2.next = 11;
            break;
          case 8:
            _context2.next = 10;
            return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/user/register', formData);
          case 10:
            showSnackbar('User added successfully', 'success');
          case 11:
            handleCloseDialog();
            fetchUsers();
            _context2.next = 19;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](1);
            console.error('Error saving user:', _context2.t0);
            showSnackbar("Error: ".concat(((_error$response = _context2.t0.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || 'Failed to save user'), 'error');
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 15]]);
    }));
    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(userId) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!window.confirm('Are you sure you want to delete this user?')) {
              _context3.next = 12;
              break;
            }
            _context3.prev = 1;
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_1__["default"].delete("/api/user/".concat(userId));
          case 4:
            showSnackbar('User deleted successfully', 'success');
            fetchUsers();
            _context3.next = 12;
            break;
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.error('Error deleting user:', _context3.t0);
            showSnackbar('Failed to delete user', 'error');
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 8]]);
    }));
    return function handleDelete(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleSearch = function handleSearch() {
    fetchUsers();
  };
  var showSnackbar = function showSnackbar(message, severity) {
    setSnackbar({
      open: true,
      message: message,
      severity: severity
    });
  };
  var handleCloseSnackbar = function handleCloseSnackbar() {
    setSnackbar(_objectSpread(_objectSpread({}, snackbar), {}, {
      open: false
    }));
  };
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "error",
      variant: "h6"
    }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "contained",
      color: "primary",
      onClick: fetchUsers
    }, "Try Again"));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h4",
    gutterBottom: true
  }, "User Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    placeholder: "Search users",
    value: searchTerm,
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    },
    InputProps: {
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        position: "end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: handleSearch
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__["default"], null)))
    },
    style: {
      marginBottom: '20px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    onClick: function onClick() {
      return handleOpenDialog();
    },
    style: {
      marginBottom: '20px'
    }
  }, "Add User"), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, users.length > 0 ? users.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: user.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleOpenDialog(user);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_18__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return handleDelete(user.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], null))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    colSpan: 3
  }, "No users found"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: openDialog,
    onClose: handleCloseDialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, selectedUser ? 'Edit User' : 'Add User'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    autoFocus: true,
    margin: "dense",
    name: "username",
    label: "Username",
    type: "text",
    fullWidth: true,
    value: formData.username,
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    margin: "dense",
    name: "email",
    label: "Email Address",
    type: "email",
    fullWidth: true,
    value: formData.email,
    onChange: handleInputChange
  }), !selectedUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    margin: "dense",
    name: "password",
    label: "Password",
    type: "password",
    fullWidth: true,
    value: formData.password,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleCloseDialog
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleSubmit,
    color: "primary"
  }, selectedUser ? 'Update' : 'Add'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: snackbar.open,
    autoHideDuration: 6000,
    onClose: handleCloseSnackbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
    onClose: handleCloseSnackbar,
    severity: snackbar.severity
  }, snackbar.message)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersPage);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _NavPage_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavPage.jsx */ "./jsx/NavPage.jsx");
/* harmony import */ var _Footer_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.jsx */ "./jsx/Footer.jsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Register_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Register.jsx */ "./jsx/Register.jsx");
/* harmony import */ var _Products_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Products.jsx */ "./jsx/Products.jsx");
/* harmony import */ var _Cart_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Cart.jsx */ "./jsx/Cart.jsx");
/* harmony import */ var _Login_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Login.jsx */ "./jsx/Login.jsx");
/* harmony import */ var _ProductDetails_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProductDetails.jsx */ "./jsx/ProductDetails.jsx");
/* harmony import */ var _Profile_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Profile.jsx */ "./jsx/Profile.jsx");
/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/styles.css */ "./public/styles.css");
/* harmony import */ var _HomePage_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HomePage.jsx */ "./jsx/HomePage.jsx");
/* harmony import */ var _logout_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logout.jsx */ "./jsx/logout.jsx");
/* harmony import */ var _Payment_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Payment.jsx */ "./jsx/Payment.jsx");
/* harmony import */ var _Thankyou_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Thankyou.jsx */ "./jsx/Thankyou.jsx");
/* harmony import */ var _Reset_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Reset.jsx */ "./jsx/Reset.jsx");
/* harmony import */ var _ForgotPassword_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ForgotPassword.jsx */ "./jsx/ForgotPassword.jsx");
/* harmony import */ var _Admin_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Admin.jsx */ "./jsx/Admin.jsx");
/* harmony import */ var _AdminLayout_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AdminLayout.jsx */ "./jsx/AdminLayout.jsx");
/* harmony import */ var _ProductsPage_jsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ProductsPage.jsx */ "./jsx/ProductsPage.jsx");
/* harmony import */ var _CategoriesPage_jsx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./CategoriesPage.jsx */ "./jsx/CategoriesPage.jsx");
/* harmony import */ var _UsersPage_jsx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./UsersPage.jsx */ "./jsx/UsersPage.jsx");
/* harmony import */ var _Checkout_jsx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Checkout.jsx */ "./jsx/Checkout.jsx");
/* harmony import */ var _purchaseHistory_jsx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./purchaseHistory.jsx */ "./jsx/purchaseHistory.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





























// Main application component
var App = function App() {
  // State for authentication and admin status
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!localStorage.getItem("token")),
    _useState2 = _slicedToArray(_useState, 2),
    isAuthenticated = _useState2[0],
    setIsAuthenticated = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem("is_admin") === "true"),
    _useState4 = _slicedToArray(_useState3, 1),
    isAdmin = _useState4[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-column min-vh-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavPage_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "PrimeMart",
    isAuthenticated: isAuthenticated,
    isAdmin: isAdmin,
    setIsAuthenticated: setIsAuthenticated
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "flex-grow-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HomePage_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Register_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setIsAuthenticated: setIsAuthenticated
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/cart",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Cart_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/product/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductDetails_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Profile_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/logout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_logout_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], {
      setIsAuthenticated: setIsAuthenticated
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/forgot-password",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ForgotPassword_jsx__WEBPACK_IMPORTED_MODULE_19__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/reset-password",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Reset_jsx__WEBPACK_IMPORTED_MODULE_18__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/checkout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Checkout_jsx__WEBPACK_IMPORTED_MODULE_25__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/payment",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Payment_jsx__WEBPACK_IMPORTED_MODULE_16__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/thankyou",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Thankyou_jsx__WEBPACK_IMPORTED_MODULE_17__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/history",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_purchaseHistory_jsx__WEBPACK_IMPORTED_MODULE_26__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "/admin",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AdminLayout_jsx__WEBPACK_IMPORTED_MODULE_21__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Admin_jsx__WEBPACK_IMPORTED_MODULE_20__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductsPage_jsx__WEBPACK_IMPORTED_MODULE_22__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "categories",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CategoriesPage_jsx__WEBPACK_IMPORTED_MODULE_23__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.Route, {
    path: "users",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UsersPage_jsx__WEBPACK_IMPORTED_MODULE_24__["default"], null)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};

// Root container element
var container = document.getElementById("contents");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


 // Make sure to import axios

var Logout = function Logout(_ref) {
  var setIsAuthenticated = _ref.setIsAuthenticated;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var handleLogout = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('http://localhost:8000/api/user/logout', {}, {
              headers: {
                'Authorization': "Bearer ".concat(localStorage.getItem('token'))
              }
            });
          case 3:
            // Remove the token and isLoggedIn from localStorage
            localStorage.removeItem("token");
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("is_admin");

            // Update authentication state
            setIsAuthenticated(false);

            // Redirect to the login page
            navigate("/login");
            _context.next = 17;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error("Logout failed", _context.t0);
            // Even if the server request fails, still clear local storage and redirect
            localStorage.removeItem("token");
            localStorage.removeItem("isLoggedIn");
            setIsAuthenticated(false);
            navigate("/login");
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    return function handleLogout() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleLogout,
    className: "btn btn-danger"
  }, "Logout"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);

/***/ }),

/***/ "./jsx/purchaseHistory.jsx":
/*!*********************************!*\
  !*** ./jsx/purchaseHistory.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var PurchaseHistory = function PurchaseHistory() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    orders = _useState2[0],
    setOrders = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var fetchOrders = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var token, response, fetchedOrders;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            token = localStorage.getItem("token");
            setLoading(true);
            setError(null);
            _context.prev = 3;
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("http://localhost:8000/api/order", {
              headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json"
              }
            });
          case 6:
            response = _context.sent;
            fetchedOrders = response.data.data || [];
            setOrders(fetchedOrders);
            _context.next = 15;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            console.error("Error fetching orders:", _context.t0);
            setError("Failed to fetch order history. Please try again.");
          case 15:
            _context.prev = 15;
            setLoading(false);
            return _context.finish(15);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 11, 15, 18]]);
    }));
    return function fetchOrders() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchOrders();
  }, []);
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container text-center mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "spinner-border",
      role: "status"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "sr-only"
    }, "Loading...")));
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container text-center mt-5 text-danger"
    }, error);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "order-history-container container mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    initial: {
      opacity: 0,
      y: -20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.5
    },
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header bg-primary text-white text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Order History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, orders.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-center"
  }, "No orders found.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Order ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Status"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, orders.map(function (order, index // Corrected 'order' usage
  ) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: order.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, order.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, new Date(order.created_at).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "$", typeof order.total_amount === "number" && !isNaN(order.total_amount) ? order.total_amount.toFixed(2) : "0.00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "badge ".concat(order.status === "complete" ? "bg-success" : "bg-warning text-dark")
    }, order.status)));
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchaseHistory);

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
  transition: box-shadow 0.3s ease;
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
  transition: border-color 0.3s ease;
}

.register-form input:focus,
.login-form input:focus,
.forgot-password-form input:focus {
  border-color: #00bfa6;
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
  transition: background-color 0.3s ease;
}

.register-form button:hover,
.login-form button:hover,
.forgot-password-form button:hover {
  background-color: #019f87;
}

/* Links */
.login-link,
.register-link,
.reset-link {
  margin-top: 20px;
}

.login-link a,
.register-link a {
  color: #007bff;
  text-decoration: none;
  text-decoration: underline;
}

.reset-link a {
  color: #ff0400;
  text-decoration: none;
  text-decoration: underline;
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
  font-size: 14px;
  margin: -10px 0 10px;
}

.success {
  color: #28a745;
  font-size: 14px;
  margin: -10px 0 10px;
}

/* Navbar Styles */
.custom-navbar {
  background-color: rgb(2, 115, 159);
  padding: 0 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img {
  max-width: 18%;
  height: auto;
}

/* Update navbar for mobile view */
@media (max-width: 768px) {
  .custom-navbar .navbar-nav {
    position: absolute;
    right: 0;
    top: 60px;
    background-color: rgb(2, 115, 159);
    width: 100%;
    display: none;
    flex-direction: column;
  }

  .custom-navbar.active .navbar-nav {
    display: flex;
  }

  .navbar-toggle {
    display: block;
    cursor: pointer;
  }
}

.custom-navbar .navbar-brand {
  font-size: 36px;
  color: white;
  font-weight: bold;
}

.custom-navbar .navbar-nav .nav-link {
  color: white;
  font-size: 24px;
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
  align-items: center;
  text-align: center;
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
}

.btn-outline-success:hover {
  background-color: #00bfa6;
  color: white;
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
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
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

button:hover,
.profile-img:hover {
  animation: pulse 0.3s ease-in-out;
}

/* HomePage.css */

/* CSS Variables for Consistent Theming */
:root {
  --primary-color: #28a745; /* Bootstrap Success */
  --secondary-color: #17a2b8; /* Bootstrap Info */
  --accent-color: #ffc107; /* Bootstrap Warning */
  --light-bg: #f9f9f9;
  --dark-text: #343a40;
  --font-family: "Roboto", sans-serif;
}

/* Global Styles */
body {
  font-family: var(--font-family);
  color: var(--dark-text);
}

/* Hero Section */
.hero-section h1 {
  font-size: 3rem;
  margin-top: 20px;
  font-weight: 700;
}

.hero-section img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.hero-section .btn {
  padding: 10px 20px;
  font-size: 18px;
}

/* Testimonials Section */
.testimonials-section {
  background-color: var(--light-bg);
  padding: 30px 0;
}

.testimonials-section h2 {
  text-align: center;
}

.testimonials-section .testimonial {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .navbar-brand {
    font-size: 28px;
  }

  .navbar-nav .nav-link {
    font-size: 20px;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .register-form,
  .login-form,
  .forgot-password-form {
    max-width: 90%;
  }

  .testimonials-section .testimonial {
    margin: 5px 0;
  }

  .profile-img {
    width: 200px;
    height: 200px;
  }
}

/* Product Card Container */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Card Image Hover Effect */
.card-img-top {
  display: block;
  padding-left: 30px;
  margin: 0 auto;
  width: 100%;
  height: 400px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

/* Card Body */
.card-body {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: ; */
}

/* Card Title */
.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

/* Card Price */
.card-text {
  font-size: 1rem;
  color: #07260e;
  margin-bottom: 15px;
}

/* Add to Cart Button */
.card-body .btn {
  background-color: #0d4cdf;
  color: white;
  font-size: 1rem;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: inline-block;
}

.card-body .btn:hover {
  background-color: #019f87;
  transform: translateY(-2px);
}

/* Mobile-first approach */
.checkout-container {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: auto;
}

.checkout-form,
.order-summary {
  padding: 1.5rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.order-summary {
  margin-top: 2rem;
}

.form-section-title,
.order-summary-title {
  color: #007bff;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.form-actions {
  display: flex;
  flex-direction: column;
}

.checkout-button,
.back-button {
  width: 100%;
  margin-top: 1rem;
}

/* Tablet and larger screens */
@media (min-width: 768px) {
  .checkout-container {
    flex-direction: row;
    gap: 2rem;
    max-width: 1800px;
  }

  .checkout-form {
    flex: 2;
    max-width: 1200px;
  }

  .order-summary {
    flex: 1;
    max-width: 600px;
    height: fit-content;
    margin-top: 0;
  }

  .form-actions {
    flex-direction: row;
    justify-content: space-between;
  }

  .checkout-button,
  .back-button {
    width: auto;
    margin-top: 0;
  }
}

/* General Styling */

.enhanced-container {
  margin-top: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
  color: #3a3b3c;
  margin-bottom: 1rem;
}
.card {
  display: flex;
  flex-direction: column;
}

.card-body {
  flex: 1 0 auto;
}

.card-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.card-footer .btn {
  width: 100%;
  max-width: 200px;
}
/* Increase the size of categories link */
.category-link {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.category-link:hover,
.category-link.active {
  background-color: rgba(0, 0, 0, 0.1);
  color: var(--primary-color);
}
.order-info {
  font-size: 14px;
}

.item-thumbnail {
  position: relative;
  display: inline-block;
}

.item-thumbnail img {
  border-radius: 5px;
  border: 1px solid #ddd;
}

.item-quantity {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #007bff;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 50%;
}
.order-summary {
  border: none;
  background-color: #f8f9fa;
  padding: 20px;
}
.card-body {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
}
.summary-title {
  font-size: 1.5rem;
  color: #343a40;
  border-bottom: 2px solid #dee2e6;
  padding-bottom: 10px;
  padding-left: 0;
  align-items: left;
}

.subtotal-price,
.savings-amount,
.subtotal-after,
.delivery-free,
.total-amount,
.tax {
  font-weight: 600;
  color: #007bff;
  padding-left: 80px;
}

.savings {
  color: #dc3545;
}

.tax-details {
  font-size: 0.9rem;
}

.estimated-total strong {
  font-size: 1.25rem;
}

.small-note {
  font-size: 0.85rem;
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.summary {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
}
`, "",{"version":3,"sources":["webpack://./public/styles.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;;;EAGE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA,gBAAgB;AAChB;;;EAGE,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,0CAA0C;EAC1C,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;;;EAGE,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;;AAEA,iBAAiB;AACjB;;;EAGE,WAAW;EACX,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,kCAAkC;AACpC;;AAEA;;;EAGE,qBAAqB;AACvB;;AAEA,YAAY;AACZ;;;EAGE,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,sCAAsC;AACxC;;AAEA;;;EAGE,yBAAyB;AAC3B;;AAEA,UAAU;AACV;;;EAGE,gBAAgB;AAClB;;AAEA;;EAEE,cAAc;EACd,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;;;;EAIE,0BAA0B;AAC5B;;AAEA,+BAA+B;AAC/B;EACE,cAAc;EACd,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,oBAAoB;AACtB;;AAEA,kBAAkB;AAClB;EACE,kCAAkC;EAClC,iBAAiB;EACjB,yCAAyC;EACzC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA,kCAAkC;AAClC;EACE;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,kCAAkC;IAClC,WAAW;IACX,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,cAAc;IACd,eAAe;EACjB;AACF;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,2BAA2B;AAC7B;;AAEA;;EAEE,cAAc;EACd,iBAAiB;AACnB;;AAEA,kBAAkB;AAClB;EACE,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA,4BAA4B;AAC5B;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,0CAA0C;EAC1C,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;AACxB;;AAEA,gCAAgC;AAChC;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,kBAAkB;AACpB;;AAEA,0CAA0C;AAC1C;EACE,qBAAqB;EACrB,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,6DAA6D;AAC7D;EACE,iBAAiB;EACjB,eAAe;EACf,WAAW;AACb;;AAEA,0BAA0B;AAC1B;EACE,cAAc;EACd,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA,mBAAmB;AACnB;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;AACb;;AAEA,iBAAiB;AACjB;EACE,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,cAAc;AAChB;;AAEA,4BAA4B;AAC5B;;EAEE,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,yBAAyB;EACzB,eAAe;EACf,gCAAgC;AAClC;;AAEA;;EAEE,qBAAqB;EACrB,4CAA4C;AAC9C;;AAEA,0BAA0B;AAC1B;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,4DAA4D;EAC5D,yCAAyC;AAC3C;;AAEA;EACE,yBAAyB;EACzB,0CAA0C;AAC5C;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,0CAA0C;EAC1C,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,sBAAsB;AACxB;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA,iBAAiB;;AAEjB,yCAAyC;AACzC;EACE,wBAAwB,EAAE,sBAAsB;EAChD,0BAA0B,EAAE,mBAAmB;EAC/C,uBAAuB,EAAE,sBAAsB;EAC/C,mBAAmB;EACnB,oBAAoB;EACpB,mCAAmC;AACrC;;AAEA,kBAAkB;AAClB;EACE,+BAA+B;EAC/B,uBAAuB;AACzB;;AAEA,iBAAiB;AACjB;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA,yBAAyB;AACzB;EACE,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA,qCAAqC;AACrC;EACE;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;;;IAGE,cAAc;EAChB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;AACF;;AAEA,2BAA2B;AAC3B;EACE,qDAAqD;EACrD,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,wCAAwC;AAC1C;;AAEA;EACE,2BAA2B;EAC3B,2CAA2C;AAC7C;;AAEA,4BAA4B;AAC5B;EACE,cAAc;EACd,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;AACxB;;AAEA,cAAc;AACd;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,eAAe;AACf;EACE,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;AACb;;AAEA,eAAe;AACf;EACE,eAAe;EACf,cAAc;EACd,mBAAmB;AACrB;;AAEA,uBAAuB;AACvB;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,2DAA2D;EAC3D,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA,0BAA0B;AAC1B;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,YAAY;AACd;;AAEA;;EAEE,eAAe;EACf,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,0CAA0C;AAC5C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,cAAc;EACd,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,WAAW;EACX,gBAAgB;AAClB;;AAEA,8BAA8B;AAC9B;EACE;IACE,mBAAmB;IACnB,SAAS;IACT,iBAAiB;EACnB;;EAEA;IACE,OAAO;IACP,iBAAiB;EACnB;;EAEA;IACE,OAAO;IACP,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;EACf;;EAEA;IACE,mBAAmB;IACnB,8BAA8B;EAChC;;EAEA;;IAEE,WAAW;IACX,aAAa;EACf;AACF;;AAEA,oBAAoB;;AAEpB;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;AACA,yCAAyC;AACzC;EACE,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,uDAAuD;AACzD;;AAEA;;EAEE,oCAAoC;EACpC,2BAA2B;AAC7B;AACA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,gCAAgC;EAChC,oBAAoB;EACpB,eAAe;EACf,iBAAiB;AACnB;;AAEA;;;;;;EAME,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB","sourcesContent":["/* General Container Styles */\r\n.register-container,\r\n.login-container,\r\n.forgot-password-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 80vh;\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n/* Form Styles */\r\n.register-form,\r\n.login-form,\r\n.forgot-password-form {\r\n  background-color: white;\r\n  padding: 30px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\r\n  max-width: 400px;\r\n  width: 100%;\r\n  text-align: center;\r\n  transition: box-shadow 0.3s ease;\r\n}\r\n\r\n.register-form h2,\r\n.login-form h2,\r\n.forgot-password-form h2 {\r\n  margin-bottom: 20px;\r\n  font-family: Arial, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n/* Input Fields */\r\n.register-form input,\r\n.login-form input,\r\n.forgot-password-form input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n  transition: border-color 0.3s ease;\r\n}\r\n\r\n.register-form input:focus,\r\n.login-form input:focus,\r\n.forgot-password-form input:focus {\r\n  border-color: #00bfa6;\r\n}\r\n\r\n/* Buttons */\r\n.register-form button,\r\n.login-form button,\r\n.forgot-password-form button {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background-color: #00bfa6;\r\n  border: none;\r\n  color: white;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  margin-top: 20px;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.register-form button:hover,\r\n.login-form button:hover,\r\n.forgot-password-form button:hover {\r\n  background-color: #019f87;\r\n}\r\n\r\n/* Links */\r\n.login-link,\r\n.register-link,\r\n.reset-link {\r\n  margin-top: 20px;\r\n}\r\n\r\n.login-link a,\r\n.register-link a {\r\n  color: #007bff;\r\n  text-decoration: none;\r\n  text-decoration: underline;\r\n}\r\n\r\n.reset-link a {\r\n  color: #ff0400;\r\n  text-decoration: none;\r\n  text-decoration: underline;\r\n}\r\n\r\n.login-link a:hover,\r\n.register-link a:hover,\r\n.forgot-password-link a:hover,\r\n.reset-link a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* Error and Success Messages */\r\n.error {\r\n  color: #ff3333;\r\n  font-size: 14px;\r\n  margin: -10px 0 10px;\r\n}\r\n\r\n.success {\r\n  color: #28a745;\r\n  font-size: 14px;\r\n  margin: -10px 0 10px;\r\n}\r\n\r\n/* Navbar Styles */\r\n.custom-navbar {\r\n  background-color: rgb(2, 115, 159);\r\n  padding: 0 1.5rem;\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo-img {\r\n  max-width: 18%;\r\n  height: auto;\r\n}\r\n\r\n/* Update navbar for mobile view */\r\n@media (max-width: 768px) {\r\n  .custom-navbar .navbar-nav {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 60px;\r\n    background-color: rgb(2, 115, 159);\r\n    width: 100%;\r\n    display: none;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .custom-navbar.active .navbar-nav {\r\n    display: flex;\r\n  }\r\n\r\n  .navbar-toggle {\r\n    display: block;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.custom-navbar .navbar-brand {\r\n  font-size: 36px;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.custom-navbar .navbar-nav .nav-link {\r\n  color: white;\r\n  font-size: 24px;\r\n  transition: color 0.3s ease;\r\n}\r\n\r\n.custom-navbar .navbar-nav .nav-link:hover,\r\n.custom-navbar .navbar-nav .nav-link.active {\r\n  color: #31c27a;\r\n  font-weight: bold;\r\n}\r\n\r\n/* Footer Styles */\r\n.custom-footer {\r\n  background-color: rgb(2, 115, 159);\r\n  color: white;\r\n  text-align: center;\r\n  padding: 1.5rem 0;\r\n  font-size: 18px;\r\n}\r\n\r\n/* Account Settings Layout */\r\n.container {\r\n  max-width: 1600px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n}\r\n\r\n.profile-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.profile-img {\r\n  width: 250px;\r\n  height: 250px;\r\n  margin-bottom: 20px;\r\n  border-radius: 50%;\r\n  object-fit: cover;\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.profile-img:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n/* Hide the default file input */\r\n.custom-file-input {\r\n  visibility: hidden;\r\n  width: 0;\r\n  height: 0;\r\n  position: absolute;\r\n}\r\n\r\n/* Style the label to look like a button */\r\n.custom-file-label {\r\n  display: inline-block;\r\n  padding: 8px 15px;\r\n  background-color: #0f8d1e;\r\n  color: white;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.custom-file-label:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n/* Style the container where selected file name will appear */\r\n.file-name {\r\n  margin-left: 15px;\r\n  font-size: 1rem;\r\n  color: #333;\r\n}\r\n\r\n/* Button Outline Styles */\r\n.btn-outline-success {\r\n  color: #00bfa6;\r\n  border-color: #00bfa6;\r\n  margin-top: 10px;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  background-color: #00bfa6;\r\n  color: white;\r\n}\r\n\r\n/* Section Titles */\r\n.section-title {\r\n  font-size: 1.8rem;\r\n  font-weight: 600;\r\n  margin-bottom: 20px;\r\n  color: #333;\r\n}\r\n\r\n/* Label Styles */\r\nlabel {\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  color: #555;\r\n  margin-bottom: 8px;\r\n  display: block;\r\n}\r\n\r\n/* Input and Select Styles */\r\ninput,\r\nselect {\r\n  height: 45px;\r\n  font-size: 1rem;\r\n  border-radius: 0.375rem;\r\n  border: 1px solid #ced4da;\r\n  padding: 0 15px;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\ninput:focus,\r\nselect:focus {\r\n  border-color: #00bfa6;\r\n  box-shadow: 0 0 0 2px rgba(0, 191, 166, 0.2);\r\n}\r\n\r\n/* Button General Styles */\r\nbutton {\r\n  font-size: 1.2rem;\r\n  padding: 12px 25px;\r\n  border-radius: 5px;\r\n  background-color: #00bfa6;\r\n  color: white;\r\n  border: none;\r\n  transition: background-color 0.3s ease, box-shadow 0.3s ease;\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #019f87;\r\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n/* Section Styles */\r\n.section {\r\n  padding: 30px;\r\n  background: white;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\r\n  margin-bottom: 50px;\r\n}\r\n\r\nhr {\r\n  margin: 50px 0;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\nbutton:hover,\r\n.profile-img:hover {\r\n  animation: pulse 0.3s ease-in-out;\r\n}\r\n\r\n/* HomePage.css */\r\n\r\n/* CSS Variables for Consistent Theming */\r\n:root {\r\n  --primary-color: #28a745; /* Bootstrap Success */\r\n  --secondary-color: #17a2b8; /* Bootstrap Info */\r\n  --accent-color: #ffc107; /* Bootstrap Warning */\r\n  --light-bg: #f9f9f9;\r\n  --dark-text: #343a40;\r\n  --font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n/* Global Styles */\r\nbody {\r\n  font-family: var(--font-family);\r\n  color: var(--dark-text);\r\n}\r\n\r\n/* Hero Section */\r\n.hero-section h1 {\r\n  font-size: 3rem;\r\n  margin-top: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n.hero-section img {\r\n  max-width: 100%;\r\n  height: auto;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.hero-section .btn {\r\n  padding: 10px 20px;\r\n  font-size: 18px;\r\n}\r\n\r\n/* Testimonials Section */\r\n.testimonials-section {\r\n  background-color: var(--light-bg);\r\n  padding: 30px 0;\r\n}\r\n\r\n.testimonials-section h2 {\r\n  text-align: center;\r\n}\r\n\r\n.testimonials-section .testimonial {\r\n  border: 1px solid #ddd;\r\n  border-radius: 8px;\r\n  padding: 20px;\r\n  margin: 10px;\r\n}\r\n\r\n/* Media Queries for Responsiveness */\r\n@media (max-width: 768px) {\r\n  .navbar-brand {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .navbar-nav .nav-link {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .hero-section h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .register-form,\r\n  .login-form,\r\n  .forgot-password-form {\r\n    max-width: 90%;\r\n  }\r\n\r\n  .testimonials-section .testimonial {\r\n    margin: 5px 0;\r\n  }\r\n\r\n  .profile-img {\r\n    width: 200px;\r\n    height: 200px;\r\n  }\r\n}\r\n\r\n/* Product Card Container */\r\n.card {\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card:hover {\r\n  transform: translateY(-8px);\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n/* Card Image Hover Effect */\r\n.card-img-top {\r\n  display: block;\r\n  padding-left: 30px;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  height: 400px;\r\n  object-fit: contain;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.card:hover .card-img-top {\r\n  transform: scale(1.05);\r\n}\r\n\r\n/* Card Body */\r\n.card-body {\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  /* align-items: ; */\r\n}\r\n\r\n/* Card Title */\r\n.card-title {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n  color: #333;\r\n}\r\n\r\n/* Card Price */\r\n.card-text {\r\n  font-size: 1rem;\r\n  color: #07260e;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n/* Add to Cart Button */\r\n.card-body .btn {\r\n  background-color: #0d4cdf;\r\n  color: white;\r\n  font-size: 1rem;\r\n  padding: 10px 15px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  transition: background-color 0.3s ease, transform 0.3s ease;\r\n  display: inline-block;\r\n}\r\n\r\n.card-body .btn:hover {\r\n  background-color: #019f87;\r\n  transform: translateY(-2px);\r\n}\r\n\r\n/* Mobile-first approach */\r\n.checkout-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.checkout-form,\r\n.order-summary {\r\n  padding: 1.5rem;\r\n  background-color: #f9f9f9;\r\n  border: 1px solid #ddd;\r\n  border-radius: 8px;\r\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.order-summary {\r\n  margin-top: 2rem;\r\n}\r\n\r\n.form-section-title,\r\n.order-summary-title {\r\n  color: #007bff;\r\n  font-size: 1.25rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-actions {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.checkout-button,\r\n.back-button {\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n}\r\n\r\n/* Tablet and larger screens */\r\n@media (min-width: 768px) {\r\n  .checkout-container {\r\n    flex-direction: row;\r\n    gap: 2rem;\r\n    max-width: 1800px;\r\n  }\r\n\r\n  .checkout-form {\r\n    flex: 2;\r\n    max-width: 1200px;\r\n  }\r\n\r\n  .order-summary {\r\n    flex: 1;\r\n    max-width: 600px;\r\n    height: fit-content;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .form-actions {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .checkout-button,\r\n  .back-button {\r\n    width: auto;\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n/* General Styling */\r\n\r\n.enhanced-container {\r\n  margin-top: 180px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.card-title {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  color: #3a3b3c;\r\n  margin-bottom: 1rem;\r\n}\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-body {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.card-footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.card-footer .btn {\r\n  width: 100%;\r\n  max-width: 200px;\r\n}\r\n/* Increase the size of categories link */\r\n.category-link {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  padding: 0.5rem 1rem;\r\n  transition: color 0.3s ease, background-color 0.3s ease;\r\n}\r\n\r\n.category-link:hover,\r\n.category-link.active {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  color: var(--primary-color);\r\n}\r\n.order-info {\r\n  font-size: 14px;\r\n}\r\n\r\n.item-thumbnail {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.item-thumbnail img {\r\n  border-radius: 5px;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.item-quantity {\r\n  position: absolute;\r\n  top: -5px;\r\n  right: -5px;\r\n  background-color: #007bff;\r\n  color: white;\r\n  font-size: 12px;\r\n  padding: 2px 6px;\r\n  border-radius: 50%;\r\n}\r\n.order-summary {\r\n  border: none;\r\n  background-color: #f8f9fa;\r\n  padding: 20px;\r\n}\r\n.card-body {\r\n  text-align: left;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: left;\r\n  align-items: left;\r\n}\r\n.summary-title {\r\n  font-size: 1.5rem;\r\n  color: #343a40;\r\n  border-bottom: 2px solid #dee2e6;\r\n  padding-bottom: 10px;\r\n  padding-left: 0;\r\n  align-items: left;\r\n}\r\n\r\n.subtotal-price,\r\n.savings-amount,\r\n.subtotal-after,\r\n.delivery-free,\r\n.total-amount,\r\n.tax {\r\n  font-weight: 600;\r\n  color: #007bff;\r\n  padding-left: 80px;\r\n}\r\n\r\n.savings {\r\n  color: #dc3545;\r\n}\r\n\r\n.tax-details {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.estimated-total strong {\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.small-note {\r\n  font-size: 0.85rem;\r\n  margin-top: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n.summary {\r\n  text-align: left;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: left;\r\n  align-items: left;\r\n}\r\n"],"sourceRoot":""}]);
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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