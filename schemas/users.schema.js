const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const email = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ['com', 'net'] },
});

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  email: email.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  email: email,
});

const getProductSchema = Joi.object({
  id: id.required(),
});
module.exports = { createProductSchema, updateProductSchema, getProductSchema };
