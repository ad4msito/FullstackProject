// controllers/peluchesController.js
const Peluche = require('../../model/modPeluche');
const respuesta = require('../../redException/respuestas');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
// Crear un nuevo peluche
exports.crearPeluche = async (req, res) => {
    try {
        const nuevoPeluche = await Peluche.create(req.body);
        respuesta.success(req, res, nuevoPeluche, 201);
    } catch (error) {
        respuesta.error(req, res, { message: 'Error al crear peluche' }, 400);
    }
};
// Obtener todos los peluches
exports.obtenerPeluches = async (req, res) => {
    try {
        const peluches = await Peluche.find();
        respuesta.success(req,res,peluches,200);
    } catch (error) {
        respuesta.error(req, res, { message: 'Error al obtener peluches' }, 500);
    }
};

// Obtener un peluche por su ID
exports.obtenerPeluchePorId = async (req, res) => {
    try {
        const peluche = await Peluche.findById(req.params.id);
        if (!peluche) {
            return respuesta.error(req, res, { message: 'Peluche no encontrado' }, 404);
        } else {
            respuesta.success(req, res, peluche, 200);
        }
    } catch (error) {
        respuesta.error(req, res, { message: 'Error al obtener peluche por ID' }, 500);
    }
};

// Actualizar un peluche por su ID
exports.actualizarPeluche = async (req, res) => {
    try {
        console.log(req.params._id);
        const pelucheActualizado = await Peluche.findByIdAndUpdate(req.params._id, req.body, { new: true });
        if (!pelucheActualizado) {
            return respuesta.error(req, res, { message: 'Peluche no encontrado' }, 404);
        } else {
            respuesta.success(req, res, pelucheActualizado, 200);
        }
    } catch (error) {
        console.log(error);
        respuesta.error(req, res, { message: 'Error al actualizar peluche' }, 500);
    }
};

// Eliminar un peluche por su ID
exports.eliminarPeluche = async (req, res) => {
    try {
        const pelucheEliminado = await Peluche.findByIdAndDelete(req.params.id);
        if (!pelucheEliminado) {
            return respuesta.error(req, res, { message: 'Peluche no encontrado' }, 404);
        } else {
            respuesta.success(req, res, {message: 'Peluche eliminado correctamente'}, 200);
        }
    } catch (error) {
        respuesta.error(req, res, { message: 'Error al eliminar peluche' }, 500);
    }
};
