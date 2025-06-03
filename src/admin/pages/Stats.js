import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CButton,
} from "@coreui/react";

const Stats = () => {
  const [statsData, setStatsData] = useState({
    yearsExperience: 0,
    clientsWorldwide: 0,
    capacity: "",
    icons: {
      experience: "",
      clients: "",
      capacity: "",
    },
  });

  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/stats").then((res) => {
      setStatsData(res.data);
      setId(res.data._id);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("icon-")) {
      const key = name.split("-")[1];
      setStatsData((prev) => ({
        ...prev,
        icons: { ...prev.icons, [key]: value },
      }));
    } else {
      setStatsData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/stats/${id}`, {
        ...statsData,
        icons: JSON.stringify(statsData.icons),
      })
      .then(() => setMessage("Stats updated successfully!"))
      .catch((err) => {
        console.error(err);
        setMessage("Failed to update stats");
      });
  };

  return (
    <CCard>
      <CCardHeader>Edit Stats Section</CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CFormInput
            label="Years of Experience"
            type="number"
            name="yearsExperience"
            value={statsData.yearsExperience}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormInput
            label="Clients Worldwide"
            type="number"
            name="clientsWorldwide"
            value={statsData.clientsWorldwide}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormInput
            label="Capacity"
            name="capacity"
            value={statsData.capacity}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormInput
            label="Experience Icon Filename"
            name="icon-experience"
            value={statsData.icons.experience}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormInput
            label="Clients Icon Filename"
            name="icon-clients"
            value={statsData.icons.clients}
            onChange={handleChange}
            className="mb-3"
          />
          <CFormInput
            label="Capacity Icon Filename"
            name="icon-capacity"
            value={statsData.icons.capacity}
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

export default Stats;
