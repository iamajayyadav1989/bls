import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CButton,
} from "@coreui/react";

const AdminProductSection = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error loading products", err));
  };

  const handleInputChange = (e, index) => {
    const updated = [...products];
    updated[index][e.target.name] = e.target.value;
    setProducts(updated);
  };

  const handleUpdate = (id, index) => {
    axios
      .put(`http://localhost:5000/api/products/${id}`, products[index])
      .then(() => {
        setMessage("Product updated successfully.");
        fetchProducts();
      })
      .catch((err) => {
        console.error("Update failed:", err);
        setMessage("Failed to update product.");
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then(() => {
        setMessage("Product deleted.");
        fetchProducts();
      })
      .catch((err) => {
        console.error("Delete failed:", err);
      });
  };

  const handleAddNewProduct = () => {
    axios
      .post("http://localhost:5000/api/products", newProduct)
      .then(() => {
        setMessage("New product added.");
        setNewProduct({ title: "", description: "", image: "" });
        fetchProducts();
      })
      .catch((err) => {
        console.error("Add failed:", err);
      });
  };

  return (
    <CCard>
      <CCardHeader>Product Section (Optical Fibre Cables)</CCardHeader>
      <CCardBody>
        {products.map((product, i) => (
          <div key={product._id} className="mb-4 border p-3 rounded">
            <CFormLabel>Title</CFormLabel>
            <CFormInput
              name="title"
              value={product.title}
              onChange={(e) => handleInputChange(e, i)}
            />
            <CFormLabel className="mt-2">Description</CFormLabel>
            <CFormTextarea
              name="description"
              value={product.description}
              onChange={(e) => handleInputChange(e, i)}
            />
            <CFormLabel className="mt-2">Image Filename</CFormLabel>
            <CFormInput
              name="image"
              value={product.image}
              onChange={(e) => handleInputChange(e, i)}
            />
            <div className="d-flex gap-2 mt-3">
              <CButton
                color="primary"
                onClick={() => handleUpdate(product._id, i)}
              >
                Update
              </CButton>
            </div>
          </div>
        ))}

        {message && <p className="mt-3 text-success">{message}</p>}
      </CCardBody>
    </CCard>
  );
};

export default AdminProductSection;
