const model = require('./model')

async function insertar_factura(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_factura(dato) {
    // let mi_filtro = {}
    
    // if (dato.codigo != null) {
    //     mi_filtro = { codigo: dato.codigo }
    // }

    // const data = await model.find( mi_filtro )
    // .populate('empleado')
    // .populate('cliente')
    // .populate('producto')
    // .exec( )

    // let codigos = []
    // for (objeto of data) {
    //     let codigo1 = {
    //         _id: objeto._id,
    //         codigo: objeto.codigo,
    //         fecha_emision: objeto.fecha_emision,
    //         valor_subtotal: objeto.valor_subtotal,
    //         valor_iva: objeto.valor_iva,
    //         valor_total: objeto.valor_total,
    //         empleado: objeto.empleado._id,
    //         cliente: objeto.cliente._id,
    //         // detalle: objeto.
    //         // [
    //         //     {producto: objeto.producto._id,
    //         //         valor_x_cantidad: objeto.producto.valor

    //         //     }
    //         // ]
    //     }
    // codigos.push( codigo1 )
    // }
    // return codigos

    try {
        const facturas = await Factura.find(filtro)
          .populate('empleado')  // Rellena el campo empleado con su información
          .populate('cliente')   // Rellena el campo cliente con su información
          .populate('detalles.producto')  // Rellena el producto de los detalles
        .exec();
        return facturas;
    } catch (error) {
        throw error;
    }

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