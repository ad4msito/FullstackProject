const jwt = require('jsonwebtoken');
require('dotenv').config();
const Usuario = require("../../controller/usuarios/controller");
const respuestas =  require("../../redException/respuestas")
const config = require("../../config");
const {router} = require("express/lib/application");

exports.login = async (req, res) => {
    const user = await Usuario.obtenerUsuariosPorEmail(req.body.email, req, res);
    if(user==null){
        respuestas.error(req, res, 'Usuario no encontrado.', 404);
    }
    try {
        const accessToken = jwt.sign(user, config.app.SECRET_KEY);
        res.json({accessToken: accessToken});
    } catch (err) {
        respuestas.error(req, res, err, 500);
    }
}

