import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

const NewsSection = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/newssection");
        setNewsData(res.data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  if (!newsData) return null;

  return (
    <>
      <section className="gradient-section text-center">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between pb-4">
            <div className="col">
              <h2 className="section-title text-white text-start">
                {newsData.title}
              </h2>
            </div>
            <div className="col-auto">
              <a href={newsData.buttonLink} className="btn btn-primary">
                {newsData.buttonText}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <div className="row">
            {newsData.newsItems.map((item, index) => (
              <NewsCard
                key={index}
                image={item.image}
                alt={item.alt}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;
