const express = require('express')
var bodyParser = require('body-parser')

const port = 3000
var app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/none', (req, res) => {
    console.log('******************')
    console.log(req.body)
    res.send('welcome, hct' )
    res.end()
})
app.post('/login', urlencodedParser, (req, res) => {
    console.log('******************')
    console.log(req.body)
    res.send('welcome, ' + req.body.name)
    res.end()
})
app.post('/api', jsonParser, (req, res) => {
    console.log('******************')
    console.log(req.body)
    res.send('welcome, ' + req.body.name)
    res.end()
})

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
})