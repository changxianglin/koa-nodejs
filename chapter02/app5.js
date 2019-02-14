const koa = require('koa')
const app = new koa()

app.use( async (ctx) => {
    ctx.response.status = 200
    if(ctx.request.accept('json')) {
        ctx.response.type = 'json'
        ctx.response.body = {
            data: 'Hello World'
        }
    } else if(ctx.request.accept('html')) {
        ctx.response.type = 'html'
        ctx.response.body = '<p>Hello World</p>'
    } else {
        ctx.response.type = 'text'
        ctx.response.body = 'Hello World'
    }
})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})