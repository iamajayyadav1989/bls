const QualityControl = require("../models/qualityControlModel");

const getQualityControl = async (req, res) => {
  try {
    const data = await QualityControl.findOne();
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch quality control data", error });
  }
};

const updateQualityControl = async (req, res) => {
  try {
    const { id } = req.params;
    let { title, subTitle, descriptions } = req.body;

    // Initialize update object with text fields
    let updateData = {
      title,
      subTitle,
    };

    // Handle file upload if present
    if (req.file) {
      updateData.image = `/public/uploads/quality-control/${req.file.filename}`;
    } else if (req.body.image) {
      // Keep existing image if no new file was uploaded
      updateData.image = req.body.image;
    }

    // Handle descriptions (could come as string or array)
    if (descriptions) {
      try {
        // Try to parse if it's a JSON string
        updateData.descriptions =
          typeof descriptions === "string"
            ? JSON.parse(descriptions)
            : descriptions;
      } catch (err) {
        // If parsing fails, treat as single description
        updateData.descriptions = [descriptions];
      }
    }

    const updatedControl = await QualityControl.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedControl) {
      return res
        .status(404)
        .json({ message: "Quality control data not found" });
    }

    res.status(200).json({
      message: "Quality control updated successfully",
      data: updatedControl,
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({
      message: "Failed to update quality control data",
      error: error.message,
    });
  }
};

module.exports = { getQualityControl, updateQualityControl };
