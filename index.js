const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const statics = require('koa-static');
const path = require('path');
const send = require('koa-send');
const KeyGrip = require('keygrip');
const api = require('./api/index.js');

const app = new Koa();
const router = new Router();

app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
app.use(cors());
app.use(
	bodyParser({
		enableTypes: ['json', 'form', 'text'],
	})
);
app.use(statics(path.join(__dirname, 'assets')));
app.use(api.routes());

//* This is for build
app.use(statics(path.join(__dirname, 'client', 'build')));

router.get('(.*)', async (ctx, next) => {
	await send(ctx, './client/build/index.html');
	next();
});
//*
app.use(router.routes());

app.use(router.allowedMethods());

console.log(`Server port: ${1111}`);
app.listen(process.env.PORT || 1111, '127.0.0.1');
