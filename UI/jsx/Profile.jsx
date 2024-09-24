import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const  Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "Shailendra",
    lastName: "Karki",
    email: "shailendrakumar.karki@gmail.com",
    phone: "(548) 577-8045",
    companyName: "Apple",
    streetAddress: "360",
    state: "Ontario",
    zipCode: "N2M3A5",
    country: "Canada",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSaveChanges = () => {
    alert("Changes Saved!");
  };

  const handlePasswordChange = () => {
    if (profileData.newPassword !== profileData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Password Changed!");
    }
  };

  return (
    <div className="container mt-5 account-settings">
      {/* Profile Image (will be displayed at the top in mobile view) */}
      <div className="text-center mb-4 profile-section">
        <img
          src='./img1.jpg'
          alt="Profile"
          className="rounded-circle profile-img"
        />
        <button className="btn btn-outline-success mt-2">Choose Image</button>
      </div>

      {/* Account Settings Section */}
      <section className="mb-5 section">
        <h2 className="section-title">Account Settings</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={profileData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={profileData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={profileData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              value={profileData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </section>

      <hr />

      {/* Billing Address Section */}
      <section className="mb-5 section">
        <h2 className="section-title">Billing Address</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={profileData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={profileData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Company Name (Optional)</label>
            <input
              type="text"
              name="companyName"
              className="form-control"
              value={profileData.companyName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Street Address</label>
            <input
              type="text"
              name="streetAddress"
              className="form-control"
              value={profileData.streetAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Country / Region</label>
            <select
              name="country"
              className="form-select"
              value={profileData.country}
              onChange={handleInputChange}
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label>State</label>
            <input
              type="text"
              name="state"
              className="form-control"
              value={profileData.state}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Zip Code</label>
            <input
              type="text"
              name="zipCode"
              className="form-control"
              value={profileData.zipCode}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </section>

      <hr />

      {/* Change Password Section */}
      <section className="section">
        <h2 className="section-title">Change Password</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label>Current Password</label>
            <input
              type="password"
              name="currentPassword"
              className="form-control"
              value={profileData.currentPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              className="form-control"
              value={profileData.newPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={profileData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="btn btn-success" onClick={handlePasswordChange}>
          Change Password
        </button>
      </section>
    </div>
  );
};

export default Profile;
