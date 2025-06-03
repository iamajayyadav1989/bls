const NewsSection = require("../models/NewsSectionModel");

exports.getNewsSection = async (req, res) => {
  try {
    const section = await NewsSection.findOne();
    res.json(section);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch News Section" });
  }
};

exports.updateNewsSection = async (req, res) => {
  try {
    let section = await NewsSection.findOne();
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    const { title, buttonText, buttonLink, newsItems } = req.body;
    const parsedNewsItems = JSON.parse(newsItems);

    // Handle image uploads
    const updatedNewsItems = parsedNewsItems.map((item, index) => {
      if (req.files && req.files[index]) {
        return {
          ...item,
          image: req.files[index].filename, // New uploaded image
        };
      }
      return item; // Keep old image if not replaced
    });

    section.title = title;
    section.buttonText = buttonText;
    section.buttonLink = buttonLink;
    section.newsItems = updatedNewsItems;

    await section.save();
    res.json(section);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update News Section" });
  }
};
