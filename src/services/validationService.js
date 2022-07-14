const Joi = require('joi');

const runSchema = (schema) => async (itemValidate) => {
  const { value, error } = await schema.validate(itemValidate);
  if (error) throw error;
  return value;
};

const fieldsMissing = 'Some required fields are missing';

const genericMessage = {
  'any.required': fieldsMissing,
  'string.empty': fieldsMissing,
  'array.base': fieldsMissing,
};

module.exports = {
  loginBody: runSchema(Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).messages(genericMessage)),
  newUserBody: runSchema(Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  })),
  idFormat: runSchema(Joi.object({
    id: Joi.number().integer().positive().required(),
  })),
  categoryName: runSchema(Joi.object({
    name: Joi.string().required(),
  })),
  postBody: runSchema(Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  }).messages(genericMessage)),
};