const model = require('../database/models');

module.exports = {
  async create({ title, content, id }) {
    const newPost = await model.BlogPost.create({ title, content, userId: id });
    return newPost.toJSON();
  },
  async getAll({ id }) {
    const result = await model.BlogPost.findAll({
      where: { userId: id },
      include: [
        { model: model.User, as: 'user', attributes: { exclude: ['password'] } },
        { model: model.Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return result;
  },
};