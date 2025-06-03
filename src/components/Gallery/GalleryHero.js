import React from "react";

const AboutHero = () => {
  return (
    <div className="gallery-hero-section d-flex">
      <div className="container">
        <div className="breadcrumb-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item active text-danger"
                aria-current="page"
              >
                Gallery
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
