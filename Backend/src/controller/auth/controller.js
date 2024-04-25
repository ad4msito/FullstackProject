const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const Usuario = require("../../controller/usuarios/controller");
const respuestas =  require("../../redException/respuestas")
const config = require("../../config");
const {router} = require("express/lib/application");
const exp = require("node:constants");
exports.login = async (req, res) => {
    const user = await Usuario.obtenerUsuariosPorEmail(req.body.email, req, res);
    if(user==null){
        respuestas.error(req, res, 'Usuario no encontrado.', 404);
    }
    try {
        const cryptoPass = require('crypto')
            .createHash('sha256')
            .update(req.body.password)
            .digest('hex');
        if (cryptoPass === user.password) {
            const accessToken = jwt.sign({ id: user._id, email: user.email }, config.app.SECRET_KEY);
            res.json({accessToken: accessToken});
        } else {
            respuestas.error(req, res, 'Contraseña invalida', 404);
        }
    } catch (err) {
        respuestas.error(req, res, err, 500);
    }
}

