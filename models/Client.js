const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  title: String,
  clients: [
    {
      image: String,
      alt: String,
    },
  ],
});

module.exports = mongoose.model("Client", clientSchema);
