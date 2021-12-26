'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			User.hasMany(models.Cart, {
				as: 'Cart',
				foreignKey: 'userId',
			});
			// define association here
		}
	}
	User.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			uuid: {
				type: DataTypes.STRING,
			},
			name: {
				type: DataTypes.STRING,
			},
			surname: {
				type: DataTypes.STRING,
			},
			address: {
				type: DataTypes.STRING,
			},
			phone: {
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
