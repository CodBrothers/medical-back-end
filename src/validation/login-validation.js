const Joi = require('joi');

const getLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).required();

module.exports = {
    getLoginSchema,
}