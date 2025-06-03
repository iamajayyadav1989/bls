const GlobalExpansion = require("../models/globalExpansionModel");
const fs = require("fs");
const path = require("path");

// ✅ GET Handler
const getGlobalExpansion = async (req, res) => {
  try {
    const data = await GlobalExpansion.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching Global Expansion:", error);
    res.status(500).json({ error: "Failed to fetch Global Expansion data" });
  }
};

// ✅ UPDATE Handler
const updateGlobalExpansion = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, paragraph1, paragraph2, paragraph3, listItems } = req.body;

    const updateData = {
      title,
      paragraph1,
      paragraph2,
      paragraph3,
      listItems: JSON.parse(listItems),
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updated = await GlobalExpansion.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.json(updated);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ error: "Failed to update Global Expansion" });
  }
};

// ✅ Export both functions
module.exports = {
  getGlobalExpansion,
  updateGlobalExpansion,
};
