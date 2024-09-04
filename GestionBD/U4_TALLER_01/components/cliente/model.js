const mongoose = require('mongoose')
const schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const cedula_schema = new schema({
    cedula: req_string,
    nombre: req_string,
    apellido: req_string,
    docimilio: req_string,
    ciudad:{
        type: schema.ObjectId,
        ref: 'Ciudad'
    }
})

const model = mongoose.model('Cliente', cedula_schema)
module.exports = model