'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Goods', [
			{
				title: 'Acer',
				description: 'This is good notebook, u can buy it if u want',
				price: 1250,
				image: 'acer.jpg',
			},
			{
				title: 'Asus',
				description: 'This is good notebook, u can buy it if u want',
				price: 3142,
				image: 'asus.jpg',
			},
			{
				title: 'Hp',
				description: 'This is good notebook, u can buy it if u want',
				price: 2210,
				image: 'hp.jpg',
			},
			{
				title: 'Dell',
				description: 'This is good notebook, u can buy it if u want',
				price: 3251,
				image: 'dell.jpg',
			},
			{
				title: 'Lenovo',
				description: 'This is good notebook, u can buy it if u want',
				price: 9820,
				image: 'lenovo.jpg',
			},
			{
				title: 'MacBook',
				description: 'This is good notebook, u can buy it if u want',
				price: 12400,
				image: 'macBook.jpg',
			},
			{
				title: 'Acer 1',
				description: 'This is good notebook, u can buy it if u want',
				price: 1250,
				image: 'acer.jpg',
			},
			{
				title: 'Asus 1',
				description: 'This is good notebook, u can buy it if u want',
				price: 3142,
				image: 'asus.jpg',
			},
			{
				title: 'Hp 1',
				description: 'This is good notebook, u can buy it if u want',
				price: 2210,
				image: 'hp.jpg',
			},
			{
				title: 'Dell 1',
				description: 'This is good notebook, u can buy it if u want',
				price: 3251,
				image: 'dell.jpg',
			},
			{
				title: 'Lenovo 1',
				description: 'This is good notebook, u can buy it if u want',
				price: 9820,
				image: 'lenovo.jpg',
			},
			{
				title: 'MacBook 1',
				description: 'This is good notebook, u can buy it if u want',
				price: 12400,
				image: 'macBook.jpg',
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Goods', null, {});
	},
};
