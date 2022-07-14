const userService = require('../services/userService');
const validationService = require('../services/validationService');
const jwtService = require('../utils/tokenJWT');
const { ErrorCustom } = require('../utils/errosCustom');

module.exports = {
  async create(req, res) {
    const newUser = await validationService.newUserBody(req.body);
    const user = await userService.exists(newUser);
    if (user > 0) throw new ErrorCustom('User already registered', 'AlreadyRegistered');
    const userData = await userService.create(newUser);
    const token = jwtService.tokenGenerator(userData);
    res.status(201).json({ token });
  },
  async getAll(_req, res) {
    const allUsers = await userService.getAll();
    res.status(200).json(allUsers);
  },
  async getById(req, res) {
    const { id } = await validationService.userId(req.params);
    const user = await userService.getById(id);
    res.status(200).json(user);
  },
};
