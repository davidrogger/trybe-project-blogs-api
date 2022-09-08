const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Project Blogs API',
    // eslint-disable-next-line
    description: 'Projeto para validação de conhecimentos usando ORM Sequelize realizado pela trybe',
  },
  host: 'localhost:3000',
  tags: [
    {
      name: 'Login',
      description: '',
    },
    {
      name: 'User',
      description: '',
    },
    {
      name: 'Categories',
      description: '',
    },
    {
      name: 'Post',
      description: '',
    },
  ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['src/api.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
