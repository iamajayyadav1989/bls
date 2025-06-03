import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
  CFormLabel,
  CForm,
} from "@coreui/react";

const HeroCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    buttonText: "",
    buttonLink: "",
    image: null,
  });

  const fetchSlides = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/heroslides");
      setSlides(res.data);
    } catch (error) {
      console.error("Error fetching slides", error);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("title", formData.title);
    data.append("subtitle", formData.subtitle);
    data.append("buttonText", formData.buttonText);
    data.append("buttonLink", formData.buttonLink);
    if (formData.image) {
      data.append("file", formData.image); // Include image if new image is uploaded
    }

    try {
      if (isEditing) {
        // Send update request for an existing slide
        const response = await axios.put(
          `http://localhost:5000/api/heroslides/${currentId}`,
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        console.log(response.data);
      } else {
        // Send create request for new slide
        const response = await axios.post(
          "http://localhost:5000/api/heroslides",
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        console.log(response.data);
      }
      fetchSlides(); // Refresh slides list after submission
      handleClose();
    } catch (error) {
      console.error("Error submitting slide", error);
    }
  };

  const handleEdit = (slide) => {
    setIsEditing(true);
    setCurrentId(slide._id);
    setFormData({
      title: slide.title,
      subtitle: slide.subtitle,
      buttonText: slide.buttonText,
      buttonLink: slide.buttonLink,
      image: null, // Don't reset the image, let the user decide to change it
    });
    setVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/heroslides/${id}`);
      fetchSlides(); // Refresh slides list after delete
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const handleClose = () => {
    setVisible(false);
    setIsEditing(false);
    setCurrentId(null);
    setFormData({
      title: "",
      subtitle: "",
      buttonText: "",
      buttonLink: "",
      image: null,
    });
  };

  return (
    <CCard>
      <CCardHeader>
        <div className="d-flex justify-content-between align-items-center">
          Hero Carousel Section
          <CButton
            color="primary"
            onClick={() => {
              setIsEditing(false);
              setVisible(true);
            }}
          >
            Add New Slide
          </CButton>
        </div>
      </CCardHeader>
      <CCardBody>
        <CTable striped hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Image</CTableHeaderCell>
              <CTableHeaderCell>Title</CTableHeaderCell>
              <CTableHeaderCell>Subtitle</CTableHeaderCell>
              <CTableHeaderCell>Button</CTableHeaderCell>
              <CTableHeaderCell>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {slides.map((slide) => (
              <CTableRow key={slide._id}>
                <CTableDataCell>
                  <img
                    src={`${process.env.PUBLIC_URL}/uploads/${slide.image}`}
                    alt="slide"
                    style={{ width: 100 }}
                  />
                </CTableDataCell>
                <CTableDataCell>{slide.title}</CTableDataCell>
                <CTableDataCell>{slide.subtitle}</CTableDataCell>
                <CTableDataCell>{slide.buttonText}</CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color="info"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(slide)}
                  >
                    Edit
                  </CButton>

                  <CButton
                    color="danger"
                    size="sm"
                    onClick={() => handleDelete(slide._id)}
                  >
                    Delete
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>

      <CModal visible={visible} onClose={handleClose} size="lg">
        <CModalHeader>
          <CModalTitle>{isEditing ? "Edit Slide" : "Add Slide"}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel>Title</CFormLabel>
              <CFormInput
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel>Subtitle</CFormLabel>
              <CFormInput
                name="subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel>Button Text</CFormLabel>
              <CFormInput
                name="buttonText"
                value={formData.buttonText}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel>Button Link</CFormLabel>
              <CFormInput
                name="buttonLink"
                value={formData.buttonLink}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel>
                Image {isEditing ? "(Upload to replace)" : ""}
              </CFormLabel>
              <CFormInput
                type="file"
                name="image"
                onChange={handleInputChange}
              />
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={handleClose}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSubmit}>
            {isEditing ? "Update Slide" : "Save Slide"}
          </CButton>
        </CModalFooter>
      </CModal>
    </CCard>
  );
};

export default HeroCarousel;
