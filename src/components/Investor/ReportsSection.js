import React from "react";
import annualIcon from "../../assets/images/annual-report-icon.png";
import reportLogo from "../../assets/images/investor-bls-logo.jpg";
import reportPdf from "../../assets/images/EIL-CERTIFICATION.pdf";

const reports = [
  { year: "2019-20", file: reportPdf },
  { year: "2018-19", file: reportPdf },
  { year: "2017-18", file: reportPdf },
];

const ReportsSection = () => {
  return (
    <section className="reports-section mt-5">
      <div className="container">
        <div className="row text-center pb-4">
          <div className="col-12">
            <h2 className="reports-title">
              <img src={annualIcon} alt="Annual Report Icon" /> Annual Reports
            </h2>
          </div>
        </div>
        <div className="row text-center">
          {reports.map((report, index) => (
            <div
              className={`col-md-4 ${
                index < reports.length - 1 ? "border-end" : ""
              }`}
              key={index}
            >
              <div className="report-card">
                <img src={reportLogo} alt="BLS Polymers Report" />
                <h5 className="pt-4">
                  Annual Report <br /> for the Year {report.year}
                </h5>
                <a href={report.file} download>
                  Download Report
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;
