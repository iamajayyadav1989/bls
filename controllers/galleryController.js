const Gallery = require("../models/Gallery");

const getAllGalleryItems = async (req, res) => {
  try {
    const galleryItems = await Gallery.find();
    res.status(200).json(galleryItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch gallery items", error });
  }
};
module.exports = {
  getAllGalleryItems,
};
