const storage = require('./storage')

function insertar_factura( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato.codigo || !dato.fecha_emision || !dato.valor_subtotal || !dato.valor_iva || !dato.valor_total || !dato.empleado || !dato.cliente || !dato.detalle) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}

function obtener_factura( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}

function eliminar_factura(dato) {
    return new Promise( (resolve, reject) => {
        if ( !dato.codigo ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.eliminar( dato ) )
        }
    } ) 
}

module.exports = {
    insertar_factura,
    obtener_factura,
    eliminar_factura
}