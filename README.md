# Configuracion de Servidores
## Nodepop-Backend

http://54.89.58.204

## Nodepop-React

http://ec2-54-89-58-204.compute-1.amazonaws.com


# Practica-Backend-Avanzado
## NodeApp

Install dependencies with:
```sh
npm install
```
Initialize DB
```sh
npm run initDBs
```

Start in develooment mode:
```sh
npm run dev
```

## General info

Application created with:

```sh
npx express-generator nodepop --ejs
```

## Modelo del anuncio
```sh
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean, *False = Se Busca, True = Se vende
    precio: Number,
    foto: String,
    tags: [String]
})
```

## WebSite
Informacion de todos los anuncios.

GET http://127.0.0.1:3000/

Filtros de búsqueda.
- skip
- limit
- sort
- fields

 GET http://127.0.0.1:3000/?sort=-nombre&venta=true&tags=lifestyle&tags=mobile



## API Methods
Login por Api
```sh
email: user@example.es
password: 1234
```
Informacion de todos los anuncios.

GET http://127.0.0.1:3000/api/anuncios


Filtros de búsqueda.
- skip
- limit
- sort
- fields

 GET http://127.0.0.1:3000/api/anuncios?sort=-nombre&venta=true&tags=lifestyle&tags=mobile


Lista de todos los Tags de los anuncios
 
 GET http://127.0.0.1:3000/api/anuncios/tags

Creación de un anuncio

POST http://127.0.0.1:3000/api/anuncios
```sh
JSON: {"nombre":"lampara","venta":true,"precio":25,"tags":["lifestyle","work"]}
```

