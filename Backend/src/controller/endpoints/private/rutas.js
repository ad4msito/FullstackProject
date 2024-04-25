const pelucheController = require('../../peluches/controller');
const autentication = require('../../middleware/controller');
const express = require('express');
const authenticateToken = require("../../middleware/controller");
const privateController = require("./controller");
const router = express.Router();

router.post('/elegirPeluche', authenticateToken, privateController.elegirPeluche);

router.post('/eliminarPeluche', authenticateToken, privateController.eliminarPeluche);
router.get('/misPeluches', authenticateToken, privateController.verPeluches);

module.exports = router;