const express = require("express");
const tosController = require("../controllers/tosController");
const router = express.Router();

//Vista de ToS
router.get("/", tosController.tosView);

module.exports = router;
