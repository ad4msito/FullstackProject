const express = require('express');
const respuestas = require('../../red/respuestas')
const router = express.Router();

router.get('/', function (req,res){
    respuestas.success(req, res, 'todo OK desde Clientes', 200);
});

module.exports = router;