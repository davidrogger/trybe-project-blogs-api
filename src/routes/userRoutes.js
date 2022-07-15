const { Router } = require('express');
const userController = require('../controllers/userController');
const authentication = require('../middlewares/authentication');

const userRoute = Router();

userRoute.post('/', userController.create);
userRoute.use(authentication.auth);
userRoute.get('/:id', userController.getById);
userRoute.delete('/me', userController.remove);
userRoute.get('/', userController.getAll);

module.exports = userRoute;