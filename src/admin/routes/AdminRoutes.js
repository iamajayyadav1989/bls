import React from "react";
import { CNavItem } from "@coreui/react";
import { cilSpeedometer, cilNotes } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { NavLink } from "react-router-dom";

export const adminSidebarItems = (
  <>
    <CNavItem
      component={NavLink}
      to="/admin/dashboard"
      icon={<CIcon icon={cilSpeedometer} />}
    >
      Dashboard
    </CNavItem>
    <CNavItem
      component={NavLink}
      to="/admin/products"
      icon={<CIcon icon={cilNotes} />}
    >
      Products
    </CNavItem>
    <CNavItem
      component={NavLink}
      to="/admin/news"
      icon={<CIcon icon={cilNotes} />}
    >
      News
    </CNavItem>
  </>
);
