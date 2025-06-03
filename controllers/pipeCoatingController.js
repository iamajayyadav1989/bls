const PipeCoating = require("../models/PipeCoating");

exports.getPipeCoating = async (req, res) => {
  try {
    const data = await PipeCoating.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pipe coating data" });
  }
};

exports.updatePipeCoating = async (req, res) => {
  try {
    const existing = await PipeCoating.findOne();
    if (!existing) {
      return res.status(404).json({ message: "PipeCoating data not found" });
    }

    existing.title = req.body.title;
    existing.buttonText = req.body.buttonText;
    existing.buttonLink = req.body.buttonLink;
    existing.products = req.body.products;

    await existing.save();

    res.json({ message: "PipeCoating section updated successfully" });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Failed to update PipeCoating" });
  }
};
