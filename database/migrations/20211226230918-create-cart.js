'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Carts', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
				},
			},
			goodId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Goods',
				},
			},
			count: {
				type: Sequelize.INTEGER,
			},
			ordered: {
				type: Sequelize.BOOLEAN,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Carts');
	},
};
