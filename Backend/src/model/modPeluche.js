const mongoose = require('mongoose');

const pelucheSchema = new mongoose.Schema({
    tipo:{type:String, required: true},
    color:{type:String, required: true},
    accesorios:{type:String},
    vendidos:{type:Number}
});

const Peluche = mongoose.model('Peluche', pelucheSchema);

module.exports = Peluche;