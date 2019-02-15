const koa = require('koa')
const Route = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new koa()
const router = new Route()

router.get('/user', async (ctx, next) => {
    ctx.response.body = `
        <form action="/user/login" method="post">
            <input name="name" type="text" placeholder="请输入用户名: zhangsan"/>
            <br />
            <input name="password" type="password" placeholder="请输入密码: 123456"/>
            <br />
            <button>GoGoGo</button>
        </form>
    `
})

router.post('/user/login', async (ctx, next) => {
    let { name, password } = ctx.request.body
    if(name === 'zhangsan' && password === '123456') {
        ctx.response.body = `Hello, ${name}`
    } else {
        ctx.response.body = '账号信息错误'
    }
})

app.use(bodyParser())
app.use( router.routes() )

app.listen(3000, () => {
    console.log('server running in 3000 port')
})
