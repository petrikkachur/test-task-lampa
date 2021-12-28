const Router = require('@koa/router');

const controller = require('./controller.js');

const validator = require('../../middlewares/validator.js');

const { addGoodSchema, changeCountGood, orderSchema } = require('./schema.js');

const router = new Router({
	prefix: '/cart',
});

router.get('/', controller.getAllCart);
router.post('/', validator(addGoodSchema, 'body'), controller.addGoodToCart);
router.put(
	'/',
	validator(changeCountGood, 'body'),
	controller.changeCountOfGood
);
router.delete(
	'/',
	validator(addGoodSchema, 'body'),
	controller.removeGoodFromCart
);

router.post('/order', validator(orderSchema, 'body'), controller.postOrder);

module.exports = router;
