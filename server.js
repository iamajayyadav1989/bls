const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Serve static files from 'public'
app.use("/uploads", express.static("uploads"));
app.use("/images", express.static("public/images"));
app.use(express.static(path.join(__dirname, "public")));

// ---------- API ROUTES ---------- //

// Sample Contact APIs
app.get("/api/contact", (req, res) => {
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
  res.json(contactInfo);
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("Received contact form data:", req.body);
  return res.status(200).json({ message: "Message received successfully!" });
});

// Main API routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/heroslides", require("./routes/heroRoutes"));
app.use("/api/globalexpansion", require("./routes/globalExpansionRoutes"));
app.use("/api/productrange", require("./routes/productRangeRoutes"));
app.use("/api/stats", require("./routes/statsRoutes"));
app.use("/api/powercables", require("./routes/powerCableRoutes"));
app.use("/api/pipecoating", require("./routes/pipeCoatingRoutes"));
app.use("/api/qualitycontrol", require("./routes/qualityControlRoutes"));
app.use("/api/clients", require("./routes/clients"));
app.use("/api/newssection", require("./routes/newsSectionRoutes"));
app.use("/api/global-presence", require("./routes/globalPresenceRoutes"));
app.use("/api/gallery", require("./routes/galleryRoutes"));
app.use("/api/upload", require("./routes/upload"));

// ---------- Serve React Frontend ---------- //
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// ---------- Start Server ---------- //
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
