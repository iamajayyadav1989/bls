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

const AdminPowerCables = () => {
  const [data, setData] = useState({
    title: "",
    buttonText: "",
    buttonLink: "",
    image: "",
    products: [],
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/powercables")
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
      products: [...data.products, { title: "", description: "" }],
    });
  };

  const handleUpdate = () => {
    axios
      .put("http://localhost:5000/api/powercables", data)
      .then(() => setMessage("Power Cable section updated successfully!"))
      .catch((err) => {
        console.error("Update failed:", err.response?.data || err.message);
        setMessage("Failed to update Power Cable");
      });
  };

  return (
    <CCard>
      <CCardHeader>Power Cables Section</CCardHeader>
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
          <CFormLabel className="mt-3">
            Image File Name (e.g., cable.jpg)
          </CFormLabel>
          <CFormInput
            value={data.image}
            onChange={(e) => setData({ ...data, image: e.target.value })}
          />

          <hr />
          <h5>Products</h5>
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

export default AdminPowerCables;
