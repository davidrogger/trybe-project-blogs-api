const swaggerAutogen = require('swagger-autogen')();

const userLogin = {
  email: 'lewishamilton@gmail.com',
  password: '123456',
};

const userData = {
  id: 1,
  displayName: 'Lewis Hamilton',
  ...userLogin,
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
};

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
  definitions: {
    UserLogin: {
      ...userLogin,
    },
    User: {
      ...userData,
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['src/api.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
