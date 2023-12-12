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
  //Decodificar token
  let token = req.headers.authorization.replace(/['"]+/g, "");
  try {
    let payload = jwt.decode(token, secret);
    //Comprobar expiración del toke
    if (payload.exp <= moment().unix()) {
      return res.status(401).send({
        status: "Error",
        message: "Token expirado",
      });
    }
    //Agrega datos del usuario
    req.user = payload;
  } catch (error) {
    return res.status(404).send({
      status: "Error",
      message: "Token invalido",
      error,
    });
  }

  next();
};
