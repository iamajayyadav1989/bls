const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({
  yearsExperience: Number,
  clientsWorldwide: Number,
  capacity: String,
  icons: {
    experience: String,
    clients: String,
    capacity: String,
  },
});

module.exports = mongoose.model("Stats", statsSchema);
