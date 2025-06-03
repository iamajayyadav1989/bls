import React, { useEffect, useState } from "react";
import AddressBox from "./AddressBox";
import axios from "axios";

const GlobalPresence = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGlobalPresence = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/global-presence"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching Global Presence", error);
      }
    };

    fetchGlobalPresence();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="global-presence">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Map & Heading */}
          <div className="col-md-8">
            <h2 className="section-title">
              {data.title.split(" ").slice(0, 2).join(" ")} <br />
              {data.title.split(" ").slice(2).join(" ")}
            </h2>
            <div className="map-container">
              <img
                src={require(`../assets/images/${data.mapImage}`)}
                className="img-fluid"
                alt="World Map"
              />
            </div>
          </div>

          {/* Right: Dynamic Addresses */}
          <div className="col-md-4">
            <AddressBox addresses={data.addresses} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
