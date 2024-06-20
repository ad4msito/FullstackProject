const Usuario = require('../../model/modUsuario');
const respuesta = require('../../redException/respuestas');

exports.crearUsuario = async (req,res) => {
    let {email,name,lastname,roles,password,peluches} = req.body;
    try {
        let verifMail = await Usuario.findOne({ email:email})
        if (!verifMail) {
            const cryptoPass = require('crypto')
                .createHash('sha256')
                .update(password)
                .digest('hex');
            console.log(cryptoPass);
            const usr = new Usuario(
                {
                    name: name,
                    lastname:lastname,
                    email: email,
                    roles: roles,
                    isActive: true,
                    password:cryptoPass,
                    peluches:peluches
                });
            let user = await Usuario.create(usr);
            respuesta.success(req, res, user, 201);
        } else {
            respuesta.error(req,res, 'Email invalido', 400)
        }
    } catch (error){
        console.log(error)
        respuesta.error(req,res,'Error al crear el usuario', 500);
    }
}
exports.obtenerUsuarios = async (req,res)=>{
    try {
        const usuarios = await Usuario.find();
        respuesta.success(req,res,usuarios,200);
    } catch (error){
        respuesta.error(req,res,{message:'Error al obtener peluches'}, 404);
    }
}
exports.obtenerUsuariosPorEmail = async (req,res) => {
    try {
        const usuario = await Usuario.findOne({email:req.body.email});
        if (!usuario) {
            respuesta.error(req,res,{message:'Usuario no encontrado'}, 404);
        } else {
            return usuario.toObject();
        }
    } catch (error){
        res.status(500).json(error);
    }
}
exports.obtenerUsuarioPorId = async (req,res) =>{
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            respuesta.error(req,res,{message:'Usuario no encontrado'}, 404);
        } else {
            respuesta.success(req,res,usuario,201);
        }
    } catch (error){
        respuesta.error(req,res,{message:'Error al buscar usuario'}, 500);
    }
}
exports.actualizarUsuario = async (req, res) =>{
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!usuarioActualizado){
            respuesta.error(req, res, {message:'Usuario no encontrado'},404);
        } else {
            respuesta.success(req,res,usuarioActualizado,200);
        }
    } catch (error) {
        respuesta.error(req,res,{message:'Error al actualizar usuario'}, 500);
    }
}
exports.eliminarUsuario = async (req, res) =>{
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
            respuesta.success(req,res,'Usuario eliminado.',200)
    } catch (error ) {
        respuesta.error(req,res,{message:'Error al eliminar usuario'}, 500);
    }
}
