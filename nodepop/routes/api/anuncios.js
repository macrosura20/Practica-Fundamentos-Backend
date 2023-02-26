const express = require('express')
//const { router } = require('..')
const router = express.Router()
const Anuncio = require('../../models/Anuncio')

//CRUD: create, read, update, delete


//GET /api/anuncios
//http://127.0.0.1:3000/api/anuncios?sort=-age&skip=2&limit=2
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
    res.json(anuncios)
  
  } catch (error) {
    next(error);
  }
 
 }) 

 //GET api/anuncios/tags
 router.get('/tags', async(req, res, next) => {
   const listaTags = await Anuncio.listaTags()
   res.json(listaTags)
 })

 //POST/api/anuncios(body)
 //Crea un anuncio
 router.post('/', async (req, res, next) => {
  try{
      const anuncioData = req.body

      //creamos una instancia de Agente
      const anuncio = new Anuncio(anuncioData)

      //la persistimos en la BBDD
      const anuncioGuardado = await anuncio.save()

      res.json({result: anuncioGuardado})

  }catch(error){
      next(error)
  }
})
 
 module.exports = router