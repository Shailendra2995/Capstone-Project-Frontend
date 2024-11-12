import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Form, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import axios from "axios";
import { FaTruck, FaPercentage, FaReceipt } from "react-icons/fa";


// Provinces list
const PROVINCES = [
  { id: 1, name: "Alberta" },
  { id: 2, name: "British Columbia" },
  { id: 3, name: "Manitoba" },
  { id: 4, name: "New Brunswick" },
  { id: 5, name: "Newfoundland and Labrador" },
  { id: 7, name: "Nova Scotia" },
  { id: 6, name: "Northwest Territories" },
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
  // Add state for profileData
  const [profileData, setProfileData] = useState(initialProfileData);

  const [useBillingAsDelivery, setUseBillingAsDelivery] = useState(false);
  const [useProfileAddresses, setUseProfileAddresses] = useState(false);
  const [validated, setValidated] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  // Initialize state with profileData
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
  const memoizedProvinces = useMemo(() => PROVINCES, []);

  // Canadian Postal Code Regex
  const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

  const loadData = useCallback(async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8000/api/user/profile", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const data = await response.json();

      if (data.status === 0) {
        const { username, email, phone, billing_address, shipping_address } =
          data.data;

        // Update profileData
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

        // Update billing address
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

        // Update shipping address
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

        // Update contact info
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

  // Handle form submit
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    let isValid = true;

    // Additional custom validations
    if (
      !validatePhoneNumber(contactInfo.phone) ||
      !validateEmail(contactInfo.email)
    ) {
      isValid = false;
    }

    if (form.checkValidity() === false || !isValid) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Proceed with form submission
      // You might want to add an API call here to process the order
    }

    setValidated(true);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex =
      /^(\+\d{1,2}\s?)?($$\d{3}$$|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
            postalCodeRegex={postalCodeRegex}
            useProfileAddresses={useProfileAddresses}
            handleAddressChange={(e) => handleAddressChange(e, "billing")}
            provinces={memoizedProvinces}
            addressType="billing"
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
            <>
              <AddressForm
                address={shippingAddress}
                postalCodeRegex={postalCodeRegex}
                useProfileAddresses={useProfileAddresses}
                handleAddressChange={(e) => handleAddressChange(e, "shipping")}
                provinces={memoizedProvinces}
                addressType="shipping"
              />
            </>
          )}

          {/* Contact Info */}
          <ContactInfo
            contactInfo={contactInfo}
            handleContactInfoChange={handleContactInfoChange}
          />

          {/* Payment Method */}
          <h4 className="form-section-title">Payment Method</h4>
          <Form.Group controlId="paymentMethod">
            <Form.Control
              as="select"
              required
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Choose...</option>
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="debit">Debit</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a payment method.
            </Form.Control.Feedback>
          </Form.Group>

          {paymentMethod && <PaymentDetails paymentMethod={paymentMethod} />}

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
  postalCodeRegex,
  useProfileAddresses,
  handleAddressChange,
  provinces,
  addressType,
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
                className="form-control"
                value={address[field] || ""} // Ensure value is not null
                onChange={handleAddressChange}
                disabled={useProfileAddresses}
                pattern={
                  field === "postcode" ? postalCodeRegex.source : undefined
                }
                aria-label={`${
                  field.charAt(0).toUpperCase() + field.slice(1)
                } input`}
                aria-required="true"
              />
            </div>
          )
        )}
        <div className="col-md-6 mb-3">
          <label>Province</label>
          <select
            name="province_id"
            value={address.province_id || ""} // Ensure value is not null
            onChange={handleAddressChange}
            className="form-control"
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
        </div>
      </div>
    </section>
  );
}

// Payment Details Component
function PaymentDetails({ paymentMethod }) {
  return (
    <div className="mt-3">
      {paymentMethod === "credit" && (
        <Form.Group controlId="creditCardNumber">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            required
            pattern="^\d{16}$"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid 16-digit credit card number.
          </Form.Control.Feedback>
        </Form.Group>
      )}
      {paymentMethod === "paypal" && (
        <Form.Group controlId="paypalEmail">
          <Form.Label>PayPal Email</Form.Label>
          <Form.Control type="email" placeholder="PayPal Email" required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid PayPal email.
          </Form.Control.Feedback>
        </Form.Group>
      )}
      {paymentMethod === "debit" && (
        <Form.Group controlId="debitCardNumber">
          <Form.Label>Debit Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Debit Card Number"
            required
            pattern="^\d{16}$"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid 16-digit debit card number.
          </Form.Control.Feedback>
        </Form.Group>
      )}
    </div>
  );
}
function OrderSummary({ giftOption }) {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateSavings = () => {
    return 0;
  };

  const calculateTax = () => {
    return (calculateSubtotal() - calculateSavings()) * 0.13;
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateSavings() + calculateTax();
  };

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
function ContactInfo({ contactInfo, handleContactInfoChange }) {
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
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="phone" className="mt-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone Number"
          required
          value={contactInfo.phone || ""} // Ensure value is not null
          onChange={handleContactInfoChange}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid phone number.
        </Form.Control.Feedback>
      </Form.Group>
    </section>
  );
}

export default CheckoutPage;
