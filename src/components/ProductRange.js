import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductRange = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/productrange")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to load ProductRange", err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <section className="product-range">
      <div className="container-fluid">
        <div className="row">
          {/* Left Side: Text Content */}
          <div className="col-lg-6 pl-10 pr-0">
            <h2 className="section-title mt-5">{data.title}</h2>
            <h3 className="product-title pt-3">
              {data.subtitle.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
            <p className="pt-2">
              {data.description.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <div className="row align-items-end">
              <div className="col-6">
                <a href={data.buttonLink} className="btn btn-primary mt-5">
                  {data.buttonText}
                </a>
              </div>
              <div className="col-6 d-none d-sm-block">
                {/* Overlay Box */}
                <div className="overlay-box float-end">
                  <div className="overlay-content">
                    {data.overlayText.split("\n").map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                    <a href={data.overlayLink} className="read-more">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-lg-6 position-relative p-0">
            <img
              src={`${process.env.PUBLIC_URL}/images/${data.image}`}
              alt="Product Range"
              className="img-fluid main-img"
            />
            <div className="image-container">
              <div className="arrow-icon">&#x276F;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
