const storage = require('./storage')

function insertar_producto( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato.nombre || !dato.valor ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}

function obtener_producto( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}

function eliminar_producto(dato) {
    return new Promise( (resolve, reject) => {
        if ( !dato.nombre ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.eliminar( dato ) )
        }
    } ) 
}

module.exports = {
    insertar_producto,
    obtener_producto,
    eliminar_producto
}