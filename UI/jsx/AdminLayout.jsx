import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaUsers,
  FaBox,
  FaChartLine,
  FaTag,
  FaShoppingCart,
} from "react-icons/fa";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const AdminLayout = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} lg={2} className="bg-light sidebar" style={{ position: 'fixed', height: '100vh', overflowY: 'auto' }}>
          <div className="position-sticky pt-3">
            <h2 className="h6 px-3 py-4 mb-0 border-bottom">Admin Dashboard</h2>
            <ListGroup variant="flush">
              <ListGroup.Item as={Link} to="/admin" action>
                <FaChartLine className="me-2" /> Dashboard
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/admin/products" action>
                <FaBox className="me-2" /> Products
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/admin/categories" action>
                <FaTag className="me-2" /> Categories
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/admin/users" action>
                <FaUsers className="me-2" /> Users
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/admin/orders" action>
                <FaShoppingCart className="me-2" /> Orders
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/admin/coupons" action>
                <FaTag className="me-2" /> Coupons
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>

        {/* Main Content */}
        <Col md={9} lg={10} className="ms-sm-auto px-md-4" style={{ marginLeft: '16.66%' }}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;