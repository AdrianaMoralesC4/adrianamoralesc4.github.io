const { actualizar } = require('../ciudad/storage')
const storage = require('./storage')

function insertar_pais( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato.nombre ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}

function obtener_pais( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}

function eliminar_pais(dato) {
    return new Promise( (resolve, reject) => {
        if ( !dato.nombre ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.eliminar( dato ) )
        }
    } ) 
}

module.exports = {
    insertar_pais,
    obtener_pais,
    eliminar_pais
}