import React, { useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: 'Shailendra',
    firstName: "Shailendra",
    lastName: "Karki",
    email: "shailendrakumar.karki@gmail.com",
    phone: "(548) 577-8045",
    streetAddress: "360",
    state: "Kitchner",
    zipCode: "N2M3A5",
    province: "Ontario",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    shippingAddress: {
      firstName: "Shailendra",
      lastName: "Karki",
      streetAddress: "360",
      city: "Kitchner",
      postalcode: "N2M3A5",
      province: "Ontario"
    },
    billingAddress: {
      firstName: "Shailendra",
      lastName: "Karki",
      streetAddress: "360",
      city: "Kitchner",
      postalcode: "N2M3A5",
      province: "Ontario"
    },
    profileImage: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleAddressChange = (e, addressType) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [addressType]: {
        ...profileData[addressType],
        [name]: value,
      }
    });
  };

  const handleProfileImageChange = (e) => {
    setProfileData({ ...profileData, profileImage: e.target.files[0] });
  };

  const handleSaveChanges = async () => {
    const formData = new FormData();
    for (const key in profileData) {
      if (key !== 'profileImage' && key !== 'shippingAddress' && key !== 'billingAddress') {
        formData.append(key, profileData[key]);
      }
    }

    if (profileData.profileImage) {
      formData.append('profileImage', profileData.profileImage);
    }

    try {
      const response = await fetch('/api/profile/update', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert("Profile changes saved!");
      } else {
        alert("Failed to save changes.");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Error saving profile.");
    }
  };

  const handleSaveAddress = async (addressType) => {
    const formData = new FormData();
    const address = profileData[addressType];
    for (const key in address) {
      formData.append(key, address[key]);
    }

    try {
      const response = await fetch(`/api/profile/${addressType}-update`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert(`${addressType.charAt(0).toUpperCase() + addressType.slice(1)} Address saved!`);
      } else {
        alert(`Failed to save ${addressType} address.`);
      }
    } catch (error) {
      console.error(`Error saving ${addressType} address:`, error);
      alert(`Error saving ${addressType} address.`);
    }
  };

  const handlePasswordChange = async () => {
    if (profileData.newPassword !== profileData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    formData.append("currentPassword", profileData.currentPassword);
    formData.append("newPassword", profileData.newPassword);

    try {
      const response = await fetch('/api/profile/change-password', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert("Password changed successfully!");
      } else {
        alert("Failed to change password.");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Error changing password.");
    }
  };

  return (
    <div className="container mt-5 account-settings">
      {/* Profile Image */}
      <div className="text-center mb-4 profile-section">
        <img
          src='./img1.jpg'
          alt="Profile"
          className="rounded-circle profile-img"
        />
        <div className="custom-file-container">
          <label className="custom-file-label" htmlFor="profileImageUpload">
            Choose Profile Image
          </label>
          <input
            type="file"
            id="profileImageUpload"
            className="custom-file-input"
            onChange={handleProfileImageChange}
          />
          {profileData.profileImage && (
            <span className="file-name">{profileData.profileImage.name}</span>
          )}
        </div>
        <button className="btn btn-primary mt-3" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>

      {/* Account Settings Section */}
      <section className="mb-5 section">
        <h2 className="section-title">Account</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={profileData.username}
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
              value={profileData.billingAddress.firstName}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={profileData.billingAddress.lastName}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Street Address</label>
            <input
              type="text"
              name="streetAddress"
              className="form-control"
              value={profileData.billingAddress.streetAddress}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={profileData.billingAddress.state}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalcode"
              className="form-control"
              value={profileData.billingAddress.zipCode}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Province</label>
            <input
              type="text"
              name="province"
              className="form-control"
              value={profileData.billingAddress.province}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => handleSaveAddress("billingAddress")}>
          Save Billing Address
        </button>
      </section>

      <hr />

      {/* Shipping Address Section */}
      <section className="mb-5 section">
        <h2 className="section-title">Shipping Address</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={profileData.shippingAddress.firstName}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={profileData.shippingAddress.lastName}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Street Address</label>
            <input
              type="text"
              name="streetAddress"
              className="form-control"
              value={profileData.shippingAddress.streetAddress}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={profileData.shippingAddress.state}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalcode"
              className="form-control"
              value={profileData.shippingAddress.zipCode}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Province</label>
            <input
              type="text"
              name="province"
              className="form-control"
              value={profileData.shippingAddress.province}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => handleSaveAddress("shippingAddress")}>
          Save Shipping Address
        </button>
      </section>

      <hr />

      {/* Change Password Section */}
      <section className="mb-5 section">
        <h2 className="section-title">Change Password</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Current Password</label>
            <input
              type="password"
              name="currentPassword"
              className="form-control"
              value={profileData.currentPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              className="form-control"
              value={profileData.newPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mb-3">
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
        <button className="btn btn-primary" onClick={handlePasswordChange}>
          Change Password
        </button>
      </section>
    </div>
  );
};

export default Profile;
