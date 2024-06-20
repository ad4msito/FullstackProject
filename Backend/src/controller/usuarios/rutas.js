const express = require('express');
const router = express.Router();
const authenticateToken = require("../../controller/middleware/controller");
const privateController = require("../endpoints/private/controller.js")
const usuariosController = require('./controller.js');
router.post('/', usuariosController.crearUsuario );

router.get('/',usuariosController.obtenerUsuarios);
router.get('/peluches', authenticateToken, privateController.verPeluches);

router.get('/:id', usuariosController.obtenerUsuarioPorId);

router.get('/email/:email', usuariosController.obtenerUsuariosPorEmail);

router.put('/:id', usuariosController.actualizarUsuario);

router.delete('/:id', usuariosController.eliminarUsuario);
router.delete('/peluches/:id', authenticateToken, privateController.eliminarPeluche);

module.exports = router;