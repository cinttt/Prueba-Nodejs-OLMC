const express = require("express");
const contactController = require("../controllers/contactController");
const router = express.Router();

//Vista de ToS
router.get("/", contactController.viewContact);
//Recogida de los datos del formulario de contacto
router.post("/", contactController.formContact);

module.exports = router;
