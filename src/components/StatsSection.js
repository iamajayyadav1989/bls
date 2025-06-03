import React, { useEffect, useState } from "react";
import axios from "axios";

const StatsSection = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Error loading stats", err));
  }, []);

  if (!stats) return <div>Loading...</div>;

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-box">
          <div className="stat-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/${stats.icons.experience}`}
              alt="Experience Icon"
              className="icon-star"
            />
            <div className="stat-text">
              <h2>{stats.yearsExperience}+</h2>
              <p>YEARS OF EXPERIENCE</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="stat-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/${stats.icons.clients}`}
              alt="Clients Icon"
              className="user-icon"
            />
            <div className="stat-text">
              <h2>{stats.clientsWorldwide}+</h2>
              <p>CLIENTS WORLDWIDE</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="stat-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/${stats.icons.capacity}`}
              alt="Capacity Icon"
              className="expand-icon"
            />
            <div className="stat-text">
              <h2>{stats.capacity}+</h2>
              <p>MT CAPACITY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
