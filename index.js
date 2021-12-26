const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const statics = require('koa-static');
const path = require('path');
const send = require('koa-send');
const KeyGrip = require('keygrip');
const { v4: uuidv4 } = require('uuid');

const app = new Koa();
const router = new Router();

app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
app.use(cors());
app.use(
	bodyParser({
		enableTypes: ['json', 'form', 'text'],
	})
);
app.use(statics(path.join(__dirname, 'app/build')));

router.get('(.*)', async (ctx, next) => {
	try {
		return await send(ctx, path.join(__dirname + '/app/build/index.html'));
	} catch (err) {
		return next();
	}
});

router.get('/api/goods', async (ctx) => {
	const cook = ctx.cookies.get('id', { signed: true });
	return;
});
router.get('/api/cart', async (ctx) => {
	const id = uuidv4();
	ctx.cookies.set('id', id, { signed: true });
});
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server port: ${1111}`);
app.listen(process.env.PORT || 1111);
