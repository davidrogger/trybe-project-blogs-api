const Joi = require('joi');

const runSchema = (schema) => async (itemValidate) => {
  const { value, error } = await schema.validate(itemValidate);
  if (error) throw error;
  return value;
};

module.exports = {
  loginBody: runSchema(Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
  })),
  newUserBody: runSchema(Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  })),
};