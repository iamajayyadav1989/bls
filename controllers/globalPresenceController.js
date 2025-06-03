const GlobalPresence = require("../models/globalPresenceModel");

exports.getGlobalPresence = async (req, res) => {
  try {
    const data = await GlobalPresence.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Global Presence" });
  }
};
