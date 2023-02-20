const express = require('express')
const { route } = require('..')
const router = express.Router()
const Agente = require('../../models/Anuncio')

//CRUD: create, read, update, delete


//GET /api/agentes
//http://127.0.0.1:3000/api/agentes?sort=-age&skip=2&limit=2
//Devuelve una lista de agente
router.get('/', async(req, res, next) => {
    try {
   // filtros
   const filterByName = req.query.nombre;
   // paginación
   const skip = req.query.skip;
   const limit = req.query.limit;
   // ordenar
   const sort = req.query.sort;
   // selección de campos
   const fields = req.query.fields;

   const filtro = {};
 
   if (filterByName) {
     filtro.nombre = filterByName;
   }
 
   const anuncios = await Anuncio.lista(filtro, skip, limit, sort, fields);
 
   res.json({ results: anuncios });
 
 } catch (error) {
   next(error);
 }
 
 })