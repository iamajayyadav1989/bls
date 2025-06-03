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

const GlobalExpansion = () => {
  const [formData, setFormData] = useState({
    title: "",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    listItems: ["", "", "", ""], // Initialize with 4 empty items
    image: "",
  });

  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/globalexpansion")
      .then((res) => {
        if (res.data.length > 0) {
          const data = res.data[0];
          setFormData({
            title: data.title || "",
            paragraph1: data.paragraph1 || "",
            paragraph2: data.paragraph2 || "",
            paragraph3: data.paragraph3 || "",
            listItems: data.listItems || ["", "", "", ""],
            image: data.image || "",
          });
          setId(data._id);
        }
      })
      .catch((err) => console.error("Failed to load Global Expansion", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        image: files[0], // store the file
      }));
    } else if (name.startsWith("listItems-")) {
      const index = parseInt(name.split("-")[1]);
      const updatedItems = [...formData.listItems];
      updatedItems[index] = value;
      setFormData((prev) => ({
        ...prev,
        listItems: updatedItems,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", formData.title);
    form.append("paragraph1", formData.paragraph1);
    form.append("paragraph2", formData.paragraph2);
    form.append("paragraph3", formData.paragraph3);
    form.append("listItems", JSON.stringify(formData.listItems));

    if (formData.image instanceof File) {
      form.append("image", formData.image);
    }

    // Log form data for debugging
    for (let pair of form.entries()) {
      console.log(pair[0], pair[1]);
    }

    axios
      .put(`http://localhost:5000/api/globalexpansion/${id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => setMessage("Global Expansion updated successfully!"))
      .catch((err) => {
        console.error("Update failed:", err.response?.data || err.message);
        setMessage("Failed to update Global Expansion");
      });
  };

  return (
    <CCard>
      <CCardHeader>Global Expansion Section</CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CFormTextarea
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormTextarea
            label="Paragraph 1"
            name="paragraph1"
            value={formData.paragraph1}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormTextarea
            label="Paragraph 2"
            name="paragraph2"
            value={formData.paragraph2}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormTextarea
            label="Paragraph 3"
            name="paragraph3"
            value={formData.paragraph3}
            onChange={handleChange}
            className="mb-3"
          />

          {formData.listItems.map((item, idx) => (
            <CFormInput
              key={idx}
              label={`List Item ${idx + 1}`}
              name={`listItems-${idx}`}
              value={item}
              onChange={handleChange}
              className="mb-3"
            />
          ))}

          <CFormInput
            type="file"
            name="image"
            label="Image"
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

export default GlobalExpansion;
