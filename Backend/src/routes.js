const express = require('express')
const routes = express.Router()
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')

routes.post('/users', OngController.store)
routes.get('/users', OngController.index)

routes.post('/incidents', IncidentController.store)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes