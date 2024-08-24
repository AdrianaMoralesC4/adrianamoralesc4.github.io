const express = require('express') //Se necesita el paquete express

var app = express()

app.use('/', function(req, res){
    res.send('HOLA MUNDOO!!!')
})

let puerto = 3000
app.listen(puerto) // app.listen(puerto)
console.log(`La aplicacion se encuentra funcionando en http://localhost:${puerto}/`)