'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Cart extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Cart.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			userId: {
				type: DataTypes.STRING,
			},
			goodId: {
				type: DataTypes.STRING,
			},
			count: {
				type: DataTypes.INTEGER,
			},
			ordered: {
				type: DataTypes.BOOLEAN,
			},
		},
		{
			sequelize,
			modelName: 'Cart',
		}
	);
	return Cart;
};
