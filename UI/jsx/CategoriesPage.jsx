import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({ name: '', icon: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set the Authorization header with the token from local storage
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/api/category'); // Adjust base URL if needed
      setCategories(response.data.data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      showSnackbar('Error fetching categories');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpen = (category = null) => {
    setEditingCategory(category);
    setFormData(category || { name: '', icon: '' });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingCategory(null);
    setFormData({ name: '', icon: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCategory) {
        await axios.post(`http://localhost:8000/api/category/${editingCategory.id}`, formData); // Update category
        showSnackbar('Category updated successfully');
      } else {
        await axios.post('http://localhost:8000/api/category', formData); // Add new category
        showSnackbar('Category added successfully');
      }
      fetchCategories();
      handleClose();
    } catch (error) {
      console.error('Error saving category:', error.response || error);
      showSnackbar(error.response?.data?.message || 'Error saving category');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await axios.delete(`http://localhost:8000/api/category/${id}`); // Delete category
        fetchCategories();
        showSnackbar('Category deleted successfully');
      } catch (error) {
        console.error('Error deleting category:', error);
        showSnackbar(error.response?.data?.message || 'Error deleting category');
      }
    }
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Manage Categories
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
          sx={{ mb: 2 }}
        >
          Add New Category
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Icon</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : categories.length > 0 ? (
                categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>{category.icon}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleOpen(category)} color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(category.id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No categories found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Dialog for Add/Edit Category */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{editingCategory ? 'Edit Category' : 'Add New Category'}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Category Name"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="icon"
              label="Icon"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.icon}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              {editingCategory ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message={snackbarMessage}
        />
      </Box>
    </Container>
  );
};

export default CategoriesPage;