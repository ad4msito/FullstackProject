//aca vamos a crear el CRUD del objeto peluche
const express = require('express');
const router = express.Router();
const authController = require('./controller.js');

router.post('/login', authController.login);

module.exports = router;