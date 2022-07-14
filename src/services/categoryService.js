const model = require('../database/models');
const { ErrorCustom } = require('../utils/errosCustom');

module.exports = {
  async create(category) {
    const newCategory = await model.Category.create({ name: category });
    return { id: newCategory.id, name: newCategory.name };
  },
  async getAll() {
    return model.Category.findAll();
  },
  async exists({ id }) {
    const category = await model.Category.count({ where: { id } });

    if (category === 0) throw new ErrorCustom('"categoryIds" not found', 'NotFound');

    return category;
  },
};
