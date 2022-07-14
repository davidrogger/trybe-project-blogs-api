const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const authentication = require('../middlewares/authentication');

const categoryRoute = Router();

categoryRoute.use(authentication.auth);
categoryRoute.post('/', categoryController.create);

module.exports = categoryRoute;