const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  getGlobalExpansion,
  updateGlobalExpansion,
} = require("../controllers/globalExpansionController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
});
const upload = multer({ storage });

router.get("/", getGlobalExpansion);
router.put("/:id", upload.single("image"), updateGlobalExpansion);

module.exports = router;
