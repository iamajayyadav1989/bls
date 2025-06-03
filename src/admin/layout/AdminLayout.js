import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../assets/admin.css";
import {
  CContainer,
  CFooter,
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavLink,
  CSidebarBrand,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilSpeedometer,
  cilNewspaper,
  cilImage,
  cilGlobeAlt,
  cilList,
  cilChart,
  cilBolt,
  cilColorBorder,
  cilListRich,
  cilSettings,
  cilGroup,
} from "@coreui/icons";

// 🔥 Import Topbar
import Topbar from "../components/Topbar";

const AdminLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Topbar */}
      <Topbar />

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <CSidebar visible={true} className="border-end">
          <CSidebarNav>
            <CNavItem>
              <CNavLink
                as={NavLink}
                to="/admin/dashboard"
                activeClassName="active"
              >
                <CIcon icon={cilSpeedometer} className="me-2" />
                Dashboard
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={NavLink}
                to="/admin/herocarousel"
                activeClassName="active"
              >
                <CIcon icon={cilImage} className="me-2" />
                Hero Slider
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={NavLink}
                to="/admin/globalexpansion"
                activeClassName="active"
              >
                <CIcon icon={cilGlobeAlt} className="me-2" />
                Global Expansion
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={NavLink}
                to="/admin/product-range"
                activeClassName="active"
              >
                <CIcon icon={cilList} className="me-2" />
                Product Range
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink as={NavLink} to="/admin/stats" activeClassName="active">
                <CIcon icon={cilChart} className="me-2" />
                Stats
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={NavLink}
                to="/admin/power-cables"
                activeClassName="active"
              >
                <CIcon icon={cilBolt} className="me-2" />
                Power Cable
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={NavLink}
                to="/admin/pipe-coating"
                activeClassName="active"
              >
                <CIcon icon={cilColorBorder} className="me-2" />
                Pipe Coating
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={NavLink}
                to="/admin/products"
                activeClassName="active"
              >
                <CIcon icon={cilListRich} className="me-2" />
                Product Section
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={NavLink}
                to="/admin/quality-control"
                activeClassName="active"
              >
                <CIcon icon={cilSettings} className="me-2" />
                Quality Control
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={NavLink}
                to="/admin/clients"
                activeClassName="active"
              >
                <CIcon icon={cilGroup} className="me-2" />
                Clients
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={NavLink}
                to="/admin/news-section"
                activeClassName="active"
              >
                <CIcon icon={cilNewspaper} className="me-2" />
                News
              </CNavLink>
            </CNavItem>
          </CSidebarNav>
        </CSidebar>

        {/* Main Content */}
        <CContainer fluid className="flex-grow-1 py-4">
          <Outlet />
        </CContainer>
      </div>

      <CFooter className="bg-dark text-white py-2 justify-content-center">
        <div>© 2025 BLS Polymers Admin</div>
      </CFooter>
    </div>
  );
};

export default AdminLayout;
