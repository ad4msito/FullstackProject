const express = require('express');
const config = require('./config.js');
const clientesRouter = require('./modulos/clientes/rutas');
const peluchesRouter = require('./modulos/peluches/rutas');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

//conexion con la base de datos
mongoose.connect(config.app.dbURI, {})
    .then(() => {
        console.log('Conexión exitosa a MongoDB Atlas');
    })
    .catch((err) => {
        console.error('Error al conectar a MongoDB Atlas:', err);
    });

//configuracion:
app.set('port', config.app.port);
app.set('dbURI', config.app.dbURI);
//rutas:
app.use('/api/clientes', clientesRouter);
app.use('/api/peluches', peluchesRouter);
//exportar el modulo
module.exports = app;