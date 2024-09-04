const storage = require('./storage')

function insertar_empleado( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato.cedula || !dato.nombre || !dato.apellido || !dato.usuario || !dato.clave) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}

function obtener_empleado( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}

// function actualizar_empleado(dato) {
//     return new Promise( (resolve, reject) => {
//         if (!dato.cedula || !dato.nombre || !dato.apellido || !dato.usuario || !dato.clave) {
//             reject( 'Los datos se encuentran incompletos.' )
//         } else {
//             let usuario = {
//                 cedula: dato.cedula,
//                 nombre: dato.nombre,
//                 apellido: dato.apellido,
//                 usuario: dato.usuario,
//                 clave: dato.clave
//             }
//             resolve( storage.actualizar( usuario ) )
//         }
//     } ) 
// }

function eliminar_empleado(dato) {
    return new Promise( (resolve, reject) => {
        if ( !dato.cedula ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.eliminar( dato ) )
        }
    } ) 
}

module.exports = {
    insertar_empleado,
    obtener_empleado,
    // actualizar_empleado,
    eliminar_empleado
}