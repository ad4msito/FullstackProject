const express = require('express');
const config = require('./config.js');
const usuariosRouter = require('./controller/usuarios/rutas');
const peluchesRouter = require('./controller/peluches/rutas');
const authRouter = require('./controller/auth/rutas');
const privateRouter = require('./controller/endpoints/private/rutas');
const publicRouter = require('./controller/endpoints/public/controller');
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

//configuraciones:
app.set('port', config.app.port);
app.set('dbURI', config.app.dbURI);
app.set('SECRET_KEY', config.app.SECRET_KEY);
//rutas:
app.use('/api/usuarios', usuariosRouter);
app.use('/api/peluches', peluchesRouter);
app.use('/api/auth', authRouter);
app.use('/api/private', privateRouter);
app.use('/api/public', publicRouter);

//
module.exports = app;