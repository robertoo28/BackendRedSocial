//acciones de prueba

const pruebaFollow = (req, res) => {
  return res.status(200).send({
    messagge: "Mensaje enviado desde follow",
  });
};

module.exports = {
  pruebaFollow,
};
