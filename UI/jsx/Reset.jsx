import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PasswordResetForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { token } = useParams(); // token is passed as URL parameter

  const validateForm = () => {
    const newErrors = {};
    if (!password) newErrors.password = 'Password is required';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      fetch(`http://localhost/Capstone-Project-Backend-main/public/reset-password.php?token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setMessage('Password has been successfully reset.');
            setTimeout(() => navigate('/login'), 3000); // Redirect to login after a delay
          } else {
            setErrors({ form: data.message || 'Something went wrong. Please try again.' });
          }
        })
        .catch(error => {
          console.error('Error:', error);
          setErrors({ form: 'An error occurred. Please try again.' });
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Set a New Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">New Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="text-danger mt-2">{errors.password}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && <p className="text-danger mt-2">{errors.confirmPassword}</p>}
          </div>

          {errors.form && <p className="text-danger mt-3">{errors.form}</p>}
          {message && <p className="text-success mt-3">{message}</p>}

          <button type="submit" className="btn btn-primary w-100">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetForm;
