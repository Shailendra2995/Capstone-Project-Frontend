import React from "react";
import { Modal, Button } from "react-bootstrap";

const ProductModal = ({ show, onClose, product, onAddToCart }) => {
  if (!product) return null;

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={product.img}
          alt={`${product.name} image`}
          className="img-fluid mb-3"
        />
        <p>{product.description}</p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onAddToCart(product);
            onClose();
          }}
        >
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
