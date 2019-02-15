const koa = require('koa')
const compose = require('koa-compose')

const app = new koa()

async function middlware1(ctx, next) {
    console.log('one')
    await next()
}

async function middlware2(ctx, next) {
    console.log('two')
    await next()
}

async function middlware3(ctx, next) {
    console.log('three')
    await next()
}

const all = compose([middlware1, middlware2, middlware3])

app.use(all)

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})