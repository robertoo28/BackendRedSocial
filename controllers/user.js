const User = require("../models/user");

const bcrypt = require("bcrypt");

//acciones de prueba

const prueba = (req, res) => {
  return res.status(200).send({
    messagge: "Mensaje enviado desde usuario",
  });
};

const register = async (req, res) => {
  //Recoger datos de la petición

  let params = req.body;

  //Comprobar que me llegan

  if (!params.name || !params.email || !params.password || !params.nick) {
    return res.status(400).json({
      error: "Faltan parametros",
      params,
    });
  }

  //Control de usuarios duplicados
  console.log(
    "Buscando usuario con el correo electrónico: " + params.email.toLowerCase()
  );
  let userFoundByEmail = await User.findOne({
    email: params.email.toLowerCase(),
  }).exec();
  console.log(
    "Resultado de la búsqueda por correo electrónico: ",
    userFoundByEmail
  );

  console.log("Buscando usuario con el apodo: " + params.nick.toLowerCase());

  let userFoundByNick = await User.findOne({
    nick: params.nick.toLowerCase(),
  }).exec();
  console.log("Resultado de la búsqueda por apodo: ", userFoundByNick);
  if (userFoundByEmail || userFoundByNick) {
    return res.status(200).send({
      status: "Succes",
      message: "El usuario ya existe",
    });
  }
  //Cifrar contraseña
  let pwd = await bcrypt.hash(params.password, 10);
  params.password = pwd;
  //Crear objeto de usuario
  let userToSave = new User(params);

  //Guardar usuario en la bdd

  userToSave.save().then(async (userStored) => {
    if (!userStored) {
      return res.status(500).json({
        status: "failed",
        message: "Usuario no registrado",
      });
    }
    return res.status(200).json({
      status: "succes",
      message: "Usuario registado correctamente",
      user: userStored,
    });
  });
};
const login = (req, res) => {
  //Recoger parametros
  const params = req.body;
  if (!params.email || !params.password) {
    return res.status(400).send({
      status: "error",
      message: "Faltan datazos",
    });
  }

  //Buscar en la bdd si existe
  User.findOne({ email: params.email })
    .select({ password: 0 })
    .exec()
    .then((user) => {
      if (!user)
        return res
          .status(404)
          .send({ status: "error", message: "No existe el usuario" });
      //Comprobar su contraseña

      //Devolver token

      //devolver datos de usuario
      return res.status(200).send({
        status: "succes",
        message: "Accion loggin",
        user,
      });
    });
};
module.exports = {
  prueba,
  register,
  login,
};
