 var express = require('express');
 var bodyParser = require('body-parser');
 var multer = require('multer');
 var _storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, 'uploads/')
   },
   filename: function (req, file, cb) {
     cb(null, file.originalname);
   }
 })
 var upload = multer({ storage: _storage })
 var fs = require('fs');
 var mysql = require('mysql');
 var conn = mysql.createConnection({
   host     : 'localhost',
   user     : 'jaejin',
   password : '1111',
   database : 'o2'
 });
 conn.connect();
 var app = express();
 app.use(bodyParser.urlencoded({ extended: false }));
 app.locals.pretty = true;
 app.use('/user', express.static('uploads'));
 app.set('views', './views_mysql');
 app.set('view engine', 'pug');
 app.get('/upload', function(req, res){
   res.render('upload');
 });
 app.post('/upload', upload.single('userfile'), function(req, res){
   res.send('Uploaded : '+req.file.filename);
 });
 app.get('/topic/add', function(req, res){
   var sql = 'SELECT id,title FROM topic';
   conn.query(sql, function(err, topics, fields){
     if(err){
       console.log(err);
       res.status(500).send('Internal Server Error');
     }
     res.render('add', {topics:topics});
   });
 });
 app.post('/topic/add', function(req, res){
   var title = req.body.title;
   var description = req.body.description;
   var author = req.body.author;
   var sql = 'INSERT INTO topic (title, description, author) VALUES(?, ?, ?)';
   conn.query(sql, [title, description, author], function(err, result, fields){
     if(err){
       console.log(err);
       res.status(500).send('Internal Server Error');
     } else {
       res.redirect('/topic/'+result.insertId);
      }
    });
  })
 app.get(['/topic/:id/edit'], function(req, res){
   var sql = 'SELECT id,title FROM topic';
   conn.query(sql, function(err, topics, fields){
     var id = req.params.id;
     if(id){
       var sql = 'SELECT * FROM topic WHERE id=?';
       conn.query(sql, [id], function(err, topic, fields){
         if(err){
           console.log(err);
           res.status(500).send('Internal Server Error');
         } else {
           res.render('edit', {topics:topics, topic:topic[0]});
         }
       });
     } else {
       console.log('There is no id.');
       res.status(500).send('Internal Server Error');
     }
   });
 });
 app.post(['/topic/:id/edit'], function(req, res){
   var title = req.body.title;
   var description = req.body.description;
   var author = req.body.author;
   var id = req.params.id;
   var sql = 'UPDATE topic SET title=?, description=?, author=? WHERE id=?';
   conn.query(sql, [title, description, author, id], function(err, result, fields){
     if(err){
       console.log(err);
       res.status(500).send('Internal Server Error');
     } else {
       res.redirect('/topic/'+id);
     }
   });
 });
  app.get(['/topic', '/topic/:id'], function(req, res){
    var sql = 'SELECT id,title FROM topic';
    conn.query(sql, function(err, topics, fields){
     var id = req.params.id;
     if(id){
       var sql = 'SELECT * FROM topic WHERE id=?';
       conn.query(sql, [id], function(err, topic, fields){
         if(err){
           console.log(err);
           res.status(500).send('Internal Server Error');
         } else {
           res.render('view', {topics:topics, topic:topic[0]});
         }
       });
     } else {
       res.render('view', {topics:topics});
     }
   });
 });
 app.get('/topic/:id/delete', function(req, res){
   var sql = 'SELECT id,title FROM topic';
   var id = req.params.id;
   conn.query(sql, function(err, topics, fields){
     var sql = 'SELECT * FROM topic WHERE id=?';
     conn.query(sql, [id], function(err, topic){
       if(err){
         console.log(err);
         res.status(500).send('Internal Server Error');
       } else {
         if(topic.length === 0){
           console.log('There is no record.');
           res.status(500).send('Internal Server Error');
         } else {
           res.render('delete', {topics:topics, topic:topic[0]});
         }
       }
     });
   });
 });
 app.post('/topic/:id/delete', function(req, res){
   var id = req.params.id;
   var sql = 'DELETE FROM topic WHERE id=?';
   conn.query(sql, [id], function(err, result){
     res.redirect('/topic/');
   });
 });
 
 app.listen(process.env.PORT, function(){
   console.log('Connected, 3000 port!');
 })