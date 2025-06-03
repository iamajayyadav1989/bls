const mongoose = require("mongoose");

const globalPresenceSchema = new mongoose.Schema({
  title: String,
  mapImage: String, // image path or URL
  addresses: [
    {
      country: String,
      address: String,
      email: String,
      phone: String,
    },
  ],
});

module.exports = mongoose.model("GlobalPresence", globalPresenceSchema);
