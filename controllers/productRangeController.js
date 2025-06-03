const ProductRange = require("../models/productRangeModel");

// Existing GET controller
const getProductRange = async (req, res) => {
  try {
    const data = await ProductRange.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product range." });
  }
};

// 🔧 Add UPDATE controller
const updateProductRange = async (req, res) => {
  try {
    const updatedData = await ProductRange.findByIdAndUpdate(
      req.params.id, // ✅ Use the id from the URL
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Product Range not found" });
    }

    res.json(updatedData);
  } catch (error) {
    console.error("Update Error:", error); // Helpful debug log
    res.status(500).json({ message: "Failed to update product range." });
  }
};

module.exports = {
  getProductRange,
  updateProductRange,
};
