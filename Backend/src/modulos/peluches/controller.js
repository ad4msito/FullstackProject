// controllers/peluchesController.js
const Peluche = require('../../model/modPeluche');
const respuestas = require('../../red/respuestas');

// Crear un nuevo peluche
exports.crearPeluche = async (req, res) => {
    try {
        const nuevoPeluche = await Peluche.create(req.body);
        respuestas.success(req, res, nuevoPeluche, 201);
    } catch (error) {
        respuestas.error(req, res, { message: 'Error al crear peluche' }, 400);
    }
};
// Obtener todos los peluches
exports.obtenerPeluches = async (req, res) => {
    try {
        const peluches = await Peluche.find();
        res.json(peluches);
    } catch (error) {
        respuestas.error(req, res, { message: 'Error al traer peluches' }, 500);
    }
};

// Obtener un peluche por su ID
exports.obtenerPeluchePorId = async (req, res) => {
    try {
        const peluche = await Peluche.findById(req.params.id);
        if (!peluche) {
            return respuestas.error(req, res, { message: 'Peluche no encontrado' }, 404);
        }
        res.json(peluche);
    } catch (error) {
        respuestas.error(req, res, { message: 'Error al obtener peluche por ID' }, 500);
    }
};

// Actualizar un peluche por su ID
exports.actualizarPeluche = async (req, res) => {
    try {
        const pelucheActualizado = await Peluche.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pelucheActualizado) {
            return respuestas.error(req, res, { message: 'Peluche no encontrado' }, 404);
        }
        res.json(pelucheActualizado);
    } catch (error) {
        respuestas.error(req, res, { message: 'Error al actualizar peluche' }, 500);
    }
};

// Eliminar un peluche por su ID
exports.eliminarPeluche = async (req, res) => {
    try {
        const pelucheEliminado = await Peluche.findByIdAndDelete(req.params.id);
        if (!pelucheEliminado) {
            return respuestas.error(req, res, { message: 'Peluche no encontrado' }, 404);
        }
        res.json({ message: 'Peluche eliminado correctamente' });
    } catch (error) {
        respuestas.error(req, res, { message: 'Error al eliminar peluche' }, 500);
    }
};