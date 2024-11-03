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
    image_file: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const API_URL = window.ENV?.REACT_APP_API_URL || 'http://localhost:8000';

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/product`);
      setProducts(response.data.data || []);
    } catch (err) {
      console.error("Error fetching products:", err);
      setSnackbarMessage('Failed to fetch products.');
      setSnackbarSeverity('error');
      handleSnackbarOpen();
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/category`);
      setCategories(response.data.data || []);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setSnackbarMessage('Failed to fetch categories.');
      setSnackbarSeverity('error');
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image_file: file });
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${API_URL}/api/upload/product`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === 0) {
        return response.data.data.path;
      } else {
        throw new Error(response.data.msg || 'Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imagePath = formData.image_url;
      if (formData.image_file) {
        imagePath = await handleImageUpload(formData.image_file);
      }

      const productData = {
        ...formData,
        image_url: imagePath,
      };

      if (isEditing) {
        await axios.post(`${API_URL}/api/product/${formData.id}`, productData);
        setSnackbarMessage('Product updated successfully!');
      } else {
        await axios.post(`${API_URL}/api/product`, productData);
        setSnackbarMessage('Product added successfully!');
      }
      setSnackbarSeverity('success');
      fetchProducts();
      resetForm();
      closeForm();
      handleSnackbarOpen();
    } catch (err) {
      console.error("Error saving product:", err);
      setSnackbarMessage('Failed to save product.');
      setSnackbarSeverity('error');
      handleSnackbarOpen();
    }
  };

  const handleEdit = (product) => {
    setFormData({
      ...product,
      is_featured: product.is_featured === 1,
      image_file: null
    });
    setIsEditing(true);
    setImagePreview(null);
    openForm();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${API_URL}/api/product/${id}`);
        fetchProducts();
        setSnackbarMessage('Product deleted successfully!');
        setSnackbarSeverity('success');
        handleSnackbarOpen();
      } catch (err) {
        console.error("Error deleting product:", err);
        setSnackbarMessage('Failed to delete product.');
        setSnackbarSeverity('error');
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
      image_file: null,
    });
    setIsEditing(false);
    setImagePreview(null);
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

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
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
              <input
                accept="image/*"
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="raised-button-file"
              />
              <label htmlFor="raised-button-file">
                <Button variant="contained" component="span">
                  Upload Image
                </Button>
              </label>
              {imagePreview && (
                <img 
                  src={imagePreview}
                  alt="Preview" 
                  style={{ marginLeft: '10px', maxWidth: '100px', maxHeight: '100px', verticalAlign: 'middle' }} 
                />
              )}
              {formData.image_url && !imagePreview && (
                <img 
                  src={`${API_URL}/storage/${formData.image_url}`}
                  alt="Current Image" 
                  style={{ marginLeft: '10px', maxWidth: '100px', maxHeight: '100px', verticalAlign: 'middle' }} 
                />
              )}
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
              {product.image_url && (
                <img 
                  src={`${API_URL}/storage/${product.image_url}`}
                  alt={product.name}
                  style={{ maxWidth: '100px', maxHeight: '100px', marginTop: '10px' }}
                />
              )}
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
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductsPage;