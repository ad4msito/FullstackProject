//aca vamos a crear el CRUD del objeto peluche
const express = require('express');
const router = express.Router();
const peluchesController = require('./controller.js');
const privateController = require('../endpoints/private/controller.js')
const llenarDBPeluches = require('./dbPeluche');
const authenticateToken = require('../../controller/middleware/controller.js')

//por la logica de negocios, hay funciones desactivadas para evitar que el usuario pueda dañar la integridad de la base de datos de los peluches.
// Crear un nuevo peluche
//router.post('/', peluchesController.crearPeluche);
// Obtener todos los peluchess
router.get('/', peluchesController.obtenerPeluches);
//Usuario eligiendo peluche
router.put('/:id',authenticateToken, privateController.elegirPeluche);
// Obtener un peluche por su ID
router.get('/:id', peluchesController.obtenerPeluchePorId);
//obtener ranking de peluches
router.get('/ranking/1', peluchesController.obtenerRaking);
//llenar la base de datos
router.post('/llenar', llenarDBPeluches.llenarDBPeluches);
//agregar ventas a la base de datos
router.put('/edit', llenarDBPeluches.actualizarPeluches);
// Actualizar un peluche por su ID
//router.put('/:_id', peluchesController.actualizarPeluche);
// Eliminar un peluche por su ID
//router.delete('/:id', peluchesController.eliminarPeluche);

module.exports = router;