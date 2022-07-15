const { Op } = require('sequelize');
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
  async exists({ postId }) {
    const foundPost = await model.BlogPost.count({ where: { id: postId } });

    if (!foundPost) throw new ErrorCustom('Post does not exist', 'PostNotFound');

    return foundPost;
  },
  async getById({ postId }) {
    const postById = await model.BlogPost.findOne({
      where: { id: postId },
      include: [
        { model: model.User, as: 'user', attributes: { exclude: ['password'] } },
        { model: model.Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return postById;
  },
  async ownerById({ postId, userId }) {
    const postOwner = await model.BlogPost.findOne({
      where: { id: postId, userId },
    });

    if (!postOwner) throw new ErrorCustom('Unauthorized user', 'Unauthorized');
  },
  async update({ title, content, postId }) {
    await model.BlogPost.update(
      { title, content },
      { where: { id: postId } },
    );
  },
  async remove({ postId }) {
    await model.BlogPost.destroy({ where: { id: postId } });
  },
  async search({ q }) {
    return model.BlogPost.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: q } },
          { content: { [Op.like]: q } },
      ] },
      include: [
        { model: model.User, as: 'user', attributes: { exclude: ['password'] } },
        { model: model.Category, as: 'categories', through: { attributes: [] } },
      ],
    });
  },
};