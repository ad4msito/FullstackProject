const express = require('express');
const config = require('./config.js');
const cors = require('cors');
const usuariosRouter = require('./controller/usuarios/rutas');
const peluchesRouter = require('./controller/peluches/rutas');
const authRouter = require('./controller/auth/rutas');
const mongoose = require('mongoose');
const app = express();
//para los res json
app.use(express.json());
//para el intercambio backend y frontend
const corsOptions = {
    origin: '*', // Permitir solicitudes solo desde este origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Permitir el uso de credenciales
    optionsSuccessStatus: 204 // Algunos navegadores antiguos fallan con 204
};
app.use(cors(corsOptions));
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
app.use('/api/usuarios', cors(),usuariosRouter);
app.use('/api/peluches', cors(), peluchesRouter);
app.use('/api/auth', cors(), authRouter);
//
module.exports = app;