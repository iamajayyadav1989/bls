const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const powerCableSchema = new mongoose.Schema({
  title: String,
  buttonText: String,
  buttonLink: String,
  image: String,
  products: [productSchema],
});

module.exports = mongoose.model("PowerCable", powerCableSchema);
