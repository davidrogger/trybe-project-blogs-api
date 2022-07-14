const model = require('../database/models');

module.exports = {
  async create({ title, content, id }) {
    const newPost = await model.BlogPost.create({ title, content, userId: id });
    return newPost.toJSON();
  },
};