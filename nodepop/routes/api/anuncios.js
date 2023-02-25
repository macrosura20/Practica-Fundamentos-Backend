const express = require('express')
//const { router } = require('..')
const router = express.Router()
const Anuncio = require('../../models/Anuncio')

//CRUD: create, read, update, delete


//GET /api/agentes
//http://127.0.0.1:3000/api/agentes?sort=-age&skip=2&limit=2
//Devuelve una lista de anuncios
 router.get('/', async(req, res, next) => {
  try {
    // filtros
    const filterByName = req.query.nombre
    const filterByStock = req.query.venta
    const filterByPrice = req.query.precio
    const filterByTags = req.query.tags
    // paginación
    const skip = req.query.skip
    const limit = req.query.limit
    // ordenar
    const sort = req.query.sort
    // selección de campos
    const fields = req.query.fields
  
  

    const filtro = {};
  
    if (filterByName) {
      filtro.nombre = new RegExp("^"+ req.query.nombre)
    }

    if (filterByStock) {
      filtro.venta = filterByStock;
    }

    if (filterByPrice) {
      filtro.precio = filterByPrice
    }

    if (filterByTags) {
      filtro.tags = filterByTags;
    }
    const anuncios = await Anuncio.lista(filtro, skip, limit, sort, fields);
    res.locals.anuncios = anuncios
    res.render('mostrarAnuncios');
  
  } catch (error) {
    next(error);
  }
 
 }) 

 router.get('/listaTags', async(req, res, next) => {
   const listaTags = await Anuncio.listaTags()
   res.send(listaTags)
 })
 
 module.exports = router