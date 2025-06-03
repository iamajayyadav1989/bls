import React from "react";
import heritageIcon from "../../assets/images/heritage-icon.jpg";

const HeritageSection = () => {
  return (
    <section className="heritage-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="heritage-title">
              <img src={heritageIcon} alt="Heritage Icon" /> HERITAGE
            </h3>
            <p className="heritage-text">
              The polymer compounds major that is BLS Polymers today traces its
              roots to the enterprising vision of Sri Vinod Aggarwal who decided
              to venture into the highly technical field of polymers...
            </p>
            <p className="heritage-text">
              BLS Polymers prioritizes customer engagement and technical
              expertise to ensure customer satisfaction...
            </p>
            <p className="heritage-text">
              In 2014, BLS introduced SAP to usher in global best practices and
              further differentiate itself...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
