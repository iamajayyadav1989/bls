import React from "react";
import iso9001 from "../../assets/images/iso-9001.png";
import fdaApproved from "../../assets/images/fda-approved.png";
import iso14001 from "../../assets/images/iso-14001.png";

const CertificationIcons = () => {
  return (
    <div className="row certification-icons justify-content-left py-5">
      <div className="col-auto">
        <img src={iso9001} alt="ISO 9001" />
      </div>
      <div className="col-auto">
        <img src={fdaApproved} alt="FDA Approved" />
      </div>
      <div className="col-auto">
        <img src={iso14001} alt="ISO 14001" />
      </div>
    </div>
  );
};

export default CertificationIcons;
