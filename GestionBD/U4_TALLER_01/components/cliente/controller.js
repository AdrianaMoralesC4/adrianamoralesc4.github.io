const storage = require('./storage')

function insertar_cliente( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato.cedula || !dato.nombre || !dato.apellido || !dato.domicilio || !dato.ciudad) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}

function obtener_cliente( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}

function eliminar_cliente(dato) {
    return new Promise( (resolve, reject) => {
        if ( !dato.cedula ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.eliminar( dato ) )
        }
    } ) 
}

module.exports = {
    insertar_cliente,
    obtener_cliente,
    eliminar_cliente
}