import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormInput,
  CButton,
  CRow,
  CCol,
} from "@coreui/react";

const AdminClients = () => {
  const [title, setTitle] = useState("");
  const [clients, setClients] = useState([{ image: "", alt: "" }]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const imageIndexRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/clients").then((res) => {
      if (res.data) {
        setTitle(res.data.title || "");
        setClients(res.data.clients || []);
      }
    });
  }, []);

  const handleClientChange = (index, field, value) => {
    const newClients = [...clients];
    newClients[index][field] = value;
    setClients(newClients);
  };

  const handleImageClick = (index) => {
    imageIndexRef.current = index;
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const newClients = [...clients];
      newClients[imageIndexRef.current].image = res.data.filename;
      setClients(newClients);
    } catch (err) {
      console.error("Image upload failed", err);
      setMessage("Image upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.put("http://localhost:5000/api/clients", { title, clients });
      setMessage("Clients section updated successfully");
    } catch (err) {
      setMessage("Failed to update Clients section");
    }

    setLoading(false);
  };

  const addClient = () => {
    setClients([...clients, { image: "", alt: "" }]);
  };

  const removeClient = (index) => {
    setClients(clients.filter((_, i) => i !== index));
  };

  return (
    <CCard>
      <CCardHeader>Clients Section</CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CFormInput
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3"
          />
          {clients.map((client, index) => (
            <div key={index} className="mb-3 border p-3 rounded">
              <CRow className="align-items-center">
                <CCol md={3}>
                  {client.image ? (
                    <img
                      src={`http://localhost:5000/uploads/${client.image}`}
                      alt={client.alt}
                      style={{ width: "50%", cursor: "pointer" }}
                      onClick={() => handleImageClick(index)}
                    />
                  ) : (
                    <CButton onClick={() => handleImageClick(index)}>
                      Upload Image
                    </CButton>
                  )}
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    label="Alt Text"
                    value={client.alt}
                    onChange={(e) =>
                      handleClientChange(index, "alt", e.target.value)
                    }
                  />
                </CCol>
                <CCol md={3}>
                  <CButton
                    color="danger"
                    className="mt-4"
                    onClick={() => removeClient(index)}
                  >
                    Remove
                  </CButton>
                </CCol>
              </CRow>
            </div>
          ))}

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <CButton color="secondary" className="mr-3" onClick={addClient}>
            + Add Client
          </CButton>
          <CButton
            type="submit"
            color="primary"
            className="ml-15"
            disabled={loading}
          >
            {loading ? "Saving..." : "Update"}
          </CButton>
          {message && <p className="mt-3">{message}</p>}
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AdminClients;
