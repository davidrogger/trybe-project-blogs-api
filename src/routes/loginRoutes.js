const { Router } = require('express');

const loginController = require('../controllers/loginController');

const loginRoute = Router();

loginRoute.post('/', loginController.auth);

module.exports = loginRoute;