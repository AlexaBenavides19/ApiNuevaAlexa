
const mongoose = require('mongoose');

const proveedorSchema = mongoose.Schema({
    id: {
        type: String,
        required: [true, 'El campo id es obligatorio']
    },
    nombre: {
        type: String,
        required: [true, 'El campo Nombre es obligatorio']
    },
    telefono: {
        type: Number,
        required: [true, 'El campo Telefono es obligatorio']
    },
    correo: {
        type: Number,
        required: [true, 'El campo correo es obligatorio']
    },
    direccion:{
        type: String,
        requiere: [true, 'Elcampo direccion es obligatorio']
    },
    categoria: {
        type: String,
        required: [true, 'El campo categoria es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'El campo de categoria es obligatorio']
    }
});

module.exports = mongoose.model('proveedor', proveedorSchema);
