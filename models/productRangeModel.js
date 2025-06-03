const mongoose = require("mongoose");

const productRangeSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  buttonText: String,
  buttonLink: String,
  overlayText: String,
  overlayLink: String,
  image: String,
});

module.exports = mongoose.model("ProductRange", productRangeSchema);
