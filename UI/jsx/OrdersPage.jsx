import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Space, Input, Button, Modal, message } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

const { Search } = Input;

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/order', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setOrders(response.data.data);
    } catch (error) {
      message.error('Failed to fetch orders');
    }
    setLoading(false);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const showOrderDetails = (order) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User ID',
      dataIndex: 'user_id',
      key: 'user_id',
    },
    {
      title: 'Total Amount',
      dataIndex: 'total_amount',
      key: 'total_amount',
      render: (amount) => `$${(Number(amount) || 0).toFixed(2)}`,
    },
    {
      title: 'Include Gift',
      dataIndex: 'include_gift',
      key: 'include_gift',
      render: (includeGift) => (includeGift ? 'Yes' : 'No'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EyeOutlined />} onClick={() => showOrderDetails(record)}>
            View
          </Button>
        </Space>
      ),
    },
  ];

  const filteredOrders = orders.filter((order) =>
    order.id.toString().includes(searchTerm) ||
    order.user_id.toString().includes(searchTerm)
  );

  return (
    <div>
      <h1>Order Management</h1>
      <Space style={{ marginBottom: 16 }}>
        <Search
          placeholder="Search orders by ID or User ID"
          onSearch={handleSearch}
          style={{ width: 300 }}
        />
      </Space>
      <Table
        columns={columns}
        dataSource={filteredOrders}
        rowKey="id"
        loading={loading}
      />
      <Modal
        title="Order Details"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
      >
        {selectedOrder && (
          <div>
            <p><strong>Order ID:</strong> {selectedOrder.id}</p>
            <p><strong>User ID:</strong> {selectedOrder.user_id}</p>
            <p><strong>Total Amount:</strong> ${(Number(selectedOrder.total_amount) || 0).toFixed(2)}</p>
            <p><strong>Items Total Amount:</strong> ${(Number(selectedOrder.items_total_amount) || 0).toFixed(2)}</p>
            <p><strong>Items Discount Amount:</strong> ${(Number(selectedOrder.items_discount_amount) || 0).toFixed(2)}</p>
            <p><strong>Tax Amount:</strong> ${(Number(selectedOrder.tax_amount) || 0).toFixed(2)}</p>
            <p><strong>Shipping Amount:</strong> ${(Number(selectedOrder.shipping_amount) || 0).toFixed(2)}</p>
            <p><strong>Include Gift:</strong> {selectedOrder.include_gift ? 'Yes' : 'No'}</p>
            <p><strong>Coupon ID:</strong> {selectedOrder.coupon_id || 'N/A'}</p>
            <p><strong>Shipping Address ID:</strong> {selectedOrder.shipping_address_id}</p>
            <p><strong>Billing Address ID:</strong> {selectedOrder.billing_address_id}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default OrdersPage;