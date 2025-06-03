import React from "react";

const ContactHero = () => {
  return (
    <div className="contact-hero-section d-flex">
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
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
