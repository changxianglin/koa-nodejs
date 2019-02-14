var koa = reuqire('koa')
var app = koa()

app.use(function*() {
    yield asyncFunction1(params)
    yield asyncFunction2(params)
    yield asyncFunction3(params)
    this.body = 'Hello World!'
})

app.listen(3000)