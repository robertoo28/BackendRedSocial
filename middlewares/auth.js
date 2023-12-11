//Importar modulos
const jwt = require("jwt-simple");
const moment = require("moment");

//Importar clave secreta
const libjwt = require("../services/jwt");
const secret = libjwt.secret;

//Función de autenticación
exports.auth = (req, res, next) => {
  //Comprobar si me llega la cabecera auth
  if (!req.headers.authorization) {
    return res.status(303).send({
      status: "Error",
      message: "No se ha enviado la cabecera correctamente",
    });
  }
};

//Decodificar token

//Agrega datos del usuario
