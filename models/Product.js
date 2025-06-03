const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String, // just the filename like "fibre-pe-compound.png"
});

module.exports = mongoose.model("Product", productSchema);
