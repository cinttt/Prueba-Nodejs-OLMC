const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
//Vista principal
//localhost:3000
router.get("/", indexController.viewHome);

module.exports = router;
