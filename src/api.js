const express = require('express');
require('express-async-errors');
const errorHandler = require('./middlewares/errorHandler');
const categoryRoutes = require('./routes/categoryRoutes');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.use(errorHandler);

module.exports = app;
