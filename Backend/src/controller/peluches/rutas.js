//aca vamos a crear el CRUD del objeto peluche
const express = require('express');
const router = express.Router();
const peluchesController = require('./controller.js');
const llenarDBPeluches = require('./dbPeluche');
//por la logica de negocios, hay funciones desactivadas para evitar que el usuario pueda dañar la integridad de la base de datos de los peluches.
// Crear un nuevo peluche
//router.post('/', peluchesController.crearPeluche);

// Obtener todos los peluches
router.get('/', peluchesController.obtenerPeluches);

// Obtener un peluche por su ID
router.get('/:id', peluchesController.obtenerPeluchePorId);

// Actualizar un peluche por su ID
//router.put('/:_id', peluchesController.actualizarPeluche);

// Eliminar un peluche por su ID
//router.delete('/:id', peluchesController.eliminarPeluche);

//router.post('/llenar', llenarDBPeluches.llenarDBPeluches);

//router.put('/edit', llenarDBPeluches.actualizarPeluches);


module.exports = router;