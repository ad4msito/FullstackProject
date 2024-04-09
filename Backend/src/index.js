//aca vamos a ejecutar express.js para levantar el servidor.
const app = require('./app.js');
app.listen(app.get('port'), () => {
    console.log('servidor escuchando en el puerto '+ app.get('port'));
});