const serve = require('koa-static')
const koa = require('koa')

const app = new koa()

app.use(serve('.'))
app.use(require('koa-static')(root, opts))

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})
