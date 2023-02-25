const mongoose = require('mongoose')

//definir el esquema de los agentes
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
})


anuncioSchema.statics.lista = function (filtro, skip, limit, sort, fields) {
  const query = Anuncio.find(filtro); // thenables
  query.skip(skip);
  query.limit(limit);
  query.sort(sort);
  query.select(fields);
  return query.exec();
}

anuncioSchema.statics.listaTags = function(){
  const anuncios = Anuncio.find().distinct('tags')
  console.log(anuncios)
  return(anuncios)
}

//crear el modelo de Agente
const Anuncio = mongoose.model('Anuncio', anuncioSchema)

//exportar el modelo
module.exports = Anuncio