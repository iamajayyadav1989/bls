// seedAdmin.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");
require("dotenv").config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    const existingAdmin = await Admin.findOne({ email: "admin@example.com" });

    if (existingAdmin) {
      console.log("Admin already exists.");
      return process.exit();
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const newAdmin = new Admin({
      username: "admin", // ✅ ensure this matches frontend input
      email: "admin@example.com",
      password: hashedPassword,
    });

    await newAdmin.save();
    console.log("Admin user seeded successfully.");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();
