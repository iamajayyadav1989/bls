const express = require("express");
const router = express.Router();
const {
  getProductRange,
  updateProductRange,
} = require("../controllers/productRangeController");

router.get("/", getProductRange);
router.put("/:id", updateProductRange);

module.exports = router;
