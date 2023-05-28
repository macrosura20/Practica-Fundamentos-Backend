'use strict'

require('dotenv').config();
const { Anuncio, Usuario } = require('../models');
const connection = require('../lib/connectMongoose')

main().catch(err => console.log('Hubo un error', err))

async function main(){
    //inicializamos coleccion de agentes
    await initAnuncios()

    // inicializamos colección de usuarios
    await initUsuarios();

    connection.close()

}


async function initAnuncios(){
    // borrar todos los documentos de la coleccion de agentes
    const deleted = await Anuncio.deleteMany();
    console.log('Eliminados', deleted)
    
    //crear agentes iniciales
    const inserted = await Anuncio.insertMany([
        { nombre: 'bicicleta', venta: true, precio: 230.15, foto: "bici.jpg", tags:["lifestyle", "motor"]},
        { nombre: 'iPhone 12', venta: false, precio: 425.30, foto: "iphone.jpg", tags:["lifestyle", "mobile"]},
        { nombre: 'auriculares Sony', venta: false, precio: 9.50, foto: "AuricularesSony.jpg", tags:["work"]},
        { nombre: 'samsung A13', venta: true, precio: 163, foto: "samsungA13.jpg", tags:["lifestyle", "mobile"]},
        { nombre: 'casco', venta: true, precio: 45.99, foto: "casco.jpg", tags:["lifestyle", "motor"]},
        { nombre: 'silla Giratoria', venta: true, precio: 74.99, foto: "Silla.jpg", tags:["lifestyle", "work"]},
        { nombre: 'samsung S22', venta: true, precio: 585, foto: "samsungS22.jpg", tags:["lifestyle", "mobile"]},
    ])
    console.log(`Creados ${inserted.length} anuncios`)
}

async function initUsuarios() {
    // borrar todos los documentos de usuarios
    const deleted = await Usuario.deleteMany();
    console.log(`Eliminados ${deleted.deletedCount} usuarios.`);
  
    // crear usuarios iniciales
    const inserted = await Usuario.insertMany([
        { email: 'admin@example.com', password: await Usuario.hashPassword('1234')},
        { email: 'usuario@example.com', password: await Usuario.hashPassword('1234')},
    ]);
    console.log(`Creados ${inserted.length} usuarios.`);
  }