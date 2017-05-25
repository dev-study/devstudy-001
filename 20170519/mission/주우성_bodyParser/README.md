# Expressjs/body-parser.js 실습해보기

- API : https://github.com/expressjs/body-parser
- git-app1 : https://github.com/woosungchu/ex-bp-app1
- git-app2 : https://github.com/woosungchu/ex-bp-app2
- host-app1 : https://ex-bp-app1.herokuapp.com/
- hot-app2 : https://ex-bp-app2.herokuapp.com/

#### 지원
- JSON body
- Raw body
- Text body
- URL-encoded

> Multipart는 지원하지 않음


#### Setup
```
npm init
npm install --save express
npm install --save body-parser
```

#### TEST
```
https://ex-bp-app1.herokuapp.com/api/users/
https://ex-bp-app2.herokuapp.com/api/users/
http://localhost:8080/login/
http://localhost:8080/api/users/

```

1. Express route-specific ( app.js )

```
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('login - ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('signup - ' + req.body.username)
})

// [RUN SERVER]
var server = app.listen(8080, function(){
 console.log("Express server has started on port 8080")
});


```

2. Express/Connect top-level generic ( app2.js )

```
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

```
