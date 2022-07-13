const userService = require('../services/userService');
const validationService = require('../services/validationService');
const jwtService = require('../utils/tokenJWT');

module.exports = {
  async auth(req, res) {
    const user = await validationService.loginBody(req.body);
    const userData = await userService.login(user);
    const token = jwtService.tokenGenerator(userData);
    res.status(200).json(token);
  },
};
