const ciudad = require('../componentes/ciudad/interfaz')
const factura = require('../componentes/factura/interfaz')
const pais = require('../componentes/pais/interfaz')

const rutas = function(servidor) {
    servidor.use('/factura', factura)
    servidor.use('/ciudad', ciudad)
    servidor.use('/pais', pais)
}

module.exports = rutas