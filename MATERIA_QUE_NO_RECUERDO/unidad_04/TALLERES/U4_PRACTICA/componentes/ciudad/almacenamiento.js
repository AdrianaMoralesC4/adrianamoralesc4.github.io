const pool = require('../../bd')

async function obtenerCiudades( filtroCiudad ) {
    let resultado = null

    if (filtroCiudad) {
        resultado = await pool.query(
          'SELECT * FROM ciudad WHERE id_ciudad ILIKE $1',  // Usar ILIKE para búsquedas insensibles a mayúsculas/minúsculas
        ['%' + filtroCiudad + '%']
        );
    } else {
        resultado = await pool.query('SELECT * FROM ciudad');
    }
    return resultado.rows
}

async function agregarCiudad( ciudad ) {
    // let resultado = await pool.query('INSERT INTO ciudad(nombre, ref_pais) VALUES ($1, $2)', [ciudad.nombre, ciudad.pais])
    // return resultado
    try {
        const resultado = await pool.query('INSERT INTO ciudad (id_ciudad, nombre, ref_pais) VALUES ($1, $2, $3)',[ciudad.id_ciudad, ciudad.nombre, ciudad.ref_pais]);
        return resultado;
    } catch (error) {
        console.error('Error al agregar ciudad:', error);
        throw error; // O manejar el error según sea necesario
    }
}

async function actualizarCiudad( ciudad ) {
    let resultado = await pool.query('UPDATE ciudad SET id_ciudad = $3, nombre = $1, ref_pais = $2 WHERE id_ciudad = $3', [ciudad.nombre, ciudad.ref_pais, ciudad.id_ciudad])
    return resultado
}

async function eliminarCiudad( ciudad ) {
    let resultado = await pool.query('DELETE FROM ciudad WHERE id_ciudad = $1', [ciudad.id_ciudad])
    return resultado
}

module.exports = {
    obtener: obtenerCiudades,
    agregar: agregarCiudad,
    actualizar: actualizarCiudad,
    eliminar: eliminarCiudad,
}