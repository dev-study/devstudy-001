var express =require('express');
var bodyPaser = require('body-parser');
var session = require('express-session');
var cookiePaser = require('cookie-parser');
var morgan = require('morgan');
var path= require('path');
var ejs = require('ejs');

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, '/views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.use(cookiePaser());

app.use(bodyPaser.json());

app.use(bodyPaser.urlencoded({extended: false}));

app.use(morgan('dev'));

app.use(session({
  secret: 'secret',
  resave :false,
  saveUninitialized: true
}));



app.get('/', function(req, res){
  res.render('./index');
});

app.post('/process/login', function(req, res){

  var id = req.body.id || req.query.id ;
  var pass = req.body.pass || req.query.pass ;


if(req.session.userid === id && req.session.userpass){
  res.render('./comfirm');
}else{
res.render('./fail');
}
});

app.get('/registe', function(req, res){
  res.render('./registe');
});

app.post('/process/registe', function(req, res){
  var id = req.body.id || req.query.id ;
  var pass = req.body.pass || req.query.pass ;

  console.log(id);
  console.log(pass);

  req.session.userid = id ;
  req.session.userpass = pass;

  console.log(req.session.userid);
  console.log(req.session.userpass);

 res.redirect('/');

});

app.listen(app.get('port'), function(){
  console.log('localhost:' + app.get('port'));
})
