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

const QualityControl = () => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    descriptions: [""],
    image: "",
  });

  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/qualitycontrol")
      .then((res) => {
        setFormData(res.data);
        setId(res.data._id);
      })
      .catch((err) =>
        console.error("Failed to load Quality Control data", err)
      );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDescriptionChange = (e, index) => {
    const { value } = e.target;
    const newDescriptions = [...formData.descriptions];
    newDescriptions[index] = value;
    setFormData((prev) => ({
      ...prev,
      descriptions: newDescriptions,
    }));
  };

  const handleAddDescription = () => {
    setFormData((prev) => ({
      ...prev,
      descriptions: [...prev.descriptions, ""],
    }));
  };

  const handleFileChange = (file) => {
    setFormData((prev) => ({
      ...prev,
      image: file.name,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/qualitycontrol/${id}`, formData)
      .then(() => setMessage("Quality Control updated successfully!"))
      .catch(() => setMessage("Failed to update Quality Control"));
  };

  return (
    <CCard>
      <CCardHeader>Quality Control Section</CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CFormInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormInput
            label="Subtitle"
            name="subTitle"
            value={formData.subTitle}
            onChange={handleChange}
            className="mb-3"
          />
          {formData.descriptions.map((desc, index) => (
            <CFormTextarea
              key={index}
              label={`Description ${index + 1}`}
              name={`description${index}`}
              value={desc}
              onChange={(e) => handleDescriptionChange(e, index)}
              className="mb-3"
            />
          ))}

          {/* Updated File Input Section */}
          <div className="mb-3">
            <label className="form-label">Image Upload</label>
            <div>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e.target.files[0])}
              />
              <CButton
                color="secondary"
                onClick={() => document.getElementById("fileInput").click()}
              >
                Choose File
              </CButton>
              {formData.image && <span className="ms-3">{formData.image}</span>}
            </div>
          </div>

          <CButton type="submit" color="primary">
            Update
          </CButton>
          {message && <p className="mt-3">{message}</p>}
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default QualityControl;
