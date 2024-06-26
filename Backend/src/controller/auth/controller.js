const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const Usuario = require("../../controller/usuarios/controller");
const respuestas =  require("../../redException/respuestas")
const config = require("../../config");
const {router} = require("express/lib/application");

exports.login = async (req, res) => {
    const user = await Usuario.obtenerUsuariosPorEmail(req, res);
    if(user==null){
        console.log('error')
    }
    try {
        const cryptoPass = require('crypto')
            .createHash('sha256')
            .update(req.body.pass)
            .digest('hex');
        if (cryptoPass === user.password) {
            const accessToken = jwt.sign({ id: user._id, email: user.email }, config.app.SECRET_KEY);
            res.json({accessToken: accessToken});
        } else {
            respuestas.error(req, res, 'Contraseña invalida', 404);
        }
    } catch (err) {
        res.status(500).json({error:err});
    }
}

