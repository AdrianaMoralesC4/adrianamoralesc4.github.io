const model = require('./model')

async function insertar_producto(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_producto(dato) {
    let mi_filtro = {}
    
    if (dato.nombre != null) {
        mi_filtro = { nombre: dato.nombre }
    }

    const resultado = await model.find( mi_filtro )
    return resultado
}

async function eliminar_producto(dato) {
    const resultado = await model.deleteOne( {nombre: dato.nombre} )
    return resultado
}

module.exports = {
    insertar:insertar_producto,
    obtener:obtener_producto,
    eliminar:eliminar_producto
}