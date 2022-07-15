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
    const { id: postId } = await validate.idFormat(req.params);
    await postService.exists({ postId });
    const postById = await postService.getById({ postId });
    res.status(200).json(postById);
  },
  async update(req, res) {
    const [{ id: postId }, postUpdatedBody] = await Promise.all([
      validate.idFormat(req.params),
      validate.postUpdatedBody(req.body),
    ]);

    await postService.exists({ postId });
    await postService.ownerById({ postId, userId: req.user.id });
    
    await postService.update({ postId, ...postUpdatedBody });

    const postUpdated = await postService.getById({ postId });

    res.status(200).json(postUpdated);
  },
  async remove(req, res) {
    const { id: postId } = await validate.idFormat(req.params);
    await postService.exists({ postId });
    await postService.ownerById({ postId, userId: req.user.id });
    await postService.remove({ postId });
    res.status(204).json();
  },
};