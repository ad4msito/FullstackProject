//aca ponemos las variables globales del sistema
require('dotenv').config();
module.exports = {
    app:{
        port: process.env.PORT,
        dbURI: process.env.ATLAS_URI,
        SECRET_KEY: process.env.SECRET_KEY
    }
}

