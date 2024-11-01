import React, { useState, useEffect } from "react";
import { Container, Card, Button, Alert, Row, Col } from "react-bootstrap";

const Coupon  = () => {
  const [coupon, setCoupon] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const lastGeneratedDate = localStorage.getItem("lastGeneratedDate");
    const today = new Date().toDateString();

    if (lastGeneratedDate === today) {
      const savedCoupon = localStorage.getItem("coupon");
      setCoupon(savedCoupon);
    }
  }, []);

  const fetchCouponFromBackend = async () => {
    const today = new Date().toDateString();
    const lastGeneratedDate = localStorage.getItem("lastGeneratedDate");

    if (lastGeneratedDate === today) {
      setError(
        "You have already generated a coupon today. Try again tomorrow!"
      );
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/coupons/generate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch coupon. Please try again.");
      }

      const data = await response.json();
      const { couponCode } = data;

      localStorage.setItem("coupon", couponCode);
      localStorage.setItem("lastGeneratedDate", today);
      setCoupon(couponCode);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon);
    alert("Coupon copied to clipboard!");
  };

  return (
    <Container className="enhanced-container">
      <Card className="coupon-card">
        <Card.Body>
          <h2 className="card-title">Exclusive Coupon Just for You!</h2>
          <p className="coupon-subtext">
            Generate a new discount code daily and save on your next purchase.
          </p>

          {coupon ? (
            <>
              <h1 className="coupon-code">{coupon}</h1>
              <Button variant="primary" onClick={handleCopy}>
                Copy Coupon
              </Button>
              <Row className="mt-4">
                <Col className="coupon-info">
                  <h5>Usage Instructions:</h5>
                  <p>Apply this code at checkout to enjoy your discount!</p>
                </Col>
                <Col className="coupon-info">
                  <h5>Validity:</h5>
                  <p>Valid for 24 hours from the time of generation.</p>
                </Col>
              </Row>
            </>
          ) : (
            <Button
              variant="success"
              className="generate-btn"
              onClick={fetchCouponFromBackend}
            >
              Generate Coupon
            </Button>
          )}

          {error && (
            <Alert variant="warning" className="mt-3">
              {error}
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Coupon ;
