import React, { useEffect, useState } from "react";
import axios from "axios";

const QualityControl = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/qualitycontrol")
      .then((res) => setData(res.data))
      .catch((err) =>
        console.error("Error fetching quality control data:", err)
      );
  }, []);

  if (!data) return null;

  return (
    <section className="quality-control-section pb-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 text-content">
            <h2 className="section-title text-white">
              {data.title.split(" ").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <p className="sub-title">{data.subTitle}</p>
            {data.descriptions.map((desc, index) => (
              <p key={index} className="description">
                {desc}
              </p>
            ))}
          </div>
          <div className="col-lg-6 pl-0 pr-0">
            <div className="image-wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/images/${data.image}`}
                className="img-fluid"
                alt="Quality Control"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;
