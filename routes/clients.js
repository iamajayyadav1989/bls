const express = require("express");
const router = express.Router();
const {
  getClients,
  updateClients,
} = require("../controllers/clientsController");

router.get("/", getClients);
router.put("/", updateClients); // update whole clients section

module.exports = router;
