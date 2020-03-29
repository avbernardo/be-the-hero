const express = require('express')
const crypto = require('crypto')
const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')
const connection = require('./database/connection')


const routes =  express.Router()

routes.get('/ongs',ongController.list)
routes.post('/ongs',ongController.create)

routes.post('/incidents',incidentController.create)
routes.get('/incidents',incidentController.list)
routes.delete('/incidents/:id',incidentController.delete)

routes.get('/profile',profileController.list)

routes.post('/session',sessionController.create)
module.exports = routes;