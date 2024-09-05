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

const factura_schema = new schema({
    codigo: req_string,
    fecha_emision: Date,
    // fecha_actualizacion: Date
    valor_subtotal: req_int,
    valor_iva: req_int,
    valor_total: req_int,
    empleado:{
        type: schema.ObjectId,
        ref: 'Empleado',
        required: true
    },
    cliente:{
        type: schema.ObjectId,
        ref: 'Cliente',
        required: true
    },
    detalle:{
        type: schema.ObjectId,
        ref: 'Producto',
        required: true
    }
},{timestamps: { createdAt: 'fecha_emision'}}
)

const model = mongoose.model('Factura', factura_schema)
module.exports = model