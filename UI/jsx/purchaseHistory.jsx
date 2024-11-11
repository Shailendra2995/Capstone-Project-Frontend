import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const purchaseHistory = [
  {
    date: "Oct 28, 2024",
    orderId: "8682484001254",
    total: 113.92,
    status: "Delivered",
    deliveryDate: "Mon, Oct 28",
    items: [
      { src: "path/to/image1.png", quantity: 1 },
      { src: "path/to/image2.png", quantity: 2 },
      // Add more items here
    ],
  },
  {
    date: "Oct 09, 2024",
    orderId: "8492474000718",
    total: 258.63,
    status: "Delivered",
    deliveryDate: "Wed, Oct 09",
    items: [
      { src: "path/to/image3.png", quantity: 4 },
      // Add more items here
    ],
  },
  {
    date: "Aug 07, 2024",
    orderId: "4192438001386",
    total: 0.0,
    status: "Cancelled",
    deliveryDate: null,
    items: [{ src: "path/to/image4.png", quantity: 1 }],
  },
];

function PurchaseHistory() {
  return (
    <Container className="my-5">
      {/* Search Bar */}
      <Row className="mb-4">
        <Col>
          <h3>Purchase history</h3>
          <Form.Control
            type="text"
            placeholder="Search your purchases"
            className="mt-2"
          />
        </Col>
      </Row>

      {/* Purchase History Cards */}
      {purchaseHistory.map((order, index) => (
        <Card className="my-3 p-3 shadow-sm" key={index}>
          <Row>
            <Col md={8}>
              <div className="order-info">
                <p className="text-muted mb-1">
                  {order.date} | Order # {order.orderId} | Total $
                  {order.total.toFixed(2)}
                </p>
                <h5 className="mb-1">
                  {order.status === "Cancelled"
                    ? "Cancelled"
                    : `Delivered on ${order.deliveryDate}`}
                </h5>
                <div className="d-flex">
                  {order.items.map((item, i) => (
                    <div className="item-thumbnail me-2" key={i}>
                      <img
                        src={item.src}
                        alt={`item-${i}`}
                        style={{ width: "40px", height: "40px" }}
                      />
                      <span className="item-quantity">{item.quantity}</span>
                    </div>
                  ))}
                </div>
                {order.status === "Cancelled" && (
                  <p className="text-muted mt-2">
                    You will not be charged for cancelled items, and any payment
                    authorizations will be removed by the issuing bank.
                  </p>
                )}
              </div>
            </Col>
            <Col md={4} className="text-end">
              <Button variant="outline-primary" className="mt-2">
                View details
              </Button>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
}

export default PurchaseHistory;
