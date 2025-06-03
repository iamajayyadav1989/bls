import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CFormInput,
  CForm,
  CButton,
  CFormTextarea,
} from "@coreui/react";

const Products = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    buttonText: "",
    buttonLink: "",
    overlayText: "",
    overlayLink: "",
    image: "",
  });

  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/productrange")
      .then((res) => {
        setFormData(res.data);
        setId(res.data._id); // store ID to update
      })
      .catch((err) => console.error("Failed to load ProductRange", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/productrange/${id}`, formData)
      .then(() => setMessage("Product Range updated successfully!"))
      .catch(() => setMessage("Failed to update Product Range"));
  };

  return (
    <CCard>
      <CCardHeader>Product Range Section</CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CFormInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormTextarea
            label="Subtitle"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormTextarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormInput
            label="Button Text"
            name="buttonText"
            value={formData.buttonText}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormInput
            label="Button Link"
            name="buttonLink"
            value={formData.buttonLink}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormTextarea
            label="Overlay Text"
            name="overlayText"
            value={formData.overlayText}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormInput
            label="Overlay Link"
            name="overlayLink"
            value={formData.overlayLink}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormInput
            label="Image Filename"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mb-3"
          />

          <CButton type="submit" color="primary">
            Update
          </CButton>
          {message && <p className="mt-3">{message}</p>}
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default Products;
