const Peluche = require('../../model/modPeluche');
let tipos = ['perro', 'conejo', 'oso', 'mapache', 'gato'];
let colores = ['rosa', 'amarillo', 'verde'];
let accesorios = ['camiseta y pelota de futbol', 'guitarra eléctrica', 'notebook'];

exports.llenarDBPeluches = async (req, res) => {
    console.log('1');
    try {
        console.log('2');

        for (let tipo of tipos) {
            for (let color of colores) {
                for (let accesorio of accesorios) {
                    let peluche = new Peluche({
                        tipo: tipo,
                        color: color,
                        accesorios: accesorio,
                    });
                    console.log('4');

                    await peluche.save();
                    console.log('3');

                }
            }
        }
        res.status(200).send('Peluches creados exitosamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al crear los peluches');
    }
}

exports.actualizarPeluches = async (req, res) => {
    try {
        await Peluche.updateMany(
            {},
            { $set: { vendidos: 0 } }
        );
        res.status(200).send('Todos los peluches han sido actualizados exitosamente');
    } catch (error) {
        console.error('Hubo un error al actualizar los peluches', error);
        res.status(500).send('Hubo un error al actualizar los peluches');
    }
}

