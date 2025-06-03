const multer = require("multer");
const path = require("path");
const HeroSlide = require("../models/HeroSlide");
const fs = require("fs");

// Set up multer storage and file filter
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "../public/uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true }); // Ensure the folder exists
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// GET all slides
const getHeroSlides = async (req, res) => {
  try {
    const slides = await HeroSlide.find().sort({ _id: -1 });
    res.json(slides);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch slides." });
  }
};

// CREATE slide
const createHeroSlide = async (req, res) => {
  const { title, subtitle, buttonText, buttonLink } = req.body;
  const image = req.file ? req.file.filename : null; // Save file name

  try {
    const slide = new HeroSlide({
      title,
      subtitle,
      buttonText,
      buttonLink,
      image,
    });

    await slide.save();
    res.status(201).json(slide);
  } catch (err) {
    res.status(400).json({ message: "Failed to create slide." });
  }
};

// UPDATE slide
const updateHeroSlide = async (req, res) => {
  const { title, subtitle, buttonText, buttonLink } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const updatedSlide = await HeroSlide.findByIdAndUpdate(
      req.params.id,
      { title, subtitle, buttonText, buttonLink, image },
      { new: true }
    );

    res.json(updatedSlide);
  } catch (err) {
    res.status(500).json({ message: "Failed to update slide." });
  }
};

// DELETE slide
const deleteHeroSlide = async (req, res) => {
  try {
    await HeroSlide.findByIdAndDelete(req.params.id);
    res.json({ message: "Slide deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete slide." });
  }
};

module.exports = {
  getHeroSlides,
  createHeroSlide,
  updateHeroSlide,
  deleteHeroSlide,
  upload, // Export upload middleware
};
