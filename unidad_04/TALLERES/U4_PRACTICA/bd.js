const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tiendita',
    password: 'amorales',
    port: 5432
})

// pool.connect();

// pool.query('Select * from cliente', (err, res)=>{
//     if (!err){
//         console.log(res.rows);
//     }else{
//         console.log(err, message);
//     }
//     pool.end();
// })

// pool.query(
//     'SELECT * FROM ciudad', (err, res) => {
//       if (err) {
//         console.error('Error al insertar en ciudad:', err);
//       } else {
//         console.log('Inserción exitosa:', res.rows);
//       }
//     }
//   );

module.exports = pool