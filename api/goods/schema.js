const Joi = require('joi');

const goodShema = Joi.object({
	limit: Joi.number().integer().max(100).default(10),
	offset: Joi.number().integer().default(0),
});
module.exports = { goodShema };
