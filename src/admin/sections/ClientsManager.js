// src/admin/sections/ClientsManager.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientsManager = () => {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    logoUrl: "",
  });

  // Fetch clients from backend
  const fetchClients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/clients");
      setClients(res.data);
    } catch (err) {
      console.error("Error fetching clients:", err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/clients", form);
      setForm({ name: "", logoUrl: "" });
      fetchClients();
    } catch (err) {
      console.error("Error adding client:", err);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/clients/${id}`);
      fetchClients();
    } catch (err) {
      console.error("Error deleting client:", err);
    }
  };

  return (
    <div>
      <h3>Manage Clients</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Client Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Logo URL"
          value={form.logoUrl}
          onChange={(e) => setForm({ ...form, logoUrl: e.target.value })}
        />
        <button type="submit">Add Client</button>
      </form>

      <ul>
        {clients.map((client) => (
          <li key={client._id}>
            {client.name} —{" "}
            <img src={client.logoUrl} alt={client.name} width="50" />
            <button onClick={() => handleDelete(client._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsManager;
