const { insertar_usuario, obtener_usuario } = require('./controller')
const model = require('./model')

module.exports = {
    insertar:insertar_usuario,
    obtener:obtener_usuario
}