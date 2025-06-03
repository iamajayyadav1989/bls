import React from "react";

const ExibitionGallery = ({ galleryItems }) => {
  return (
    <section className="events-section container pt-5 gallery-section">
      <h3 className="section-title">EXHIBITIONS PHOTO GALLERY</h3>
      <div className="row pt-3">
        {galleryItems.length === 0 ? (
          <p>No gallery items found.</p>
        ) : (
          galleryItems.map((item, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="event-card">
                <img
                  src={`/${item.imageUrl}`} // if stored as "images/photo-1.jpg"
                  className="event-image"
                  alt={item.title}
                />
                <h5 className="px-2 py-2">
                  <strong>{item.title}</strong>
                </h5>
                <p className="px-2 py-2">{item.description}</p>
              </div>
            </div>
          ))
        )}
        <div className="col-md-12 pb-4">
          <hr />
        </div>
      </div>
    </section>
  );
};

export default ExibitionGallery;
