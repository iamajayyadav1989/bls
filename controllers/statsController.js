const Stats = require("../models/StatsModel");

exports.getStats = async (req, res) => {
  try {
    const stats = await Stats.findOne(); // Get first/only document
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch stats", error });
  }
};

exports.updateStats = async (req, res) => {
  try {
    const id = req.params.id;
    const { yearsExperience, clientsWorldwide, capacity, icons } = req.body;

    const updated = await Stats.findByIdAndUpdate(
      id,
      {
        yearsExperience,
        clientsWorldwide,
        capacity,
        icons: typeof icons === "string" ? JSON.parse(icons) : icons,
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Stats not found" });
    }

    res.json(updated);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ error: "Failed to update Stats" });
  }
};
