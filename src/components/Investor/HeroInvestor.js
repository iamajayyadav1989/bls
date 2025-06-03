import React from "react";
import { Link } from "react-router-dom";

const HeroInvestor = () => {
  return (
    <div className="investor-hero-section d-flex">
      <div className="container">
        <div className="breadcrumb-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li
                className="breadcrumb-item active text-danger"
                aria-current="page"
              >
                Investor Relations
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeroInvestor;
