const mongoose = require("mongoose");

const heroSlideSchema = new mongoose.Schema({
  image: String,
  title: String,
  subtitle: String,
  buttonText: String,
  buttonLink: String,
});

module.exports = mongoose.model("HeroSlide", heroSlideSchema);
