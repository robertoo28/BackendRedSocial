//Importar dependencias

const { connection } = require("./database/conecction");
const express = require("express");
const cors = require("cors");
//Mensaje de bienvenida

console.log("Conectado A LA RED SOCIAL");
//COnexion a la bdd
connection();

//Crear servidor node
const app = express();
const puerto = 3900;

//Configurar cors
app.use(cors());

//Convertir los datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cargar conf rutas

//Ruta de prueba

app.get("/ruta-prueba", (req, res) => {
  return res.status(200).json({
    id: 1,
    nombre: Roberto,
  });
});

//Poner servidor a escuchar peticiones

app.listen(puerto, () => {
  console.log("Servidor corriendo en " + puerto);
});
