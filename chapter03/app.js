const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
    const { url, method } = ctx
    if(url === '/404' && method === 'GET') {
        ctx.body = 'Page not found'
        ctx.status = 404
    } else {
        ctx.body = 'Default Content'
    }
    await next()
})

app.listen(3000, () => {
    console.log('server run in 3000 port')
})