const express = require("express");
const router = express.Router();
const publicationController = require("../controllers/publication");


//Definir rutas

router.get("/pruebaPublication",publicationController.pruebaPublication);



module.exports = router;