const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const {errors} = require('celebrate')

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

app.use(errors())

module.exports = app

/*
* Rota / Recurso 
*/

/** 
 * Métodos HTTP:
 * 
 * GET: buscar uma informação do backend
 * POST: criar uma informação no backend
 * PUT: alterar uma informação no backend
 * DELETE: deletar uma informação no backend
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros,Paginação)
  * Route params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * 
 */


