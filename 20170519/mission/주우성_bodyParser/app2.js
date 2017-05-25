var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// POST /login
app.post('/login', function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('login - ' + req.body.username)
})

// POST /api/users
app.post('/api/users', function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body)
  res.send('signup - ' + req.body.username)
})

var server = app.listen(8080, function(){
 console.log("Express server has started on port 8080")
});
