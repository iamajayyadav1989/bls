import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CButton,
  CFormLabel,
  CFormTextarea,
} from "@coreui/react";

const AdminPipeCoating = () => {
  const [data, setData] = useState({
    title: "",
    buttonText: "",
    buttonLink: "",
    products: [],
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/pipecoating")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error loading data", err));
  }, []);

  const handleChange = (e, i) => {
    const updatedProducts = [...data.products];
    updatedProducts[i][e.target.name] = e.target.value;
    setData({ ...data, products: updatedProducts });
  };

  const handleAddProduct = () => {
    setData({
      ...data,
      products: [...data.products, { title: "", description: "", image: "" }],
    });
  };

  const handleUpdate = () => {
    axios
      .put("http://localhost:5000/api/pipecoating", data)
      .then(() => setMessage("Pipe Coating section updated successfully!"))
      .catch((err) => {
        console.error("Update failed:", err.response?.data || err.message);
        setMessage("Failed to update Pipe Coating");
      });
  };

  return (
    <CCard>
      <CCardHeader>Pipe Coating Section</CCardHeader>
      <CCardBody>
        <CForm>
          <CFormLabel>Title</CFormLabel>
          <CFormInput
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <CFormLabel className="mt-3">Button Text</CFormLabel>
          <CFormInput
            value={data.buttonText}
            onChange={(e) => setData({ ...data, buttonText: e.target.value })}
          />
          <CFormLabel className="mt-3">Button Link</CFormLabel>
          <CFormInput
            value={data.buttonLink}
            onChange={(e) => setData({ ...data, buttonLink: e.target.value })}
          />

          <hr />
          <h4 className="text-primary">Products</h4>
          {data.products.map((p, i) => (
            <div key={i} className="mb-3">
              <CFormLabel>Product Title</CFormLabel>
              <CFormInput
                name="title"
                value={p.title}
                onChange={(e) => handleChange(e, i)}
              />
              <CFormLabel className="mt-3">Description</CFormLabel>
              <CFormTextarea
                name="description"
                value={p.description}
                onChange={(e) => handleChange(e, i)}
              />
              <CFormLabel className="mt-3">
                Image File Name (e.g., coating.jpg)
              </CFormLabel>
              <CFormInput
                name="image"
                value={p.image}
                onChange={(e) => handleChange(e, i)}
              />
            </div>
          ))}

          <CButton color="primary" onClick={handleUpdate}>
            Update
          </CButton>
          {message && <p className="mt-3">{message}</p>}
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AdminPipeCoating;
