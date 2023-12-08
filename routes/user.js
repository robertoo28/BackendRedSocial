//Importaciones

const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

//Definir rutas

router.get("/pruebaUsuario", UserController.prueba);
router.post("/register", UserController.register);
router.post("/login",UserController.login)

module.exports = router;
