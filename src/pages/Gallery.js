import React, { useEffect, useState } from "react";
import axios from "axios";
import GalleryHero from "../components/Gallery/GalleryHero";
import ExibitionGallery from "../components/Gallery/ExibitionGallery";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/gallery")
      .then((res) => setGalleryItems(res.data))
      .catch((err) => console.error("Error fetching gallery:", err));
  }, []);

  return (
    <>
      <GalleryHero />
      <ExibitionGallery galleryItems={galleryItems} />
    </>
  );
};

export default Gallery;
