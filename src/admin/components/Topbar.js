import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CAvatar,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

const Topbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/admin/login");
  };

  return (
    <CHeader position="sticky" className="mb-4 bg-primary text-white px-4">
      <CHeaderBrand className="d-flex align-items-center me-auto text-white">
        <img
          src={process.env.PUBLIC_URL + "/images/footer-logo.png"}
          alt="BLS Polymers"
          height={50}
          className="me-2"
        />
      </CHeaderBrand>

      <CHeaderNav className="d-flex align-items-center gap-3">
        <CDropdown variant="nav-item">
          <CDropdownToggle
            placement="bottom-end"
            className="py-0"
            caret={false}
          >
            <CAvatar
              src={process.env.PUBLIC_URL + "/images/avtar.jpg"}
              size="md"
              status="success"
              style={{ cursor: "pointer" }}
            />
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem onClick={handleLogout}>Logout</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CHeaderNav>
    </CHeader>
  );
};

export default Topbar;
