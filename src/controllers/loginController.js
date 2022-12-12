const userService = require('../services/userService');
const validate = require('../services/validationService');
const jwtService = require('../utils/tokenJWT');

module.exports = {
  async auth(req, res) {
    const user = await validate.loginBody(req.body);
    const userData = await userService.login(user);
    const token = jwtService.tokenGenerator(userData);
    res.status(200).json({ token });
  },
};
