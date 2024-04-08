//aca vamos a crear el CRUD del objeto peluche
const express = require('express');
const router = express.Router();
const peluchesController = require('./controller.js');

// Crear un nuevo peluche
router.post('/', peluchesController.crearPeluche);

// Obtener todos los peluches
router.get('/', peluchesController.obtenerPeluches);

// Obtener un peluche por su ID
router.get('/:id', peluchesController.obtenerPeluchePorId);

// Actualizar un peluche por su ID
router.put('/:id', peluchesController.actualizarPeluche);

// Eliminar un peluche por su ID
router.delete('/:id', peluchesController.eliminarPeluche);

module.exports = router;