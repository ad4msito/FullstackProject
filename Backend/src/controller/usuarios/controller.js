const Usuario = require('../../model/modUsuario');
const respuesta = require('../../red/respuestas');

exports.crearUsuario = async (req,res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        respuesta.success(req, res, nuevoUsuario, 201);
    } catch (error){
        respuesta.error(req,res,'Error al crear el usuario', 400);
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
        if (!usuarioEliminad){
            respuesta.error(req,res,{message:'Usuario no encontrado'}, 404);
        } else {
            respuesta.success(req,res,usuarioEliminado,200);
        }
    } catch (error ) {
        respuesta.error(req,res,{message:'Error al eliminar usuario'}, 500);
    }
}
