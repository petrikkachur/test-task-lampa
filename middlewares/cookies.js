const models = require('../database/models/index.js');
const { v4: uuidv4 } = require('uuid');

module.exports = function cookies() {
	return async function (ctx, next) {
		const uuid = ctx.cookies.get('uuid', { signed: true });

		if (uuid) {
			const user = await models.User.findOne({
				where: {
					uuid,
				},
			});

			if (user) {
				ctx.auth = {
					user: {
						id: user.id,
					},
				};
				return next();
			}
		}

		const generatedUUID = uuidv4();
		const user = await models.User.create({
			uuid: generatedUUID,
		});
		ctx.cookies.set('uuid', generatedUUID, { signed: true });
		ctx.auth = {
			user: {
				id: user.id,
			},
		};
		return next();
	};
};
