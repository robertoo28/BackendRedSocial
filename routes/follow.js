const express = require("express");
const router = express.Router();
const followController = require("../controllers/follow");


//Definir rutas

router.get("/pruebaFollow",followController.pruebaFollow);



module.exports = router;