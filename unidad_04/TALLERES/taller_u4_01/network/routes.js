const usuario = require('../components/usuario/interface')

const routes = function( server ) {
    server.use('/', usuario)
    // server.use('/usuario', usuario)
}

module.exports = routes