import React, { useState } from "react";
import { Form, Col, Row, Button, Card } from "react-bootstrap";

function CheckoutPage() {
  const [useBillingAsDelivery, setUseBillingAsDelivery] = useState(false);
  const [validated, setValidated] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  // Canadian Postal Code Regex
  const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

  // Handle form submit
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
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
            />
          </Form.Group>

          {/* Billing Address */}
          <h4 className="form-section-title">Billing Address</h4>
          <AddressForm postalCodeRegex={postalCodeRegex} />

          {/* Delivery Address */}
          <h4 className="form-section-title">Delivery Address</h4>
          <Form.Check
            type="checkbox"
            label="Use as billing address"
            onChange={(e) => setUseBillingAsDelivery(e.target.checked)}
          />
          {!useBillingAsDelivery && (
            <AddressForm postalCodeRegex={postalCodeRegex} />
          )}

          {/* Contact Info */}
          <ContactInfo />

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
      <OrderSummary />
    </div>
  );
}

function AddressForm({ postalCodeRegex }) {
  return (
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          required
          pattern="^[A-Za-z]+$"
        />
        <Form.Control.Feedback type="invalid">
          First name should only contain alphabets.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          required
          pattern="^[A-Za-z]+$"
        />
        <Form.Control.Feedback type="invalid">
          Last name should only contain alphabets.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="12" className="mt-2" controlId="streetAddress">
        <Form.Label>Street Address</Form.Label>
        <Form.Control type="text" placeholder="Street Address" required />
        <Form.Control.Feedback type="invalid">
          Please enter a valid street address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="12" className="mt-2" controlId="apt">
        <Form.Label>Apt/Suite/Floor (Optional)</Form.Label>
        <Form.Control type="text" placeholder="Apt/Suite/Floor" />
      </Form.Group>

      <Form.Group as={Col} md="6" className="mt-2" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" required />
        <Form.Control.Feedback type="invalid">
          Please enter a valid city.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="3" className="mt-2" controlId="province">
        <Form.Label>Province</Form.Label>
        <Form.Control as="select" required>
          <option value="">Choose...</option>
          <option>ON</option>
          <option>QC</option>
          <option>BC</option>
          <option>AB</option>
          <option>MB</option>
          <option>SK</option>
          <option>NS</option>
          <option>NB</option>
          <option>NL</option>
          <option>PE</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Please select a province.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="3" className="mt-2" controlId="postalCode">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Postal Code"
          required
          pattern={postalCodeRegex.source}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid Canadian postal code.
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
  );
}

function ContactInfo() {
  return (
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="email">
        <Form.Label>Email for Order Tracking</Form.Label>
        <Form.Control type="email" placeholder="Email" required />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="phone">
        <Form.Label>Phone for Delivery Contact</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Phone"
          required
          pattern="^\d{10}$"
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid 10-digit phone number.
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
  );
}

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

function OrderSummary() {
  return (
    <Card className="order-summary mb-3">
      <Card.Body>
        <Card.Title>Order Summary</Card.Title>
        <div>0 Item(s) in Cart</div>
        <hr></hr>
        <div>Order Subtotal: $0.00</div>
        <hr></hr>
        <div>Shipping: $8.99</div>
        <hr></hr>
        <div>Tax (13%): $0.00</div>
        <hr></hr>
        <div>Total: $8.99</div>
      </Card.Body>
    </Card>
  );
}

export default CheckoutPage;
