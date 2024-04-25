const Usuario = require('../../../model/modUsuario');
const express = require("express");
const Peluche = require("../../../model/modPeluche");
const router = express.Router();

router.get('/rankingPeluches', async (req, res) => {
    const usuarios = await Usuario.find();

    let conteoPeluches = {};
    for (let usuario of usuarios) {
        for (let pelucheId of usuario.peluchesID) {
            if (conteoPeluches[pelucheId]) {
                conteoPeluches[pelucheId]++;
            } else {
                conteoPeluches[pelucheId] = 1;
            }
        }
    }
    let ranking = Object.entries(conteoPeluches);
    let rankingConInfo = [];

    for (let [pelucheId, conteo] of ranking) {
        const peluche = await Peluche.findById(pelucheId);
        if (peluche) {
            rankingConInfo.push({peluche: peluche, cantidad_de_ventas: conteo});
        }
    }
    res.json({ranking: rankingConInfo});
});

module.exports = router;