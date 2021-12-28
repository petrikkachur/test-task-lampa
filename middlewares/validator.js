const _omit = require('lodash.omit');

module.exports = (schema, type) => (ctx, next) => {
	if (ctx.valid === undefined) ctx.valid = {};
	let data;

	switch (type) {
		case 'params': {
			data = ctx.params;
			break;
		}
		case 'query': {
			data = ctx.query;
			break;
		}
		case 'body': {
			data = JSON.parse(ctx.request.body);
			break;
		}
		default: {
			if (typeof type === 'function') {
				data = type(ctx);
			} else throw new Error('No find type');
		}
	}

	const result = schema.validate(data);

	if (result.error) {
		ctx.status = 400;

		return (ctx.body = {
			message:
				'Validation error.' +
				result.error.details.reduce(
					(acc, curr) => `${acc} ${curr.message}`,
					''
				),
			error: result.error.details.map((detail) =>
				_omit(detail, 'context')
			),
		});
	}

	ctx.valid[typeof type === 'function' ? 'body' : type] = result.value;

	return next();
};
