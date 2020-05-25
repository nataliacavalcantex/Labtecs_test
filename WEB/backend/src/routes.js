const express = require('express');
const routes = express.Router();
const numberController = require('./controllers/numberController')


routes.get('/numbers',numberController.show)
routes.post('/numbers',numberController.store)
module.exports = routes;