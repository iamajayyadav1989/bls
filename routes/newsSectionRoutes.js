const express = require("express");
const router = express.Router();
const {
  getNewsSection,
  updateNewsSection,
} = require("../controllers/newsSectionController");

const multer = require("multer");
const path = require("path");

// Multer setup to upload images to public/uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// GET News Section
router.get("/", getNewsSection);

// PUT Update News Section (with file upload)
router.put(
  "/update",
  upload.array("newsImages"), // Multiple files
  updateNewsSection
);

module.exports = router;
