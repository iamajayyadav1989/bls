const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample contact data (you can make this dynamic later)
const contactInfo = {
  title: "Get in Touch",
  description:
    "We’d love to hear from you! Reach out to us using the info below.",
  details: {
    phone: "+91-9876543210",
    email: "info@blspolymers.com",
    address: "123, Industrial Road, Delhi, India",
  },
  mapEmbedLink: "https://maps.google.com/?q=Delhi",
};

// API Endpoint to GET contact data
app.get("/api/contact", (req, res) => {
  res.json(contactInfo);
});

// API Endpoint to POST contact form data
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("Received contact form data:", req.body);

  // Here you could store in a database or send an email
  return res.status(200).json({ message: "Message received successfully!" });
});

// Import product routes
const productRoutes = require("./routes/productRoutes");

// Use route: http://localhost:5000/api/products
app.use("/api/products", productRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Home Page Hero Carousal
const heroRoutes = require("./routes/heroRoutes");
app.use("/api/heroslides", heroRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/images", express.static("public/images"));

// Home Page Global Expansion
const globalExpansionRoutes = require("./routes/globalExpansionRoutes");
app.use("/api/globalexpansion", globalExpansionRoutes);

const productRangeRoutes = require("./routes/productRangeRoutes");
app.use("/api/productrange", productRangeRoutes);

const statsRoutes = require("./routes/statsRoutes");
app.use("/api/stats", statsRoutes);

const powerCableRoutes = require("./routes/powerCableRoutes");
app.use("/api/powercables", powerCableRoutes);

const pipeCoatingRoutes = require("./routes/pipeCoatingRoutes");
app.use("/api/pipecoating", pipeCoatingRoutes);

const qualityControlRoutes = require("./routes/qualityControlRoutes");
app.use("/api/qualitycontrol", qualityControlRoutes);

const clientsRoute = require("./routes/clients");
app.use("/api/clients", clientsRoute);

const newsSectionRoutes = require("./routes/newsSectionRoutes");
app.use("/api/newssection", newsSectionRoutes);

const globalPresenceRoutes = require("./routes/globalPresenceRoutes");
app.use("/api/global-presence", globalPresenceRoutes);

const galleryRoutes = require("./routes/galleryRoutes");
app.use("/api/gallery", galleryRoutes);

app.use("/api/upload", require("./routes/upload"));

app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection
const mongoURI =
  process.env.USE_LOCAL_DB === "true"
    ? process.env.MONGO_URI_LOCAL
    : process.env.MONGO_URI;
//const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
