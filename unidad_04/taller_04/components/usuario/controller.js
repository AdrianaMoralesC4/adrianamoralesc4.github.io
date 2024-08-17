const storage = require('./storage')

function insertar_usuario(data){
    return Promise( (resolve, reject) => {
        resolve(storage.insertar())
    })
}

function obtener_usuario(data){
    return Promise( (resolve, reject) => {
        resolve(storage.obtener())
    })
}

module.exports = {
    insertar_usuario,
    obtener_usuario
}