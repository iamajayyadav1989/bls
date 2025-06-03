const PowerCable = require("../models/powerCableModel");

// GET
exports.getPowerCable = async (req, res) => {
  try {
    const data = await PowerCable.findOne();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// UPDATE
exports.updatePowerCable = async (req, res) => {
  try {
    const existing = await PowerCable.findOne();
    if (!existing) {
      return res.status(404).json({ message: "PowerCable section not found" });
    }

    existing.title = req.body.title;
    existing.buttonText = req.body.buttonText;
    existing.buttonLink = req.body.buttonLink;
    existing.image = req.body.image;
    existing.products = req.body.products;

    await existing.save();

    res.status(200).json({ message: "PowerCable updated successfully" });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: "Update failed", error });
  }
};
