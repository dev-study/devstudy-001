var express = require("express");
var bodyParser = require('body-parser');

var app = express();

var http = require("http");
var path = require("path");

var mysql = require("mysql");

var connection = mysql.createConnection({  
    host : 'localhost',
    user : 'jaejin',
    password : '1111',
    database: 'node'
});

connection.connect();



connection.query('select * from notice', function(err, rows, fields){
    if(!err)
        console.log('The solution is: ' , rows);
    else
        console.log('error while perfoming query.',err);
});

connection.end();



app.set('views','./views_mysql');
app.set('view engine', 'pug');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req,res){

})

app.get('/topic/:id',function(req,res){
	var sql = 'select * from notice';
	connection.query(sql, function(err, rows, fields){
	    res.render('view', {topics:topics});
	});
})



app.listen(process.env.PORT, function(){
    console.log('Connected!!!!');
})
