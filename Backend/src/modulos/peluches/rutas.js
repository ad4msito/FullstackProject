//aca vamos a crear el CRUD del objeto peluche
const express = require('express');
const respuestas = require('../../red/respuestas')
const router = express.Router();
const Peluche = require('../../model/modPeluche');

//crear
router.post('/',async (req, res) =>{
    try {
        const nuevoPeluche = await Peluche.create(req.body);
        respuestas.success(req,res,nuevoPeluche,201);

    }catch (error){
        respuestas.error(req,res,{message:'Error al crear peluche'},400);
    }
});
// Obtener todos los peluches
router.get('/', async (req, res) => {
    try {
        const peluches = await Peluche.find();
        res.json(peluches);
    } catch (error) {
        respuestas.error(req,res,{message:'Error al traer peluches'},500)
    }
});

module.exports = router;