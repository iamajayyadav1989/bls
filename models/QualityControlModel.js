const mongoose = require("mongoose");

const qualityControlSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  descriptions: [String],
  image: String,
});

module.exports = mongoose.model("QualityControl", qualityControlSchema);
