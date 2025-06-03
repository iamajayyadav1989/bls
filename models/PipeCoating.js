const mongoose = require("mongoose");

const pipeCoatingSchema = new mongoose.Schema({
  title: String,
  buttonText: String,
  buttonLink: String,
  products: [
    {
      title: String,
      description: String,
      image: String,
    },
  ],
});

module.exports = mongoose.model("PipeCoating", pipeCoatingSchema);
