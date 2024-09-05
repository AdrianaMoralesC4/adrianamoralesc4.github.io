const mongoose = require('mongoose')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const req_int = {
    type: Number,
    required: true
}

const producto_schema = new schema({
    nombre: req_string,
    valor: req_int
})

const model = mongoose.model('Producto', producto_schema)
module.exports = model