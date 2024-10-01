import React, { useState, useEffect } from "react";

const provinces = [
  { id: "AB", name: "Alberta" },
  { id: "BC", name: "British Columbia" },
  { id: "MB", name: "Manitoba" },
  { id: "NB", name: "New Brunswick" },
  { id: "NL", name: "Newfoundland and Labrador" },
  { id: "NS", name: "Nova Scotia" },
  { id: "NT", name: "Northwest Territories" },
  { id: "NU", name: "Nunavut" },
  { id: "ON", name: "Ontario" },
  { id: "PE", name: "Prince Edward Island" },
  { id: "QC", name: "Quebec" },
  { id: "SK", name: "Saskatchewan" },
  { id: "YT", name: "Yukon" },
];

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    phone: "",
    shippingAddress: {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      postcode: "",
      province_id: "",
    },
    billingAddress: {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      postcode: "",
      province_id: "",
    },
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    profileImage: null,
    profileImageName: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressChange = (e, addressType) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [addressType]: {
        ...prevState[addressType],
        [name]: value,
      },
    }));
  };

  const handleProfileImageChange = async (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setProfileData({
      ...profileData,
      profileImage: file,
      profileImageName: e.target.files[0],
    });
  };

  const handleSaveImage = async () => {
    const formData = new FormData();
    const token = localStorage.getItem("token");
    formData.append("file", profileData.profileImageName);
    try {
      const response = await fetch("http://localhost:8000/api/upload/avatar", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const data = await response.json();

      if (data.status === 0) {
        const path = "http://localhost:8000/storage/" + data.data.path;
        setProfileData({ ...profileData, profileImage: path });
        alert("Profile changes saved!");
      } else {
        alert("Failed to save changes.");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Error saving profile.");
    }
  };

  const handleSaveChanges = async () => {
    const formData = new FormData();
    formData.append("username", profileData.username);
    formData.append("email", profileData.email);
    formData.append("phone", profileData.phone);

    // Append profile image if it exists
    if (profileData.profileImageName) {
      formData.append("profileImage", profileData.profileImageName);
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/user/profile/basic",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const data = await response.json();
      if (data.status === 0) {
        alert("Profile changes saved!");
      } else {
        alert("Failed to save changes: " + data.msg);
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Error saving profile.");
    }
  };

  const handleSaveBillingAddress = async () => {
    const formData = new FormData();

    // Append billing address
    const billingKeys = Object.keys(profileData.billingAddress);
    billingKeys.forEach((key) => {
      formData.append(
        `billingAddress[${key}]`,
        profileData.billingAddress[key]
      );
    });

    try {
      const response = await fetch(
        "http://localhost:8000/api/user/profile/billing-address",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const data = await response.json();
      if (data.status === 0) {
        alert("Billing address saved successfully!");
      } else {
        alert("Failed to save billing address: " + data.msg);
      }
    } catch (error) {
      console.error("Error saving billing address:", error);
      alert("Error saving billing address.");
    }
  };

  const handleSaveShippingAddress = async () => {
    const formData = new FormData();

    // Append shipping address
    const shippingKeys = Object.keys(profileData.shippingAddress);
    shippingKeys.forEach((key) => {
      formData.append(
        `shippingAddress[${key}]`,
        profileData.shippingAddress[key]
      );
    });

    try {
      const response = await fetch(
        "http://localhost:8000/api/user/profile/shipping-address",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const data = await response.json();
      if (data.status === 0) {
        alert("Shipping address saved successfully!");
      } else {
        alert("Failed to save shipping address: " + data.msg);
      }
    } catch (error) {
      console.error("Error saving shipping address:", error);
      alert("Error saving shipping address.");
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
      const response = await fetch(
        "http://localhost:8000/api/user/profile/password",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

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

  const loadData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8000/api/user/profile", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const data = await response.json();

      if (data.status === 0) {
        const {
          username,
          email,
          phone,
          photoUrl,
          billing_address,
          shipping_address,
        } = data.data;
        setProfileData((prevState) => ({
          ...prevState,
          username,
          email,
          phone,
          profileImage: "http://localhost:8000/storage/" + data.data.photoUrl,
          billingAddress: {
            firstname: billing_address?.firstname || "",
            lastname: billing_address?.lastName || "",
            address: billing_address?.address || "",
            city: billing_address?.city || "",
            postcode: billing_address?.postcode || "",
            province_id: billing_address?.province_id || "",
          },
          shippingAddress: {
            firstname: shipping_address?.firstname || "",
            lastname: shipping_address?.lastName || "",
            address: shipping_address?.address || "",
            city: shipping_address?.city || "",
            postcode: shipping_address?.postcode || "",
            province_id: shipping_address?.province_id || "",
          },
        }));
      } else {
        alert("Failed to load data: " + data.msg);
      }
    } catch (error) {
      console.error("Error loading data:", error);
      alert("Error loading data.");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container mt-5 account-settings">
      {/* Profile Image */}
      <div className="text-center mb-4 profile-section">
        <img
          src={profileData.profileImage ?? "./img1.jpg"}
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
          {profileData.profileImage && profileData.profileImage.name && (
            <span className="file-name">{profileData.profileImage.name}</span>
          )}
        </div>
        <button className="btn btn-primary mt-3" onClick={handleSaveImage}>
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
              value={profileData.phone || ""}
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
              value={profileData.billingAddress?.firstName || ""}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={profileData.billingAddress?.lastName || ""}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Street Address</label>
            <input
              type="text"
              name="streetAddress"
              className="form-control"
              value={profileData.billingAddress?.streetAddress || ""}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={profileData.billingAddress?.city || ""}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalcode"
              className="form-control"
              value={profileData.billingAddress?.postalcode || ""}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
            />
          </div>
          <div className="form-group">
            <label>Province</label>
            <select
              name="province_id"
              value={profileData.billingAddress.province_id}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
              className="form-control"
            >
              <option value="">Select Province</option>
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="btn btn-primary mt-3"
          onClick={() => handleSaveBillingAddress("billingAddress")}
        >
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
              value={profileData.shippingAddress?.firstName || ""}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={profileData.shippingAddress?.lastName || ""}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Street Address</label>
            <input
              type="text"
              name="streetAddress"
              className="form-control"
              value={profileData.shippingAddress?.streetAddress || ""}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={profileData.shippingAddress?.city || ""}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalcode"
              className="form-control"
              value={profileData.shippingAddress?.postalcode || ""}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
            />
          </div>
          <div className="form-group">
            <label>Province</label>
            <select
              name="province_id"
              value={profileData.shippingAddress.province_id}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
              className="form-control"
            >
              <option value="">Select Province</option>
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="btn btn-primary mt-3"
          onClick={() => handleSaveShippingAddress("shippingAddress")}
        >
          Save Shipping Address
        </button>
      </section>

      <hr />

      {/* Password Section */}
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
            <label>Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={profileData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3" onClick={handlePasswordChange}>
          Change Password
        </button>
      </section>
    </div>
  );
};

export default Profile;
