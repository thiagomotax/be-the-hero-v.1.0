const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require ('./controllers/IncidentController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController');
const routes = express.Router(); //desacoplando o modulo de rotas express em uma nova variavel


//rota login
routes.post('/sessions', SessionController.create);
//rota para listar todas ongs do banco de dados
routes.get('/ongs', OngController.list);

//rota para criar ong no bd
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.list);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.listSpecific);
module.exports = routes;