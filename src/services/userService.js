const model = require('../database/models');
const { ErrorCustom } = require('../utils/errosCustom');

module.exports = {
  async login({ email, password }) {
    const userData = await model.User.findOne({ where: { email, password } });

    if (!userData) throw new ErrorCustom('Invalid fields', 'NotFound');

    return { id: userData.id, email };
  },
  async exists({ email }) {
    const result = await model.User.count({ where: { email } });
    return result;
  },
  async create({ displayName, email, password, image }) {
    const userData = await model.User.create({ displayName, email, password, image });
    return { id: userData.id, email: userData.email };
  },
  async getAll() {
    return model.User.findAll({ attributes: { exclude: ['password'] }, raw: true });
  },
};
