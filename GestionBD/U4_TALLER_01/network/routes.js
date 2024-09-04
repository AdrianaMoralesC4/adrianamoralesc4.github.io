const empleado = require('../components/empleado/interface')
const ciudad = require('../components/ciudad/interface')
const pais = require('../components/pais/interface')

const routes = function( server ) {
    //server.use('/', usuario)
    server.use('/empleado', empleado)
    server.use('/ciudad', ciudad)
    server.use('/pais', pais)
}

module.exports = routes