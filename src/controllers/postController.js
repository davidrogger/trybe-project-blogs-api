const validate = require('../services/validationService');
const categoryService = require('../services/categoryService');
const postsCategoriesService = require('../services/postsCategoriesService');
const postService = require('../services/postService');

module.exports = {
  async create(req, res) {
    const newPost = await validate.postBody(req.body);
    await Promise.all(newPost.categoryIds.map((id) => categoryService.exists({ id })));
    const postData = await postService.create({ ...newPost, ...req.user });
    await Promise.all(newPost.categoryIds
      .map((id) => postsCategoriesService
      .create({ postId: postData.id, categoryId: id })));

    res.status(201).json(postData);
  },
  async getAll(req, res) {
    const allPosts = await postService.getAll(req.user);
    res.status(200).json(allPosts);
  },
  async getById(req, res) {
    const { id } = await validate.idFormat(req.params);
    await postService.exists({ postId: id });
    const postById = await postService.getById({ postId: id });
    res.status(200).json(postById);
  },
  async update(_req, _res) {
    //
  },
};