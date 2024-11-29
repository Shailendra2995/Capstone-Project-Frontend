import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Form, InputGroup, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import axios from "axios";
import { FaTruck, FaPercentage, FaReceipt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Provinces list
const PROVINCES = [
  { id: 1, name: "Alberta" },
  { id: 2, name: "British Columbia" },
  { id: 3, name: "Manitoba" },
  { id: 4, name: "New Brunswick" },
  { id: 5, name: "Newfoundland and Labrador" },
  { id: 6, name: "Nova Scotia" },
  { id: 7, name: "Northwest Territories" },
  { id: 8, name: "Nunavut" },
  { id: 9, name: "Ontario" },
  { id: 10, name: "Prince Edward Island" },
  { id: 11, name: "Quebec" },
  { id: 12, name: "Saskatchewan" },
  { id: 13, name: "Yukon" },
];

function CheckoutPage({
  initialProfileData = {
    email: "",
    phone: "",
    billingAddress: {},
    shippingAddress: {},
  },
}) {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [useBillingAsDelivery, setUseBillingAsDelivery] = useState(false);
  const [validated, setValidated] = useState(false);
  const [billingAddress, setBillingAddress] = useState({
    firstname: profileData?.billingAddress?.firstname || "",
    lastname: profileData?.billingAddress?.lastname || "",
    address: profileData?.billingAddress?.address || "",
    city: profileData?.billingAddress?.city || "",
    postcode: profileData?.billingAddress?.postcode || "",
    phone: profileData?.billingAddress?.phone || "",
    province_id: profileData?.billingAddress?.province_id || "",
  });
  const [shippingAddress, setShippingAddress] = useState({
    firstname: profileData?.shippingAddress?.firstname || "",
    lastname: profileData?.shippingAddress?.lastname || "",
    address: profileData?.shippingAddress?.address || "",
    city: profileData?.shippingAddress?.city || "",
    postcode: profileData?.shippingAddress?.postcode || "",
    phone: profileData?.shippingAddress?.phone || "",
    province_id: profileData?.shippingAddress?.province_id || "",
  });
  const [contactInfo, setContactInfo] = useState({
    email: profileData?.email || "",
    phone: profileData?.phone || "",
  });
  const [giftOption, setGiftOption] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const token = localStorage.getItem("token");
  const memoizedProvinces = useMemo(() => PROVINCES, []);

  // Correct postal code regex without delimiters
  const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  const navigate = useNavigate();

  const loadData = useCallback(async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:8000/api/user/profile",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const data = response.data;

      if (data.status === 0) {
        const { username, email, phone, billing_address, shipping_address } =
          data.data;

        setProfileData((prevState) => ({
          ...prevState,
          username,
          email,
          phone,
          profileImage: "http://localhost:8000/storage/" + data.data.photoUrl,
          billingAddress: {
            firstname: billing_address?.firstname || "",
            lastname: billing_address?.lastname || "",
            address: billing_address?.address || "",
            city: billing_address?.city || "",
            postcode: billing_address?.postcode || "",
            phone: billing_address?.phone || "",
            province_id: billing_address?.province_id || "",
          },
          shippingAddress: {
            firstname: shipping_address?.firstname || "",
            lastname: shipping_address?.lastname || "",
            address: shipping_address?.address || "",
            city: shipping_address?.city || "",
            postcode: shipping_address?.postcode || "",
            phone: shipping_address?.phone || "",
            province_id: shipping_address?.province_id || "",
          },
        }));

        setBillingAddress((prevState) => ({
          ...prevState,
          firstname: billing_address?.firstname || "",
          lastname: billing_address?.lastname || "",
          address: billing_address?.address || "",
          city: billing_address?.city || "",
          postcode: billing_address?.postcode || "",
          phone: billing_address?.phone || "",
          province_id: billing_address?.province_id || "",
        }));

        setShippingAddress((prevState) => ({
          ...prevState,
          firstname: shipping_address?.firstname || "",
          lastname: shipping_address?.lastname || "",
          address: shipping_address?.address || "",
          city: shipping_address?.city || "",
          postcode: shipping_address?.postcode || "",
          phone: shipping_address?.phone || "",
          province_id: shipping_address?.province_id || "",
        }));

        setContactInfo((prevState) => ({
          ...prevState,
          email,
          phone,
        }));
      } else {
        alert("Failed to load data: " + data.msg);
      }
    } catch (error) {
      console.error("Error loading data:", error);
      alert("Error loading data.");
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const validatePostalCode = (postcode) => {
    const cleanedPostcode = postcode.replace(/[\s-]/g, "");
    return postalCodeRegex.test(cleanedPostcode);
  };

  const validateForm = () => {
    const errors = {};
    const phoneRegex = /^(\+\d{1,2}\s?)?(\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);

    if (validateForm()) {
      const data = new FormData();
      data.append("email", contactInfo.email);
      data.append("phone", contactInfo.phone);
      data.append("include_gift", giftOption);

      Object.keys(billingAddress).forEach((key) => {
        data.append(`billing_address_${key}`, billingAddress[key]);
      });
      Object.keys(shippingAddress).forEach((key) => {
        data.append(`shipping_address_${key}`, shippingAddress[key]);
      });

      const requestOptions = {
        method: "POST",
        body: data,
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      fetch("http://localhost:8000/api/order/checkout", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 0) {
            alert("Order Placed successfully");
            setTimeout(
              () =>
                navigate("/payment", {
                  replace: true,
                  state: { clientSecret: data.data.clientSecret },
                }),
              1000
            ); // Redirect after 2 seconds
          } else {
            alert(data.message || "Checkout failed");
          }
        })
        .catch((error) => {
          console.error("Error submitting order:", error);
          alert(`Order submission failed: ${error.message}`);
        });
    }
  };

  const handleAddressChange = useCallback((e, addressType) => {
    const { name, value } = e.target;
    const updateFunction =
      addressType === "billing" ? setBillingAddress : setShippingAddress;

    updateFunction((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleContactInfoChange = (e) => {
    const { id, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="checkout-container container">
      <div className="checkout-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {/* Gift Options */}
          <Form.Group className="mb-3">
            <Form.Label className="form-section-title">Gift Options</Form.Label>
            <Form.Check
              type="checkbox"
              label="Order includes gift(s). The packing slip included with your order will not display prices."
              checked={giftOption}
              onChange={(e) => setGiftOption(e.target.checked)}
            />
          </Form.Group>

          {/* Billing Address */}
          <h4 className="form-section-title">Billing Address</h4>
          <AddressForm
            address={billingAddress}
            useProfileAddresses={false}
            handleAddressChange={(e) => handleAddressChange(e, "billing")}
            provinces={memoizedProvinces}
            addressType="billing"
            formErrors={formErrors}
          />

          {/* Delivery Address */}
          <h4 className="form-section-title">Delivery Address</h4>
          <Form.Check
            type="checkbox"
            label="Use as billing address"
            checked={useBillingAsDelivery}
            onChange={(e) => setUseBillingAsDelivery(e.target.checked)}
          />
          {!useBillingAsDelivery && (
            <AddressForm
              address={shippingAddress}
              useProfileAddresses={false}
              handleAddressChange={(e) => handleAddressChange(e, "shipping")}
              provinces={memoizedProvinces}
              addressType="shipping"
              formErrors={formErrors}
            />
          )}

          {/* Contact Info */}
          <ContactInfo
            contactInfo={contactInfo}
            handleContactInfoChange={handleContactInfoChange}
            formErrors={formErrors}
          />

          {/* Action Buttons */}
          <div className="form-actions mt-4">
            <Button variant="primary" type="submit" className="checkout-button">
              Checkout
            </Button>
            <Button variant="secondary" className="back-button">
              Back
            </Button>
          </div>
        </Form>
      </div>

      {/* Order Summary */}
      <OrderSummary giftOption={giftOption} />
    </div>
  );
}

// Prop Types
CheckoutPage.propTypes = {
  initialProfileData: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    billingAddress: PropTypes.shape({
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      postcode: PropTypes.string,
      phone: PropTypes.string,
      province_id: PropTypes.number,
    }),
    shippingAddress: PropTypes.shape({
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      postcode: PropTypes.string,
      phone: PropTypes.string,
      province_id: PropTypes.number,
    }),
  }),
};

// Address Form Component
function AddressForm({
  address,
  useProfileAddresses,
  handleAddressChange,
  provinces,
  addressType,
  formErrors,
}) {
  return (
    <section className="mb-5 section">
      <div className="row">
        {["firstname", "lastname", "address", "city", "postcode", "phone"].map(
          (field) => (
            <div className="col-md-6 mb-3" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type="text"
                name={field}
                className={`form-control ${
                  formErrors[
                    `${addressType}${
                      field.charAt(0).toUpperCase() + field.slice(1)
                    }`
                  ]
                    ? "is-invalid"
                    : ""
                }`}
                value={address[field] || ""}
                onChange={handleAddressChange}
                disabled={useProfileAddresses}
                // Apply pattern for postal code validation
                pattern={
                  field === "postcode"
                    ? "^[A-Za-z]\\d[A-Za-z][ -]?\\d[A-Za-z]\\d$"
                    : undefined
                }
                aria-label={`${
                  field.charAt(0).toUpperCase() + field.slice(1)
                } input`}
                aria-required="true"
              />
              {formErrors[
                `${addressType}${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }`
              ] && (
                <div className="invalid-feedback">
                  {
                    formErrors[
                      `${addressType}${
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }`
                    ]
                  }
                </div>
              )}
            </div>
          )
        )}
        <div className="col-md-6 mb-3">
          <label>Province</label>
          <select
            name="province_id"
            value={address.province_id || ""}
            onChange={handleAddressChange}
            className={`form-control ${
              formErrors[`${addressType}Province`] ? "is-invalid" : ""
            }`}
            disabled={useProfileAddresses}
          >
            <option value="">Select Province</option>
            {Array.isArray(provinces) &&
              provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
          </select>
          {formErrors[`${addressType}Province`] && (
            <div className="invalid-feedback">
              {formErrors[`${addressType}Province`]}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Order Summary Component
function OrderSummary({ giftOption }) {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState(null);
  const [couponApplied, setCouponApplied] = useState(false);

  // Fetch Cart Items
  const fetchCart = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:8000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const items = response.data?.data || [];
      setCartItems(items);
    } catch (error) {
      setError("Error fetching cart items. Please try again.");
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Calculate Subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Calculate Savings (Coupon Discount)
  const calculateSavings = () => {
    return discount;
  };

  // Calculate Tax (13% HST)
  const calculateTax = () => {
    return (calculateSubtotal() - calculateSavings()) * 0.13;
  };

  // Calculate Total
  const calculateTotal = () => {
    return calculateSubtotal() - calculateSavings() + calculateTax();
  };

  // Validate Coupon
  const validateCoupon = async () => {
    setCouponError(null);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/coupon/validate",
        { code: couponCode },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setDiscount(response.data.discount);
        setCouponApplied(true);
      } else {
        setCouponError("Invalid or expired coupon.");
      }
    } catch (error) {
      setCouponError("Error applying coupon. Please try again.");
      console.error("Error applying coupon:", error);
    }
  };

  // Render Loading/Error
  if (loading) return <div>Loading cart...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Card className="order-summary mb-4 shadow-lg rounded">
      <Card.Body className="summary">
        <Card.Title className="summary-title mb-4">Order Summary</Card.Title>

        {/* Subtotal */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">
            Subtotal ({cartItems.length} item{cartItems.length > 1 ? "s" : ""})
          </span>
          <span className="subtotal-price">
            ${calculateSubtotal().toFixed(2)}
          </span>
        </div>

        {/* Savings */}
        <div className="d-flex justify-content-between align-items-center mb-3 savings">
          <span className="text-muted">
            <FaPercentage className="me-2" /> Savings
          </span>
          <span className="savings-amount">
            - ${calculateSavings().toFixed(2)}
          </span>
        </div>

        {/* Subtotal After Savings */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Subtotal after savings</span>
          <span className="subtotal-after">
            ${(calculateSubtotal() - calculateSavings()).toFixed(2)}
          </span>
        </div>

        {/* Delivery */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">
            <FaTruck className="me-2" /> PrimeMart Delivery
          </span>
          <span className="delivery-free text-success">FREE</span>
        </div>

        {/* Tax Details */}
        <div className="d-flex justify-content-between align-items-center mb-3 tax-details">
          <span className="text-muted">13% HST</span>
          <span className="tax">${calculateTax().toFixed(2)}</span>
        </div>

        <hr />
        {/* Coupon Input */}
        <div className="coupon-section mb-4">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              disabled={couponApplied}
            />
            <Button
              variant="primary"
              onClick={validateCoupon}
              disabled={couponApplied || !couponCode.trim()}
            >
              {couponApplied ? "Applied" : "Apply"}
            </Button>
          </InputGroup>
          {couponError && <small className="text-danger">{couponError}</small>}
          {couponApplied && (
            <small className="text-success">Coupon applied successfully!</small>
          )}
        </div>
        <hr />

        {/* Estimated Total */}
        <div className="d-flex justify-content-between align-items-center estimated-total mb-3">
          <strong>Estimated Total</strong>
          <strong className="total-amount">
            ${calculateTotal().toFixed(2)}
          </strong>
        </div>

        {/* Note */}
        <div className="small-note text-muted">
          <FaReceipt className="me-2" />
          All fees and taxes are estimates. Final charges will be itemized on
          your receipt.
        </div>
      </Card.Body>
    </Card>
  );
}
// Contact Info Component
function ContactInfo({ contactInfo, handleContactInfoChange, formErrors }) {
  return (
    <section className="mb-5">
      <h4 className="form-section-title">Contact Information</h4>
      <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          required
          value={contactInfo.email || ""}
          onChange={handleContactInfoChange}
          className={formErrors.email ? "is-invalid" : ""}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.email || "Please provide a valid email."}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="phone" className="mt-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone Number"
          required
          value={contactInfo.phone || ""}
          onChange={handleContactInfoChange}
          className={formErrors.phone ? "is-invalid" : ""}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.phone || "Please provide a valid phone number."}
        </Form.Control.Feedback>
      </Form.Group>
    </section>
  );
}

export default CheckoutPage;
