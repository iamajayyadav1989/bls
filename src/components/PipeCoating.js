import React, { useEffect, useState } from "react";
import axios from "axios";

const PipeCoating = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/pipecoating")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) return null;

  return (
    <section className="product-section pipe-coating">
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
          {data.products.map((item, index) => (
            <div key={index} className="col-md-4 px-0">
              <div
                className="product-card"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.image})`,
                }}
              >
                <div className={`overlay ${index === 2 ? "active" : ""}`}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipeCoating;
