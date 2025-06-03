import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients"; // Ensure this file exists

const AdminApp = () => {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/clients" element={<Clients />} />
          {/* Add more routes inside layout */}
        </Routes>
      </AdminLayout>
    </Router>
  );
};

export default AdminApp;
