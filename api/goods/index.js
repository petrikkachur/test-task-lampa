const Router = require('@koa/router');

const controller = require('./controller.js');

const validator = require('../../middlewares/validator.js');

const { goodShema } = require('./schema.js');

const router = new Router({
	prefix: '/goods',
});

router.get('/', validator(goodShema, 'query'), controller.getAllGoods);

module.exports = router;
