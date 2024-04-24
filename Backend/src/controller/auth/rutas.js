//aca vamos a crear el CRUD del objeto peluche
const express = require('express');
const router = express.Router();
const authController = require('./controller.js');
const middleware = require("../middleware/controller");

router.post('/', authController.login);

module.exports = router;