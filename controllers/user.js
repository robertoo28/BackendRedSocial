//acciones de prueba

const prueba =(req,res)=> {
    return res.status(200).send({
        messagge: "Mensaje enviado desde usuario"
    })
} 

module.exports = {
    prueba
}