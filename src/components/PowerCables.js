import React, { useEffect, useState } from "react";
import axios from "axios";

const PowerCables = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/powercables")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to load PowerCables", err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <section className="product-section mt-5">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between pb-4">
          <div className="col">
            <h2 className="section-title">{data.title}</h2>
          </div>
          <div className="col-auto">
            <a href={data.buttonLink} className="btn btn-primary">
              {data.buttonText}
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 pr-0">
            <img
              src={`${process.env.PUBLIC_URL}/images/${data.image}`}
              alt="Power Cables"
              className="img-fluid full-width"
            />
          </div>
          <div className="col-lg-6 pl-0">
            {data.products.map((product, index) => (
              <div
                className={`product-info ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerCables;
