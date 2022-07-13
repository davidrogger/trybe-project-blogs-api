require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = {
  tokenGenerator(user) {
    const token = jwt.sign({ data: user }, secret);
    return token;
  },
};
