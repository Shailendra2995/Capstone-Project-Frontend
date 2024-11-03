import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Container,
    Typography,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Snackbar,
    IconButton,
    InputAdornment,
    CircularProgress
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Search as SearchIcon } from '@mui/icons-material';
import { Alert } from '@mui/material';

// Set up axios defaults
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000'; // Adjust this to your Laravel backend URL

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get('/api/user', {
                params: { username: searchTerm }
            });
            setUsers(response.data.data || []);
        } catch (error) {
            console.error('Error fetching users:', error);
            setError('Failed to fetch users. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleOpenDialog = (user = null) => {
        setSelectedUser(user);
        setFormData(user ? { username: user.username, email: user.email } : { username: '', email: '', password: '' });
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedUser(null);
        setFormData({ username: '', email: '', password: '' });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedUser) {
                await axios.post('/api/user/profile/basic', formData);
                showSnackbar('User updated successfully', 'success');
            } else {
                await axios.post('/api/user/register', formData);
                showSnackbar('User added successfully', 'success');
            }
            handleCloseDialog();
            fetchUsers();
        } catch (error) {
            console.error('Error saving user:', error);
            showSnackbar(`Error: ${error.response?.data?.message || 'Failed to save user'}`, 'error');
        }
    };

    const handleDelete = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                // Note: Implement the delete endpoint in your Laravel backend
                await axios.delete(`/api/user/${userId}`);
                showSnackbar('User deleted successfully', 'success');
                fetchUsers();
            } catch (error) {
                console.error('Error deleting user:', error);
                showSnackbar('Failed to delete user', 'error');
            }
        }
    };

    const handleSearch = () => {
        fetchUsers();
    };

    const showSnackbar = (message, severity) => {
        setSnackbar({ open: true, message, severity });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    if (error) {
        return (
            <Container>
                <Typography color="error" variant="h6">{error}</Typography>
                <Button variant="contained" color="primary" onClick={fetchUsers}>
                    Try Again
                </Button>
            </Container>
        );
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                User Management
            </Typography>

            <TextField
                variant="outlined"
                placeholder="Search users"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                style={{ marginBottom: '20px' }}
            />

            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => handleOpenDialog()}
                style={{ marginBottom: '20px' }}
            >
                Add User
            </Button>

            {loading ? (
                <CircularProgress />
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.username}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => handleOpenDialog(user)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handleDelete(user.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3}>No users found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>{selectedUser ? 'Edit User' : 'Add User'}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="username"
                        label="Username"
                        type="text"
                        fullWidth
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {!selectedUser && (
                        <TextField
                            margin="dense"
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleSubmit} color="primary">
                        {selectedUser ? 'Update' : 'Add'}
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default UsersPage;