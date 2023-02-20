var express = require('express');
var router = express.Router();

const Anuncio = require('../models/Anuncio')

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const anuncios = await Anuncio.find()
    res.locals.anuncios = anuncios
    console.log(anuncios)
    res.render('index', { title: 'NodePop' });
  } catch (error) {
    next(error)
  }
});

module.exports = router;
