import React from "react";
import { CNavItem, CNavTitle } from "@coreui/react";
import { NavLink } from "react-router-dom";

const SidebarNav = () => {
  return (
    <>
      <CNavTitle>Admin</CNavTitle>
      <CNavItem component={NavLink} to="/admin/dashboard">
        Dashboard
      </CNavItem>
      <CNavItem component={NavLink} to="/admin/products">
        Products
      </CNavItem>
      <CNavItem component={NavLink} to="/admin/news">
        News
      </CNavItem>
      <CNavItem component={NavLink} to="/admin/clients">
        Clients
      </CNavItem>
    </>
  );
};

export default SidebarNav;
