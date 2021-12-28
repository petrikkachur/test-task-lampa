const Router = require('@koa/router');
const goods = require('./goods/index.js');
const cart = require('./cart/index.js');
const cookies = require('../middlewares/cookies.js');

const router = new Router({
	prefix: '/api',
});
router.use(cookies());
router.use(goods.routes());
router.use(cart.routes());

module.exports = router;
