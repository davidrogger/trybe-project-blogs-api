const model = require('../database/models');
const { ErrorCustom } = require('../utils/errosCustom');

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
  async getById({ postId }) {
    const postById = await model.BlogPost.findOne({
      where: { id: postId },
      include: [
        { model: model.User, as: 'user', attributes: { exclude: ['password'] } },
        { model: model.Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    
    if (!postById) throw new ErrorCustom('Post does not exist', 'PostNotFound');

    return postById;
  },
};