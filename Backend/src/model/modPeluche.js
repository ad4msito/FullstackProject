const mongoose = require('mongoose');

const pelucheSchema = new mongoose.Schema({
    tipo:{type:String, required: true},
    color:{type:String, required: true},
    accesorios:{type:String},
    vendidos:{type:Number}},
    { timestamps: true }).set('toJSON',{
    transform: (document, object) => {
        object.id = document.id;
        delete object._id;
    }
});

const Peluche = mongoose.model('Peluche', pelucheSchema);

module.exports = Peluche;