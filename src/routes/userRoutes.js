const { Router } = require('express');
const userController = require('../controllers/userController');
const authentication = require('../middlewares/authentication');

const userRoute = Router();

userRoute.post('/', userController.create);
userRoute.use(authentication.auth);
userRoute.get('/', userController.getAll);

module.exports = userRoute;