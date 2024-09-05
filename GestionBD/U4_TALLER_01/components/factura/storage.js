const { default_type } = require('mime')
const model = require('./model')

async function insertar_factura(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_factura(dato) {

    let mi_filtro = {}
    
    if (dato.codigo != null) {
        mi_filtro = { codigo: dato.codigo }
    }

    const data = await model.find( mi_filtro )
    // .populate("empleado","_id")
    // .populate("cliente")
    .exec()

    let codigos = []
    for(objeto of data){
        let codigo1 = {
            codigo: objeto.codigo,
            fecha_emision: objeto.fecha_emision,
            valor_subtotal: objeto.valor_subtotal,
            valor_iva: objeto.valor_iva,
            valor_total: objeto.valor_total,
            empleado_id: objeto.empleado._id,
            // empleado_nombre: objeto.empleado_nombre,
            cliente_id: objeto.cliente._id,
            // cliente_nombre: objeto.cliente.nombre,
            detalle:[
                objeto.detalle
            ]
            }
            codigos.push(codigo1)
        }
    return codigos
}
    


async function eliminar_factura(dato) {
    const resultado = await model.deleteOne( {codigo: dato.codigo} )
    return resultado
}

module.exports = {
    insertar:insertar_factura,
    obtener:obtener_factura,
    eliminar:eliminar_factura
}