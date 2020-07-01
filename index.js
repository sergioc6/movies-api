require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const movieRoutes = require('./routes/movies');

const app = new Koa();
const router = new Router();
app.use(logger());

//Routes
app.use(movieRoutes.routes());
//end Routes

app.use(
    async ctx => {
        ctx.body = 'Movies API';
    }
);

const server = app.listen(process.env.PORT);
module.exports = server;