const mongoose = require("mongoose");

const globalExpansionSchema = new mongoose.Schema({
  title: String,
  paragraph1: String,
  paragraph2: String,
  listItems: [String],
  paragraph3: String,
  image: String,
});

module.exports = mongoose.model("GlobalExpansion", globalExpansionSchema);
