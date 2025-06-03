import React from "react";

const NewsCard = ({ image, text, alt }) => {
  return (
    <div className="col-md-4 pr-0 pl-0">
      <div className="news-card">
        <img
          src={`${process.env.PUBLIC_URL}/uploads/${image}`}
          className="news-image"
          alt={alt}
        />
        <p className="news-text">{text}</p>
      </div>
    </div>
  );
};

export default NewsCard;
