import React from "react";
import cert1 from "../../assets/images/EIL-CERTIFICATION_page-0001.jpg";
import cert2 from "../../assets/images/ISO-9001-2015-Certificate_page-0001.jpg";

const CertificatesGrid = () => {
  return (
    <div className="row text-center">
      <div className="col-md-3 certificate border-end">
        <a href="images/EIL-CERTIFICATION.pdf" download>
          <img src={cert1} alt="Certificate" />
        </a>
        <div className="zoom-icon">
          <i className="fa fa-search-plus"></i>
        </div>
      </div>

      <div className="col-md-3 certificate">
        <a href="images/EIL-CERTIFICATION.pdf" download>
          <img src={cert2} alt="Certificate 1" />
        </a>
        <div className="zoom-icon">
          <i className="fa fa-search-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default CertificatesGrid;
