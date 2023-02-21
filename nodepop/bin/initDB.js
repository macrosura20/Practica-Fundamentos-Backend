'use strict'

const Anuncio = require('../models/Anuncio')
const connection = require('../lib/connectMongoose')

main().catch(err => console.log('Hubo un error', err))

async function main(){
    //inicializamos coleccion de agentes
    await initAnuncios()

    connection.close()

}


async function initAnuncios(){
    // borrar todos los documentos de la coleccion de agentes
    const deleted = await Anuncio.deleteMany();
    console.log('Eliminados', deleted)
    
    //crear agentes iniciales
    const inserted = await Anuncio.insertMany([
        { nombre: 'Bicicleta', venta: true, precio: 230.15, foto: "bici.jpg", tags:["lifestyle", "motor"]},
        { nombre: 'iPhone 12', venta: false, precio: 425.30, foto: "iphone.jpg", tags:["lifestyle", "mobile"]}
    ])
    console.log(`Creados ${inserted.length} anuncios`)
}