const usuario = require('../components/usuario/interface')
// const index_user = require('../views/layout/index_user')

const routes = function( server ) {
    server.use('/', usuario)
    server.use('/add_user', usuario)
    server.use('/update_user', usuario)
    // server.use('/usuario', usuario)
}

module.exports = routes