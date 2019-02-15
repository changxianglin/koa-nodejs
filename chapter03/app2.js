const koa = require('koa')
const Route = require('koa-router')

const app = new koa()
const router = new Route()

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>index page</h1>'
    await next()
})

router.post('/users', async (ctx, next) => {

})

router.put('/users/:id', async (ctx, next) => {

})

router.del('/users/:id', async (ctx, next) => {

})

router.all('/users/:id', async (ctx, next) => {

})

router.all('/', async (ctx, next) => {
    console.log('match "all" method')
    await next()
})

app.use( router.routes() )

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})
