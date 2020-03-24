const express = require('express')
const routes = express.Router()
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileConroller')
const SessionsController = require('./controllers/SessionConroller')

routes.post('/sessions', SessionsController.store)

routes.post('/users', OngController.store)
routes.get('/users', OngController.index)

routes.get('/profile', ProfileController.index)

routes.post('/incidents', IncidentController.store)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes