const express = require("express");
const router = express.Router();
const { getStats, updateStats } = require("../controllers/statsController");

router.get("/", getStats);
router.put("/:id", updateStats); // Admin update

module.exports = router;
