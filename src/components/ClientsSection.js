import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientsSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/clients")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return null;

  return (
    <section className="clients-section">
      <div className="container">
        <div className="row">
          <div className="col-6 pr-0 col-xs-12">
            <div className="overlay">
              <h2 className="section-title">
                <span className="line"></span> {data.title}
              </h2>
              <div className="row align-items-center text-center">
                {data.clients.map((client, index) => (
                  <div className="col-md-4 col-6" key={index}>
                    <img
                      src={`${process.env.PUBLIC_URL}/uploads/${client.image}`}
                      className="client-logo"
                      alt={client.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
