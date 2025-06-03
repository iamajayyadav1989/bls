import React from "react";
import { CSidebar, CSidebarNav, CNavItem, CNavGroup } from "@coreui/react";
import { cilSpeedometer } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useNavigate } from "react-router-dom";

const AppSidebar = () => {
  const navigate = useNavigate();

  return (
    <CSidebar unfoldable visible>
      <CSidebarNav>
        <CNavItem onClick={() => navigate("/admin/dashboard")} href="#">
          <CIcon icon={cilSpeedometer} className="nav-icon" />
          Dashboard
        </CNavItem>
        {/* Add more items here */}
      </CSidebarNav>
    </CSidebar>
  );
};

export default AppSidebar;
