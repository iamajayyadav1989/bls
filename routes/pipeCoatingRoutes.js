const express = require("express");
const router = express.Router();
const {
  getPipeCoating,
  updatePipeCoating,
} = require("../controllers/pipeCoatingController");

router.get("/", getPipeCoating);
router.put("/", updatePipeCoating);

module.exports = router;
