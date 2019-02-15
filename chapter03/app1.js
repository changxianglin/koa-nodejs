const koa = require('koa')
const app = new koa()
const router = require('./rotuer.js')

router.get('/404', (context, next) => {
    context.body = 'Page not Found'
    context.status = 404
})

app.use(router.routes())

app.listen(3000, () => {
    console.log('server run in 3000 port...')
})