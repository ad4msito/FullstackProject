const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    email:{type: String, required:true, index: {unique: true, dropDups: true} },
    name:{type: String, required:true},
    lastname:{type: String, required:true},
    isActive:{type: Boolean, required:true, default: true},
    roles:{type: Array, required:true, default: ['user']},
    password:{type: String, required:true},
    peluchesID:{type: Array, required:false}},
{ timestamps: true } ).set('toJSON',{
    transform: (document, object) => {
        object.id = document.id;
        delete object._id;
        delete object.password;
    }
});
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
