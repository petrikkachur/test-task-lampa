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
			},
			surname: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			phone: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Date.now(),
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Users');
	},
};
