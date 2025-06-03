const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin"); // Adjust path as needed

mongoose.connect("mongodb://127.0.0.1:27017/bls-plymers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = new Admin({
    username: "admin",
    email: "admin@example.com",
    password: hashedPassword,
  });

  await admin.save();
  console.log("Admin created");
  mongoose.disconnect();
};

createAdmin();
