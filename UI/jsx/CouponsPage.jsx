import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Table, Space, Button, Modal, Form, Input, InputNumber, message } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const CouponsPage = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/coupon', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setCoupons(response.data.data);
    } catch (error) {
      message.error('Failed to fetch coupons');
    }
    setLoading(false);
  };

  const showModal = (coupon = null) => {
    setEditingCoupon(coupon);
    form.setFieldsValue(coupon || {});
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(async (values) => {
      try {
        if (editingCoupon) {
          await axios.post(`/api/coupon/${editingCoupon.id}`, values, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          message.success('Coupon updated successfully');
        } else {
          await axios.post('/api/coupon', values, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          message.success('Coupon created successfully');
        }
        setIsModalVisible(false);
        fetchCoupons();
      } catch (error) {
        message.error('Failed to save coupon');
      }
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/coupon/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      message.success('Coupon deleted successfully');
      fetchCoupons();
    } catch (error) {
      message.error('Failed to delete coupon');
    }
  };

  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Minimum Amount',
      dataIndex: 'min_amount',
      key: 'min_amount',
      render: (amount) => `$${amount}`,
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'discount',
      render: (discount) => `$${discount}`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <IconButton onClick={() => showModal(record)} color="primary">
            <EditIcon />
          </IconButton>
          
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>Coupon Management</h1>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
        style={{ marginBottom: 16 }}
      >
        Add New Coupon
      </Button>
      <Table
        columns={columns}
        dataSource={coupons}
        rowKey="id"
        loading={loading}
      />
      <Modal
        title={editingCoupon ? "Edit Coupon" : "Create New Coupon"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="code"
            label="Coupon Code"
            rules={[{ required: true, message: 'Please input the coupon code!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="min_amount"
            label="Minimum Amount"
            rules={[{ required: true, message: 'Please input the minimum amount!' }]}
          >
            <InputNumber
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>
          <Form.Item
            name="discount"
            label="Discount Amount"
            rules={[{ required: true, message: 'Please input the discount amount!' }]}
          >
            <InputNumber
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CouponsPage;