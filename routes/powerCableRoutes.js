const express = require("express");
const router = express.Router();
const {
  getPowerCable,
  updatePowerCable,
} = require("../controllers/powerCableController");

router.get("/", getPowerCable);
router.put("/", updatePowerCable);

module.exports = router;
