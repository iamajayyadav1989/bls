import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter>
      <div>&copy; {new Date().getFullYear()} Your Company</div>
    </CFooter>
  );
};

export default AppFooter;
