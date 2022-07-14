const model = require('../database/models');

module.exports = {
  async create({ postId, categoryId }) {
    return model.PostCategory.create({ postId, categoryId });
  },
};