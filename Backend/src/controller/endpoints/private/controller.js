const Usuario = require('../../../model/modUsuario');
const Peluche = require('../../../model/modPeluche');

exports.elegirPeluche = async (req,res) =>{
try    {
        let id = req.params.id;

        const findPel = await Peluche.findById(id);
        const usuario = await Usuario.findById(req.userId);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }
        if (findPel) {
            findPel.vendidos = (findPel.vendidos || 0) + 1; // Incrementa en 1 (o inicializa en 1 si es null)
            await findPel.save();
        }

        usuario.peluches.push(findPel);
        await usuario.save();

        res.json({message: 'Peluche agregado con éxito.', peluche: findPel, usuario: usuario});}
        catch(err){
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

exports.eliminarPeluche = async (req, res) =>{
  try {
    const pelucheId = req.params.id;
    const usuario = await Usuario.findById(req.userId);

    if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    const peluches = usuario.peluches;
    let pelucheEncontrado = false;

    peluches.forEach((peluche, index) => {
        if (peluche._id.toString() === pelucheId) {
            peluches.splice(index, 1); // Elimina el peluche del array
            pelucheEncontrado = true;
        }
    });

    if (pelucheEncontrado) {
        await usuario.save();
        res.json({ message: 'Peluche eliminado con éxito.', usuario: usuario });
    } else {
        res.status(404).json({ message: 'Peluche no encontrado.' });
    }
} catch (err) {
    res.status(500).json({ message: 'Error interno del servidor' });
}
};

exports.verPeluches = async (req, res) => {
    try 
    {const usuario = await Usuario.findById(req.userId);
    if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    let peluches = [];

    for (let peluche of usuario.peluches) {
        if (peluche) {
            peluches.push(peluche);
        }
    }
    res.json({peluches: peluches});
 }catch(err){
    res.status(500).json({ message: 'Error interno del servidor' });
}
}