const express = require('express');
require('express-async-errors');
const errorHandler = require('./middlewares/errorHandler');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.use(errorHandler);

module.exports = app;
