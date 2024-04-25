const Usuario = require('../../../model/modUsuario');
const Peluche = require('../../../model/modPeluche');


exports.elegirPeluche = async (req,res) =>{
        let tipo = req.body.tipo;
        let color = req.body.color;
        let accesorio = req.body.accesorios;

        const findPel = await Peluche.findOne({tipo: tipo, color: color, accesorios: accesorio});

        const usuario = await Usuario.findById(req.userId);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        usuario.peluchesID.push(findPel._id);

        await usuario.save();

        res.json({message: 'Peluche agregado con éxito.', peluche: findPel, usuario: usuario});
}

exports.eliminarPeluche = async (req, res) =>{
    let pelucheId = req.body.pelucheId;

    const usuario = await Usuario.findById(req.userId);

    if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    usuario.peluchesID.pull(pelucheId);

    await usuario.save();

    res.json({message: 'Peluche eliminado con éxito.', usuario: usuario});
}

exports.verPeluches = async (req, res) => {
    const usuario = await Usuario.findById(req.userId);

    if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    let peluches = [];

    for (let pelucheId of usuario.peluchesID) {
        const peluche = await Peluche.findById(pelucheId);
        if (peluche) {
            peluches.push(peluche);
        }
    }
    res.json({peluches: peluches});
}