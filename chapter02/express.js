var express = require('express')
var app = express()

app.get('/', function (req, res) {
    asyncFunction1(params, function() {
        asyncFunction2(params, function() {
            asyncFunction3(params, function() {
                res.send('Hello World!')
            })
        })
    })
})

var server = app.listen(3000)