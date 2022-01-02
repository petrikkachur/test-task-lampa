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
			Cart.belongsTo(models.User, {
				as: 'User',
				foreignKey: 'userId',
			});
			Cart.belongsTo(models.Goods, {
				as: 'Goods',
				foreignKey: 'goodId',
			});

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
				type: DataTypes.INTEGER,
				references: {
					model: 'Users',
				},
			},
			goodId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'Goods',
				},
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
			timestamps: false,
		}
	);
	return Cart;
};
