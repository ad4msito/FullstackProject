const Usuario = require('../../../model/modUsuario');
const Peluche = require('../../../model/modPeluche');

exports.elegirPeluche = async (req,res) =>{
try    {
    console.log(req.body); // Verifica los datos recibidos

    const tipo = req.body.tipo;
    const color = req.body.color;
    const accesorios = req.body.accesorios;

        const findPel = await Peluche.findOne({
            tipo:tipo,
            color:color,
            accesorios:accesorios
        });

        const usuario = await Usuario.findById(req.userId);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }
        if (findPel) {
            findPel.vendidos = (findPel.vendidos || 0) + 1;
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
          console.log(peluches)
          const index = peluches.findIndex((peluche) => peluche._id.toString() === pelucheId);

        if (index !== -1) {
            peluches.splice(index, 1);
        }
        await usuario.save()
          res.json(peluches)
        }catch(err){
            console.log(err)
            res.status(500).json({error:'error interno del servidor', err})
        }
    }
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