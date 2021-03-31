const express = require('express')
const {celebrate,Segments,Joi} = require('celebrate')
const crypto = require('crypto')
const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')
const connection = require('./database/connection')


const routes =  express.Router() 

routes.get('/ongs',ongController.list)
routes.post('/ongs',celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf:Joi.string().required().length(2)

    })
}),ongController.create)

routes.post('/incidents',incidentController.create)
routes.get('/incidents',celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page:Joi.number()
    })
}),incidentController.list)
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id:Joi.number().required()
    })
}),incidentController.delete)

routes.get('/profile',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().required()
    }).unknown(),
}),profileController.list)

routes.post('/session',sessionController.create)
module.exports = routes;