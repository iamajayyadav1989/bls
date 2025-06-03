import React from "react";
import eventData from "./eventData";

const EventsGrid = () => {
  return (
    <section className="events-section container">
      <h3 className="section-title">Events</h3>

      {/* First Row */}
      <div className="row pt-3">
        {eventData.slice(0, 3).map((event, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="event-card">
              <img src={event.image} className="event-image" alt={event.alt} />
              <h5 className="px-2 py-2">
                <strong>{event.title}</strong>
              </h5>
              <p className="px-2 py-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="row pt-5 pb-4">
        {eventData.slice(3).map((event, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="event-card">
              <img src={event.image} className="event-image" alt={event.alt} />
              <p className="px-2 py-2">
                <strong>{event.title}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsGrid;
