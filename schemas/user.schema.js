const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const nickName = Joi.string().min(4).max(20);
const email = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ['com', 'net'] },
}); /* .email({
  minDomainSegments: 2,
  tlds: { allow: ['com', 'net'] },
}); */

const createUserSchema = Joi.object({
  name: name.required(),
  nickName: nickName.required(),
  email: email.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  nickName: nickName,
  email: email,
});

const getUserSchema = Joi.object({
  id: id.required(),
});
module.exports = { createUserSchema, updateUserSchema, getUserSchema };
