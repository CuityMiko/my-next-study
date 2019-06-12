const koa = require('koa');
const next = require('next');
const Router = require('koa-router');

// 判断是否是生产环境
const dev = process.env.NODE_ENV != 'production'
const app = next({dev});

const handle = app.getRequestHandler();
// 页面预处理完成后
app.prepare().then(() => {
    const server = new koa();
    const router = new Router();
    
    router.get('/test/:id', (ctx) => {
        ctx.body = `/text${ctx.params.id}`;
    })

    server.use(async (ctx, next) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
        await next();
    })

    server.use(router.routes());

    server.listen(3001, () => {
        console.log(`next koa server listen on 3001!`)
    })
})

