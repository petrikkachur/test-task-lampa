export const validate = (schema, state) => {
	const fieldsError = {};

	const err = Object.keys(state).filter(
		(name) => (fieldsError[name] = schema[name](state[name]))
	);

	if (err.length) return fieldsError;
	return false;
};
