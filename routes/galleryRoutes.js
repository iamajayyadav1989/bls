const express = require("express");
const router = express.Router();
const { getAllGalleryItems } = require("../controllers/galleryController");

// Route: GET /api/gallery
router.get("/", getAllGalleryItems);

module.exports = router;
