import React from "react";

const ProductHero = () => {
  return (
    <div className="events-hero-section d-flex">
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
                Products
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
