//Importaciones

const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");


//Definir rutas

router.get("/pruebaUsuario",UserController.prueba);



module.exports = router;