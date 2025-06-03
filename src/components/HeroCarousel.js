import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroCarousel = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/heroslides") // Adjust port if needed
      .then((res) => setSlides(res.data))
      .catch((err) => console.error("Error fetching slides:", err));
  }, []);

  return (
    <section
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide._id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div
              className="hero-section d-flex align-items-center"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/uploads/${slide.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="container mob-container text-white p-0">
                <h1 className="hero-title fw-bold">
                  {slide.title.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h1>
                <p className="hero-subtitle">
                  {slide.subtitle.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <a href={slide.buttonLink} className="btn btn-primary hero-btn">
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="carousel-buttons">
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
