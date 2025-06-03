const express = require("express");
const router = express.Router();
const heroSlideController = require("../controllers/heroSlideController");

// POST to create slide (with file upload)
router.post(
  "/",
  heroSlideController.upload.single("file"),
  heroSlideController.createHeroSlide
);

// Other routes
router.get("/", heroSlideController.getHeroSlides);
router.put(
  "/:id",
  heroSlideController.upload.single("file"),
  heroSlideController.updateHeroSlide
);
router.delete("/:id", heroSlideController.deleteHeroSlide);

module.exports = router;
