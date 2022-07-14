const { Router } = require('express');
const postController = require('../controllers/postController');

const authentication = require('../middlewares/authentication');

const postRoute = Router();

postRoute.use(authentication.auth);
postRoute.post('/', postController.create);
postRoute.get('/', postController.getAll);

module.exports = postRoute;