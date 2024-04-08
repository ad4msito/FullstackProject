const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    email:{type: String, required:true,
        index: {unique: true, dropDups: true}},
    name:{type: String, required:true},
    lastname:{type: String, required:true},
    isActive:{type: Boolean, required:true},
    roles:{type: Array, required:true, default: ['user']},
    password:{type: String, required:true}
});
const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
