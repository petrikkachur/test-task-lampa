'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			uuid: {
				type: Sequelize.STRING,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			surname: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			address: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			phone: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Users');
	},
};
