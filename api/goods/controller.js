const models = require('../../database/models/index.js');
const { Op } = require('sequelize');

const direction = {
	desc: 'DESC',
	asc: 'ASC',
};

module.exports = {
	async getAllGoods(ctx) {
		const { user } = ctx.auth;
		const { query } = ctx.valid;

		const goods = await models.Goods.findAndCountAll({
			include: [
				{
					model: models.Cart,
					as: 'Cart',
					required: false,
					where: {
						userId: user.id,
						ordered: {
							[Op.or]: [false, null],
						},
					},
				},
			],
			limit: query.limit,
			offset: query.offset,
			order: [['title', direction.asc]],
		});
		ctx.body = {
			rows: goods.rows,
			count: goods.count,
		};
	},
};
