import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Form, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

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

function CheckoutPage({}) {
  const [useBillingAsDelivery, setUseBillingAsDelivery] = useState(false);
  const [useProfileAddresses, setUseProfileAddresses] = useState(false);
  const [validated, setValidated] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [profileData, setProfileData] = useState(profileData);

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

  const loadData = async () => {
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
  };

  useEffect(() => {
    loadData();
  }, []);

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

CheckoutPage.propTypes = {
  profileData: PropTypes.shape({
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

CheckoutPage.defaultProps = {
  profileData: {
    email: "",
    phone: "",
    billingAddress: {},
    shippingAddress: {},
  },
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
                value={address[field] || ""}
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
            value={address.province_id || ""}
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

// Order Summary Component
function OrderSummary({ giftOption }) {
  // Sample cart items (you can replace with actual cart logic)
  const cartItems = [
    { id: 1, name: "Product 1", price: 29.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 49.99, quantity: 1 },
  ];

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.13;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <Card className="order-summary mb-3">
      <Card.Body>
        <Card.Title>Order Summary</Card.Title>
        {cartItems.map((item) => (
          <div key={item.id} className="d-flex justify-content-between">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div className="d-flex justify-content-between">
          <span>Subtotal</span>
          <span>${calculateSubtotal().toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Tax (13%)</span>
          <span>${calculateTax().toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between">
          <strong>Total</strong>
          <strong>${calculateTotal().toFixed(2)}</strong>
        </div>
        {giftOption && (
          <div className="mt-2 text-muted">
            <small>
              This order includes a gift. Packing slip will not display prices.
            </small>
          </div>
        )}
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
          value={contactInfo.email}
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
          value={contactInfo.phone}
          onChange={handleContactInfoChange}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid phone number.
        </Form.Control.Feedback>
      </Form.Group>
    </section>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

// Usage
// const CheckoutWrapper = ({ profileData }) => {
//   return (
//     <ErrorBoundary>
//       <CheckoutPage profileData={profileData} />
//     </ErrorBoundary>
//   );
// };

export default CheckoutPage;
