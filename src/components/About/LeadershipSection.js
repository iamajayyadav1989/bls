import React from "react";
import leadershipIcon from "../../assets/images/leadership-icon.png";

const LeadershipSection = () => {
  return (
    <section className="leadership-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="leadership-title">
              <img src={leadershipIcon} alt="Leadership Icon" /> LEADERSHIP TEAM
            </h3>
            <p className="text-muted">
              BLS Polymers is an Indian leader in the polymer compounds
              manufacturing business with a focus on cable compounds...
            </p>
          </div>
        </div>

        {/* Leadership Members */}
        <div className="row text-center mt-4">
          <div className="col-md-6 leader-item border-end">
            <h3>Shri Vinod Aggarwal</h3>
            <p>
              Shri Aggarwal has over 35 years of experience in plastics and
              chemical-related industries...
              <br />
              Shri Aggarwal holds a Bachelor of Science, Delhi University.
            </p>
          </div>
          <div className="col-md-6 leader-item">
            <h3>Shri Karan Aggarwal</h3>
            <p>
              Shri Aggarwal completed his Bachelor's from Delhi University and
              pursued an MBA from the USA...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
