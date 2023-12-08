//acciones de prueba

const pruebaPublication =(req,res)=> {
    return res.status(200).send({
        messagge: "Mensaje enviado desde publicacion"
    })
} 

module.exports = {
    pruebaPublication
}