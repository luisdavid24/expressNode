const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const description = Joi.string().min(3).max(50);

const createCategoriesSchema = Joi.object({
  name: name.required(),
  description: description.required(),
});

const updateCategoriesSchema = Joi.object({
  name: name.required(),
  description: description,
});

const getCategoriesSchema = Joi.object({
  id: id.required(),
});
module.exports = {
  createCategoriesSchema,
  updateCategoriesSchema,
  getCategoriesSchema,
};
