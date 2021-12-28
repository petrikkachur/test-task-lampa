const { Op } = require('sequelize');
const models = require('../../database/models/index.js');
const { Sequelize, sequelize } = require('../../database/models/index.js');

module.exports = {
	async getAllCart(ctx) {
		const { user } = ctx.auth;

		const cart = await models.Cart.findAll({
			attributes: {
				include: [
					[
						Sequelize.literal('("Goods"."price"*"Cart"."count")'),
						'totalPrice',
					],
				],
			},
			include: [
				{
					model: models.Goods,
					as: 'Goods',
					required: true,
				},
			],

			where: {
				userId: user.id,
				ordered: {
					[Op.or]: [false, null],
				},
			},
			group: ['Cart.id', 'Goods.id'],
			raw: true,
			nest: true,
		});

		ctx.body = {
			rows: cart,
			total: cart.reduce((p, c) => p + c.totalPrice, 0),
		};
	},
	async addGoodToCart(ctx) {
		const { user } = ctx.auth;
		const { id } = ctx.valid.body;

		const good = await models.Goods.findOne({
			where: {
				id,
			},
		});
		if (!good) return ctx.throw(404, 'This good wasn`t founded');

		const cart = await models.Cart.create({
			userId: user.id,
			goodId: good.id,
			count: 1,
			ordered: false,
		});
		ctx.body = {
			cart,
		};
	},
	async changeCountOfGood(ctx) {
		const { user } = ctx.auth;
		const { id, count } = ctx.valid.body;

		await models.Cart.update(
			{
				count,
			},
			{
				where: {
					userId: user.id,
					id: id,
					ordered: {
						[Op.or]: [false, null],
					},
				},
			}
		);

		ctx.body = {
			status: 'ok',
		};
	},
	async removeGoodFromCart(ctx) {
		const { user } = ctx.auth;
		const { id } = ctx.valid.body;

		const cart = await models.Cart.destroy({
			where: {
				userId: user.id,
				id,
				ordered: {
					[Op.or]: [false, null],
				},
			},
		});
		ctx.body = {
			status: 'ok',
		};
	},
	async postOrder(ctx) {
		const { user } = ctx.auth;
		const { name, surname, address, phone } = ctx.valid.body;

		await models.User.update(
			{
				name,
				surname,
				address,
				phone,
			},
			{
				where: {
					id: user.id,
				},
			}
		);

		await models.Cart.update(
			{
				ordered: true,
			},
			{
				where: {
					userId: user.id,
					ordered: {
						[Op.or]: [false, null],
					},
				},
			}
		);

		ctx.body = {
			status: 'ok',
		};
	},
};
