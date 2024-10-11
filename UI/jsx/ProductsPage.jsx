import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const mockProducts = [
  {
    id: 1,
    name: "Apples",
    category: "Fruits",
    price: 1.2,
    stock: 150,
  },
  {
    id: 2,
    name: "Bananas",
    category: "Fruits",
    price: 0.8,
    stock: 200,
  },
  {
    id: 3,
    name: "Carrots",
    category: "Vegetables",
    price: 0.5,
    stock: 180,
  },
  // Add more mock products as needed
];

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // Simulate fetching products from an API
  useEffect(() => {
    // In a real app, replace this with an API call
    setProducts(mockProducts);
  }, []);

  const openAddForm = () => {
    setCurrentProduct(null);
    setIsFormOpen(true);
  };

  const openEditForm = (product) => {
    setCurrentProduct(product);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setCurrentProduct(null);
  };

  const handleFormSubmit = (product) => {
    if (product.id) {
      // Edit existing product
      setProducts((prevProducts) =>
        prevProducts.map((p) => (p.id === product.id ? product : p))
      );
    } else {
      // Add new product
      const newProduct = { ...product, id: Date.now() };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
    closeForm();
  };

  const openConfirmDialog = (product) => {
    setProductToDelete(product);
    setIsConfirmOpen(true);
  };

  const closeConfirmDialog = () => {
    setIsConfirmOpen(false);
    setProductToDelete(null);
  };

  const handleDelete = () => {
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p.id !== productToDelete.id)
    );
    closeConfirmDialog();
  };

  return (
    <div style={styles.productsPage}>
      <header style={styles.productsHeader}>
        <h1 style={styles.headerTitle}>Product Management</h1>
        <button style={styles.addButton} onClick={openAddForm}>
          <FaPlus style={{ marginRight: "5px" }} /> Add Product
        </button>
      </header>

      <table style={styles.productsTable}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Category</th>
            <th style={styles.tableHeader}>Price ($)</th>
            <th style={styles.tableHeader}>Stock</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td style={styles.noData} colSpan="5">
                No products available.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td style={styles.tableCell}>{product.name}</td>
                <td style={styles.tableCell}>{product.category}</td>
                <td style={styles.tableCell}>{product.price.toFixed(2)}</td>
                <td style={styles.tableCell}>{product.stock}</td>
                <td style={styles.tableCell}>
                  <button
                    style={{ ...styles.actionButton, ...styles.editButton }}
                    onClick={() => openEditForm(product)}
                  >
                    <FaEdit style={{ marginRight: "5px" }} /> Edit
                  </button>
                  <button
                    style={{ ...styles.actionButton, ...styles.deleteButton }}
                    onClick={() => openConfirmDialog(product)}
                  >
                    <FaTrash style={{ marginRight: "5px" }} /> Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Product Form Modal */}
      {isFormOpen && (
        <ProductForm
          product={currentProduct}
          onClose={closeForm}
          onSubmit={handleFormSubmit}
        />
      )}

      {/* Confirm Delete Dialog */}
      {isConfirmOpen && (
        <ConfirmDialog
          message={`Are you sure you want to delete "${productToDelete.name}"?`}
          onCancel={closeConfirmDialog}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
};

// Inline Styles
const styles = {
  productsPage: {
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  productsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  headerTitle: {
    margin: 0,
    fontSize: "24px",
    color: "#333",
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    fontSize: "14px",
  },
  productsTable: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    border: "1px solid #ddd",
    padding: "12px",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    fontWeight: "bold",
  },
  tableCell: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
    color: "#555",
  },
  noData: {
    padding: "20px",
    textAlign: "center",
    color: "#777",
  },
  actionButton: {
    border: "none",
    padding: "5px 10px",
    margin: "0 2px",
    cursor: "pointer",
    color: "white",
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "4px",
    fontSize: "12px",
  },
  editButton: {
    backgroundColor: "#007bff",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
  },
  // Modal Styles
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
    width: "400px",
    borderRadius: "5px",
    position: "relative",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  productForm: {
    display: "flex",
    flexDirection: "column",
  },
  formLabel: {
    marginBottom: "10px",
    color: "#333",
  },
  formInput: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  formActions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },
  submitButton: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    marginRight: "10px",
    borderRadius: "4px",
  },
  cancelButton: {
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  confirmDialog: {
    textAlign: "center",
  },
  dialogActions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },
  confirmButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    marginRight: "10px",
    borderRadius: "4px",
  },
};

// ProductForm Component
const ProductForm = ({ product, onClose, onSubmit }) => {
  const [name, setName] = useState(product ? product.name : "");
  const [category, setCategory] = useState(product ? product.category : "");
  const [price, setPrice] = useState(product ? product.price : "");
  const [stock, setStock] = useState(product ? product.stock : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || price === "" || stock === "") {
      alert("Please fill in all fields.");
      return;
    }

    const newProduct = {
      id: product ? product.id : null,
      name,
      category,
      price: parseFloat(price),
      stock: parseInt(stock, 10),
    };

    onSubmit(newProduct);
  };

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <h2 style={{ marginTop: 0 }}>{product ? "Edit Product" : "Add New Product"}</h2>
        <form onSubmit={handleSubmit} style={styles.productForm}>
          <label style={styles.formLabel}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.formInput}
            />
          </label>
          <label style={styles.formLabel}>
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              style={styles.formInput}
            />
          </label>
          <label style={styles.formLabel}>
            Price ($):
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={styles.formInput}
            />
          </label>
          <label style={styles.formLabel}>
            Stock:
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
              style={styles.formInput}
            />
          </label>
          <div style={styles.formActions}>
            <button type="submit" style={styles.submitButton}>
              {product ? "Update" : "Add"}
            </button>
            <button type="button" style={styles.cancelButton} onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ConfirmDialog Component
const ConfirmDialog = ({ message, onCancel, onConfirm }) => {
  return (
    <div style={styles.modal}>
      <div style={{ ...styles.modalContent, ...styles.confirmDialog }}>
        <p>{message}</p>
        <div style={styles.dialogActions}>
          <button style={styles.confirmButton} onClick={onConfirm}>
            Yes
          </button>
          <button style={styles.cancelButton} onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
