'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Goods extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Goods.hasMany(models.Cart, {
				as: 'Cart',
				foreignKey: 'goodId',
			});
			// define association here
		}
	}
	Goods.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			title: {
				type: DataTypes.STRING,
			},
			description: {
				type: DataTypes.STRING,
			},
			price: {
				type: DataTypes.INTEGER,
			},
			image: {
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: 'Goods',
			timestamps: false,
		}
	);
	return Goods;
};
