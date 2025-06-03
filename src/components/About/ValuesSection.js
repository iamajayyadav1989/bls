import React from "react";
import valuesIcon from "../../assets/images/values-icon.png";

const ValuesSection = () => {
  return (
    <section className="values-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="values-title">
              <img src={valuesIcon} alt="Values Icon" /> VALUES
            </h2>
          </div>
        </div>

        {/* First Row */}
        <div className="row text-center mt-4">
          <div className="col-md-4 value-item border-end">
            <h3>
              Product
              <br />
              Excellence
            </h3>
            <p>
              To excel in the manufacturing of Polymer Compounds so that our
              products are best-in-class.
            </p>
          </div>
          <div className="col-md-4 value-item border-end">
            <h3>Management Best Practices</h3>
            <p>
              To control & manage our mainstream businesses around corporate
              best practices.
            </p>
          </div>
          <div className="col-md-4 value-item">
            <h3>
              Customer
              <br />
              Delight
            </h3>
            <p>
              We believe that our growth is tied to our customers' growth, hence
              we always look for new ways to add value.
            </p>
          </div>
        </div>

        <div className="value-divider"></div>

        {/* Second Row */}
        <div className="row text-center mt-4">
          <div className="col-md-4 value-item border-end">
            <h3>Learning and Innovation</h3>
            <p>
              A commitment to innovation and excellence. Continual emphasis on
              learning and knowledge management.
            </p>
          </div>
          <div className="col-md-4 value-item border-end">
            <h3>Equal Opportunity Employer</h3>
            <p>
              To provide every opportunity for employees, clients, and business
              associates to realize their full potential.
            </p>
          </div>
          <div className="col-md-4 value-item">
            <h3>Collaborative Teamwork</h3>
            <p>
              Team effort channeled in the right direction can help solve the
              toughest of challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
