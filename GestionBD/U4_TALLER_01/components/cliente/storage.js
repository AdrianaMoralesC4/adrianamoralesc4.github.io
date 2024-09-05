const model = require('./model')

async function insertar_cliente(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_cliente(dato) {
    // let mi_filtro = {}
    
    // if (dato.cedula != null) {
    //     mi_filtro = { cedula: dato.cedula }
    // }

    // const resultado = await model.find( mi_filtro )
    // return resultado

    let mi_filtro = {}
    
    if (dato.cedula != null) {
        mi_filtro = { cedula: dato.cedula }
    }

    const data = await model.find( mi_filtro )
    .populate('ciudad')
    .exec( )

    let datos = []
    for (objeto of data) {
        let dato1 = {
            _id: objeto._id,
            cedula: objeto.cedula,
            nombre: objeto.nombre,
            apellido: objeto.apellido,
            domicilio: objeto.domicilio,
            ciudad_id: objeto.ciudad._id,
            ciudad_nombre: objeto.ciudad.nombre
        }
    datos.push( dato1 )
    }
    return datos

}

async function eliminar_cliente(dato) {
    const resultado = await model.deleteOne( {cedula: dato.cedula} )
    return resultado
}

module.exports = {
    insertar:insertar_cliente,
    obtener:obtener_cliente,
    eliminar:eliminar_cliente
}