const empleado = require('../components/empleado/interface')
const ciudad = require('../components/ciudad/interface')
const pais = require('../components/pais/interface')
const cliente = require('../components/cliente/interface')
// const producto = require('../components/producto/interface')
// const facturas = require('../components/facturas/interface')

const routes = function( server ) {
    //server.use('/', usuario)
    server.use('/empleado', empleado)
    server.use('/ciudad', ciudad)
    server.use('/pais', pais)
    server.use('/cliente',cliente)
}

module.exports = routes