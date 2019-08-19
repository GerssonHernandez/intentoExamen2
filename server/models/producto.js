const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Definir el esquema para el modelo Producto (Valor 5 puntos)

let usuarioSchema= new Schema({
nombre:{
    type:String,
    required: [true,'El nombre es necesario']
},

precio:{
    type: String,
    required: [true,'El precio es necesario']
},
creado_en:{
    type: Date,
    deafult: 'date.now'

}

});
module.exports = mongoose.model('Producto', usuarioSchema);
