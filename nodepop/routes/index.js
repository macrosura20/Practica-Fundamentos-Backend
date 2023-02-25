var express = require('express');
var router = express.Router();

const Anuncio = require('../models/Anuncio')

/* GET home page. */
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
    res.render('index', { title: 'NodePop' });
  
  } catch (error) {
    next(error);
  }
 
 }) 

router.get('/listaTags', async function (req, res, next) {
  const anuncios = await Anuncio.find().distinct('tags')
  console.log(anuncios)
  res.send(anuncios)
})


module.exports = router;
