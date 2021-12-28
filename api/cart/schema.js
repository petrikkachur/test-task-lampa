const Joi = require('joi');

const addGoodSchema = Joi.object({
	id: Joi.number().integer().required(),
});

const changeCountGood = Joi.object({
	id: Joi.number().integer().required(),
	count: Joi.number().integer().required().min(1),
});

const orderSchema = Joi.object({
	name: Joi.string().min(2).max(255).required(),
	surname: Joi.string().min(2).max(255).required(),
	address: Joi.string().min(2).max(255).required(),
	phone: Joi.string().min(2).max(255).required(),
});
module.exports = { addGoodSchema, changeCountGood, orderSchema };
