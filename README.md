# Practica-Fundamentos-Backend
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

## WebSite
GET http://127.0.0.1:3000/

GET http://127.0.0.1:3000/?sort=-nombre&venta=true&tags=lifestyle&tags=mobile

GET http://127.0.0.1:3000/listaTags

## API Methods
GET http://127.0.0.1:3000/api/anuncios?nombre=sam

GET http://127.0.0.1:3000/api/anuncios/listaTags

GET http://127.0.0.1:3000/api/anuncios?nombre=sam

POST 
```sh
{"nombre":"lampara","venta":true,"precio":25,"tags":["lifestyle","work"]}
```

