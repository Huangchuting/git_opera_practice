var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser('123456'))
app.use((req, res, next) => {
    console.log('nick: '  + req.cookies.nick)
    console.log('signednick: ' + req.signedCookies.nick)
    console.log('\n')
    next()
})
app.use((req, res, next) => {
    res.cookie('nick', 'hct', {signed: true})
    res.end('ok')
})

app.listen(8080)