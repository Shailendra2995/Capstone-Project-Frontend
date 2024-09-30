import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    state: "",
    zipCode: "",
    province: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    shippingAddress: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      postalcode: "",
      province: "",
    },
    billingAddress: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      postalcode: "",
      province: "",
    },
    profileImage: null,
    profileImageName: null,
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
      },
    });
  };

  const handleProfileImageChange = async (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setProfileData({
      ...profileData,
      profileImage: file,
      profileImageName: e.target.files[0],
    });
  };

  const handleSaveImage = async (e) => {
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

    // Append non-nested profile fields
    for (const key in profileData) {
      if (key !== "profileImage" && typeof profileData[key] !== "object") {
        formData.append(key, profileData[key]);
      }
    }

    // Append nested address fields
    const appendAddressFields = (addressType) => {
      const address = profileData[addressType];
      for (const key in address) {
        formData.append(`${addressType}[${key}]`, address[key]);
      }
    };

    appendAddressFields("shippingAddress");
    appendAddressFields("billingAddress");

    // Append profile image
    if (profileData.profileImage) {
      formData.append("profileImage", profileData.profileImage);
    }

    try {
      const response = await fetch("/api/profile/update", {
        method: "POST",
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
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert(
          `${
            addressType.charAt(0).toUpperCase() + addressType.slice(1)
          } Address saved!`
        );
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
      const response = await fetch("/api/profile/change-password", {
        method: "POST",
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
            firstName: billing_address?.firstName || "",
            lastName: billing_address?.lastName || "",
            streetAddress: billing_address?.streetAddress || "",
            city: billing_address?.city || "",
            postalcode: billing_address?.postalcode || "",
            province: billing_address?.province || "",
          },
          shippingAddress: {
            firstName: shipping_address?.firstName || "",
            lastName: shipping_address?.lastName || "",
            streetAddress: shipping_address?.streetAddress || "",
            city: shipping_address?.city || "",
            postalcode: shipping_address?.postalcode || "",
            province: shipping_address?.province || "",
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
          <div className="col-md-6 mb-3">
            <label>Province</label>
            <input
              type="text"
              name="province"
              className="form-control"
              value={profileData.billingAddress?.province || ""}
              onChange={(e) => handleAddressChange(e, "billingAddress")}
            />
          </div>
        </div>
        <button
          className="btn btn-primary mt-3"
          onClick={() => handleSaveAddress("billingAddress")}
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
          <div className="col-md-6 mb-3">
            <label>Province</label>
            <input
              type="text"
              name="province"
              className="form-control"
              value={profileData.shippingAddress?.province || ""}
              onChange={(e) => handleAddressChange(e, "shippingAddress")}
            />
          </div>
        </div>
        <button
          className="btn btn-primary mt-3"
          onClick={() => handleSaveAddress("shippingAddress")}
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
