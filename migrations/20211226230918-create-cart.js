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
				type: Sequelize.STRING,
			},
			goodId: {
				type: Sequelize.STRING,
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
