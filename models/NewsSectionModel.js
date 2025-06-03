const mongoose = require("mongoose");

const newsItemSchema = new mongoose.Schema({
  image: String,
  alt: String,
  text: String,
});

const newsSectionSchema = new mongoose.Schema({
  title: String,
  buttonText: String,
  buttonLink: String,
  newsItems: [newsItemSchema],
});

module.exports = mongoose.model("NewsSection", newsSectionSchema);
