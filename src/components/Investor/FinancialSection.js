import React from "react";
import financialFile from "../../assets/images/EIL-CERTIFICATION.pdf";

const links = [
  "Earnings Conference Call <br><span class='fw-normal'>Transcript Q2</span><br><span class='fw-normal'>Press Releases</span>",
  "Shareholding Pattern",
  "Financial Results",
  "Investor Presentations",
  "Corporate Governance Report",
];

const FinancialSection = () => {
  return (
    <section className="financial-section">
      <div className="container">
        <div className="financial-title">
          <h4 className="sub-title">2024-2025, Q4</h4>
          <hr className="mt-0" />
        </div>
        <div className="financial-links">
          {links.map((link, i) => (
            <a
              key={i}
              href={financialFile}
              download
              dangerouslySetInnerHTML={{ __html: link }}
            ></a>
          ))}
        </div>
        <hr className="mt-1" />
      </div>
    </section>
  );
};

export default FinancialSection;
