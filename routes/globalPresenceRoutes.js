const express = require("express");
const router = express.Router();
const {
  getGlobalPresence,
} = require("../controllers/globalPresenceController");

router.get("/", getGlobalPresence);

module.exports = router;
