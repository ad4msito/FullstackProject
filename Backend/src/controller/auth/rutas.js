//aca vamos a crear el CRUD del objeto peluche
const express = require('express');
const router = express.Router();
const privateController = require('../endpoints/private/controller')
const authController = require('./controller.js');
const authToken = require('../middleware/controller')
const authenticateToken = require("../middleware/controller");
const {usuario} = require("./controller");
router.post('/login', authController.login);
/* campos a ingresar:
{
    "email":"adam@mail.com",
    "password":"ad4msito"
}
 */

module.exports = router;