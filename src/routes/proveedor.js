const express = require('express');
const proveedorSchema = require('../models/proveedor'); 

// Constructor
const router = express.Router();

// Crear producto
router.post('/proveedor', (req, res) => { 
    const proveedor = new proveedorSchema(req.body); // Cambio de "usuarioSchema" a "productoSchema"
    proveedor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los productos
router.get('/proveedor', (req, res) => {
    proveedorSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un producto
router.get('/proveedor/:id', (req, res) => { 
    const { id } = req.params;
    proveedorSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar un producto
router.put('/proveedor/:id', (req, res) => { 
    const { id } = req.params;
    const { nombre, telefono, correo, direccion, categoria, descripcion } = req.body;
    proveedorSchema
        .updateOne({ _id: id }, { $set: { nombre, telefono, correo, direccion, categoria, descripcion } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar un producto
router.delete('/proveedor/:id', (req, res) => { 
    const { id } = req.params;
    proveedorSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
