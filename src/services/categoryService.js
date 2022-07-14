const model = require('../database/models');

module.exports = {
  async create(category) {
    const newCategory = await model.Category.create({ name: category });
    return { id: newCategory.id, name: newCategory.name };
  },
  async getAll() {
    return model.Category.findAll();
  },
};
