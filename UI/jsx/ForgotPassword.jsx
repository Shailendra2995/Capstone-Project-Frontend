import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PasswordResetRequest = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost/Capstone-Project-Backend-main/public/reset-password-request.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setMessage('Password reset link has been sent to your email.');
        } else {
          setError(data.message || 'Something went wrong. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('An error occurred. Please try again.');
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <p className="text-danger mt-2">{error}</p>}
            {message && <p className="text-success mt-2">{message}</p>}
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Reset Link</button>
        </form>
        <div className="mt-3 text-center">
          <p>
            <a href="/login" className="text-decoration-none">Back to Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetRequest;
