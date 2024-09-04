const model = require('./model')

async function insertar_empleado(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_empleado(dato) {
    let mi_filtro = {}
    
    if (dato.cedula != null) {
        mi_filtro = { cedula: dato.cedula }
    }

    const resultado = await model.find( mi_filtro )
    return resultado
}

// async function actualizar_empleado(dato) {
//     const usuario = await model.findOne( {usuario:dato.usuario} )
//     usuario.nombre = dato.nombre
//     usuario.apellido = dato.apellido
//     usuario.clave = dato.clave
//     usuario.fecha_nacimiento = dato.fecha_nacimiento

//     const resultado = usuario.save()
//     return resultado
// }

async function eliminar_empleado(dato) {
    const resultado = await model.deleteOne( {usuario: dato.usuario} )
    return resultado
}

module.exports = {
    insertar:insertar_empleado,
    obtener:obtener_empleado,
    // actualizar:actualizar_empleado,
    eliminar:eliminar_empleado
}