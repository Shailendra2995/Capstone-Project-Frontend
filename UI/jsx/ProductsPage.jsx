import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Grid, Card, CardContent, CardActions, Snackbar, Alert, Select, MenuItem, InputLabel, FormControl, Checkbox, FormControlLabel } from '@mui/material';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    brand: '',
    name: '',
    description: '',
    specifications: '',
    price: '',
    onsale_price: '',
    stock: '',
    is_featured: false,
    category_id: '',
    image_url: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/product');
      setProducts(response.data.data || []);
      setError('');
    } catch (err) {
      console.error("Error fetching products:", err);
      setError('Failed to fetch products.');
      handleSnackbarOpen();
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/category');
      setCategories(response.data.data || []);
      setError('');
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError('Failed to fetch categories.');
      handleSnackbarOpen();
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.post(`/api/product/${formData.id}`, formData);
        setSuccessMessage('Product updated successfully!');
      } else {
        await axios.post('/api/product', formData);
        setSuccessMessage('Product added successfully!');
      }
      fetchProducts();
      resetForm();
      closeForm();
      handleSnackbarOpen();
    } catch (err) {
      console.error("Error saving product:", err);
      setError('Failed to save product.');
      handleSnackbarOpen();
    }
  };

  const handleEdit = (product) => {
    setFormData({
      ...product,
      is_featured: product.is_featured === 1
    });
    setIsEditing(true);
    openForm();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`/api/product/${id}`);
        fetchProducts();
        setSuccessMessage('Product deleted successfully!');
        handleSnackbarOpen();
      } catch (err) {
        console.error("Error deleting product:", err);
        setError('Failed to delete product.');
        handleSnackbarOpen();
      }
    }
  };

  const resetForm = () => {
    setFormData({
      id: '',
      brand: '',
      name: '',
      description: '',
      specifications: '',
      price: '',
      onsale_price: '',
      stock: '',
      is_featured: false,
      category_id: '',
      image_url: '',
    });
    setIsEditing(false);
    setError('');
    setSuccessMessage('');
  };

  const openForm = () => {
    setFormVisible(true);
  };

  const closeForm = () => {
    setFormVisible(false);
    resetForm();
  };

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Products
      </Typography>
      <Button variant="contained" color="primary" onClick={openForm}>
        Add Product
      </Button>
      {formVisible && (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Brand" name="brand" value={formData.brand} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Product Name" name="name" value={formData.name} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Description" name="description" value={formData.description} onChange={handleChange} multiline rows={4} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Specifications" name="specifications" value={formData.specifications} onChange={handleChange} multiline rows={4} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Price" name="price" type="number" value={formData.price} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="On Sale Price" name="onsale_price" type="number" value={formData.onsale_price} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Stock" name="stock" type="number" value={formData.stock} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                >
                  {categories.map(category => (
                    <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Image URL" name="image_url" value={formData.image_url} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.is_featured}
                    onChange={handleChange}
                    name="is_featured"
                  />
                }
                label="Featured"
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
            {isEditing ? 'Update Product' : 'Add Product'}
          </Button>
          <Button variant="outlined" color="secondary" onClick={closeForm} style={{ marginLeft: '10px', marginTop: '20px' }}>
            Cancel
          </Button>
        </form>
      )}
      <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
        Product List
      </Typography>
      {products.length > 0 ? (
        products.map(product => (
          <StyledCard key={product.id}>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography color="textSecondary">{product.brand}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="body2">Price: ${product.price}</Typography>
              <Typography variant="body2">Stock: {product.stock}</Typography>
              <Typography variant="body2">Featured: {product.is_featured ? 'Yes' : 'No'}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={() => handleEdit(product)}>Edit</Button>
              <Button size="small" color="secondary" onClick={() => handleDelete(product.id)}>Delete</Button>
            </CardActions>
          </StyledCard>
        ))
      ) : (
        <Typography>No products available.</Typography>
      )}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={error ? "error" : "success"}>
          {error || successMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductsPage;