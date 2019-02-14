const koa = require('koa')
const app = new koa()

const logger = async function(ctx, next) {
    console.log(ctx.method, ctx.host + ctx.url)
    await next()
}

app.use(logger)
app.use( async (ctx, next) => {
    ctx.body = 'Hello World'
})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})