const Client = require("../models/Client");

const getClients = async (req, res) => {
  try {
    const data = await Client.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateClients = async (req, res) => {
  try {
    const { title, clients } = req.body;

    const existing = await Client.findOne();

    if (existing) {
      existing.title = title;
      existing.clients = clients;
      await existing.save();
      res.json({ message: "Clients updated successfully", data: existing });
    } else {
      const newClient = new Client({ title, clients });
      await newClient.save();
      res.status(201).json({ message: "Clients created", data: newClient });
    }
  } catch (err) {
    console.error("Update Clients Error:", err);
    res
      .status(500)
      .json({
        message: "Failed to update clients section",
        error: err.message,
      });
  }
};

module.exports = {
  getClients,
  updateClients,
};
