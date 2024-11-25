import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUsers, FaBox, FaTag, FaShoppingCart, FaClipboardList } from "react-icons/fa";
import { Container, Row, Col, Card, Table } from "react-bootstrap";

const Admin = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCategories: 0,
    totalProducts: 0,
    totalOrders: 0,
    recentOrders: [],
    recentUsers: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/dashboard/summary', {
          headers: {
            // Add authorization header if needed
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = response.data.data;
        setStats((prevStats) => ({
          ...prevStats,
          totalUsers: data.users_count,
          totalCategories: data.categories_count,
          totalProducts: data.products_count,
          totalOrders: data.orders_count,
        }));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const StatCard = ({ icon, title, value, color }) => (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Row>
          <Col xs={3} className="text-center">
            {React.createElement(icon, { size: 48, color: color })}
          </Col>
          <Col xs={9} className="text-right">
            <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
            <div className="text-muted">{title}</div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

  return (
    <Container fluid>
      <Row>
        {/* Main Content */}
        <div className="ms-sm-auto">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>

          {/* Stats Overview */}
          <Row>
            <Col md={3}>
              <StatCard icon={FaUsers} title="Total Users" value={stats.totalUsers} color="#007bff" />
            </Col>
            <Col md={3}>
              <StatCard icon={FaTag} title="Total Categories" value={stats.totalCategories} color="#28a745" />
            </Col>
            <Col md={3}>
              <StatCard icon={FaBox} title="Total Products" value={stats.totalProducts} color="#ffc107" />
            </Col>
            <Col md={3}>
              <StatCard icon={FaShoppingCart} title="Total Orders" value={stats.totalOrders} color="#dc3545" />
            </Col>
          </Row>

          {/* Recent Orders */}
          <Row className="mt-4">
            <Col md={6}>
              <Card className="shadow-sm">
                <Card.Header as="h5">
                  <FaClipboardList className="me-2" /> Recent Orders
                </Card.Header>
                <Card.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.recentOrders.map((order) => (
                        <tr key={order.id}>
                          <td>{order.id}</td>
                          <td>{order.customer_name}</td>
                          <td>${order.total.toFixed(2)}</td>
                          <td>{order.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="shadow-sm">
                <Card.Header as="h5">
                  <FaUsers className="me-2" /> Recent Users
                </Card.Header>
                <Card.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.recentUsers.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.created_at}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default Admin;