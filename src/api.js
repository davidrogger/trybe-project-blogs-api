const express = require('express');
require('express-async-errors');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger.json');

const errorHandler = require('./middlewares/errorHandler');
const categoryRoutes = require('./routes/categoryRoutes');
const loginRoutes = require('./routes/loginRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/post', postRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(errorHandler);

module.exports = app;
