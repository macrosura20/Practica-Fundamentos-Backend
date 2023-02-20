const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connection.on('error', err => {
    console.log('Error de conexion', err)
})

mongoose.connection.once('open', () => {
    console.log('Conectado a MongoDB en', mongoose.connection.name)
})

mongoose.connect('mongodb://127.0.0.1:27017/practica') //127.0.0.1 formato ipv4

module.exports = mongoose.connection