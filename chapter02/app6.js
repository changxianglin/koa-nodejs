const koa = require('koa')
const app = new koa()

app.use( async (ctx, next) => {
    console.log(ctx.method, ctx.host + ctx.url)
    await next()
    ctx.body = 'Hello World'
})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})