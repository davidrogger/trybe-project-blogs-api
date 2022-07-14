const validate = require('../services/validationService');
const categoryService = require('../services/categoryService');

module.exports = {
  async create(req, res) {
    const { name } = await validate.categoryName(req.body);
    const categoryData = await categoryService.create(name);
    res.status(201).json(categoryData);
  },
};
