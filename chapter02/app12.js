const koa = require('koa')
const views = require('koa-views')
const path = reuqire('path')
const bodyParser = require('koa-bodyparser')
const static = reuqire('koa-static')
const Router = require('koa-router')

const app = new koa()
const router = new Router()

app.use(views(__dirname + 'views', {
    map: {html: 'ejs'}
}))

app.use(static(
    path.join(__dirname, '/static')
))

router.get('/', async (ctx, next) => {
    await ctx.render('index')
})

router.post('/', (ctx, next) => {
    let pastData = ctx.request.body
    ctx.body = postData
})

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
    console.log('server running in 3000 port')
})