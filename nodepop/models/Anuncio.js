const mongoose = require('mongoose')

//definir el esquema de los agentes
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
})

// Tipos de métodos:
// - Agente.createWithColor('red')  --> método estático
// - agente.sendEmail({ subject: 'asdsa' }) --> método de instancia (no usar arrow functions)
anuncioSchema.statics.lista = function(filtro, skip, limit, sort, fields) {
    const query = Agente.find(filtro); // thenables
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);
    return query.exec();
  }
  
  anuncioSchema.methods.saluda = function() {
    console.log('Hola, soy el agente', this.name);
  }

//crear el modelo de Agente
const Anuncio = mongoose.model('Anuncio', anuncioSchema)

//exportar el modelo
module.exports = Anuncio