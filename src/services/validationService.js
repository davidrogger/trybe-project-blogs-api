const Joi = require('joi');

const runSchema = (schema) => async (itemValidate) => {
  const { value, error } = await schema.validate(itemValidate);
  if (error) {
    error.message = 'Some required fields are missing';
    throw error;
  }
  return value;
};

module.exports = {
  loginBody: runSchema(Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).messages({
    'any.required': 'Some required fields are missing',
  })),
};