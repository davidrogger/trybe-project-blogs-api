const model = require('../database/models');
const { ErrorNotFound } = require('../utils/errosCustom');

module.exports = {
  async login({ email, password }) {
    const userData = await model.User.findOne({ where: { email, password } });

    if (!userData) throw new ErrorNotFound('Invalid fields');

    return { id: userData.id, email };
  },
};
