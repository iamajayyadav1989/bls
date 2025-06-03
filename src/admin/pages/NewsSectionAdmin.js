import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CFormInput,
  CCardHeader,
} from "@coreui/react";

const NewsSectionAdmin = () => {
  const [newsData, setNewsData] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/newssection");
      setNewsData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsData({ ...newsData, [name]: value });
  };

  const handleNewsItemChange = (index, field, value) => {
    const updatedItems = [...newsData.newsItems];
    updatedItems[index][field] = value;
    setNewsData({ ...newsData, newsItems: updatedItems });
  };

  const handleFileChange = (index, file) => {
    setSelectedFiles({ ...selectedFiles, [index]: file });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", newsData.title);
    formData.append("buttonText", newsData.buttonText);
    formData.append("buttonLink", newsData.buttonLink);
    formData.append("newsItems", JSON.stringify(newsData.newsItems));

    Object.keys(selectedFiles).forEach((key) => {
      formData.append("newsImages", selectedFiles[key]);
    });

    try {
      await axios.put("http://localhost:5000/api/newssection/update", formData);
      alert("News Section updated successfully!");
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Failed to update News Section");
    }
  };

  if (!newsData) return null;

  return (
    <div className="container">
      <CCard className="mb-4">
        <CCardHeader> News & Events Section</CCardHeader>
        <CCardBody>
          <CFormInput
            label="Section Title"
            name="title"
            value={newsData.title}
            onChange={handleInputChange}
            className="mb-3"
          />
          <CFormInput
            label="Button Text"
            name="buttonText"
            value={newsData.buttonText}
            onChange={handleInputChange}
            className="mb-3"
          />
          <CFormInput
            label="Button Link"
            name="buttonLink"
            value={newsData.buttonLink}
            onChange={handleInputChange}
            className="mb-3"
          />
        </CCardBody>
      </CCard>

      {newsData.newsItems.map((item, index) => (
        <CCard className="mb-4" key={index}>
          <CCardBody>
            <img
              src={`/uploads/${item.image}`}
              alt={item.alt}
              style={{
                width: "150px",
                height: "auto",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              onClick={() =>
                document.getElementById(`fileInput-${index}`).click()
              }
            />
            <input
              type="file"
              id={`fileInput-${index}`}
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(index, e.target.files[0])}
            />

            <CFormInput
              label="Alt Text"
              value={item.alt}
              onChange={(e) =>
                handleNewsItemChange(index, "alt", e.target.value)
              }
              className="mb-3 mt-3"
            />
            <CFormInput
              label="News Text"
              value={item.text}
              onChange={(e) =>
                handleNewsItemChange(index, "text", e.target.value)
              }
              className="mb-3"
            />
          </CCardBody>
        </CCard>
      ))}

      <CButton color="primary" onClick={handleSubmit} className="mt-3">
        Update
      </CButton>
    </div>
  );
};

export default NewsSectionAdmin;
