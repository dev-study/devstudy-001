var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.locals.pretty = true;
app.set('views', './views_file');
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

var nodemailer = require('nodemailer');
var smtpPool = require('nodemailer-smtp-pool');

app.get('/send', function(req, res){
  res.render('email');
})

// var options;
// app.post('/send_email', function(req, res){
//   options = {
//     from: '<'+req.body.sender+'>',
//     to: req.body.receiver,
//     subject: req.body.subject,
//     text: req.body.description
//   }
// })

var options = {
    from: '김동욱 <kdwman3477@gmail.com>',
    to: 'kdwman3477@gmail.com',
    subject: 'Nodemailer 테스트',
    text: '테스트 '
};

// var smtpTransport = nodemailer.createTransport(smtpPool({
//     service: service,
//     host: host,
//     port: port,
//     auth: {
//         user: user,
//         pass: pass
//     },
//     tls: {
//       rejectUnauthorize: false
//     },
//     maxConnections: 5,
//     maxMessages: 10
// }));

var smtpTransport = nodemailer.createTransport(smtpPool({
    service: 'Gmail',
    host: 'localhost',
    port: '465',
    auth: {
        user: 'kdwman3477',
        pass: 'kk672600'
    },
    tls: {
      rejectUnauthorize: false
    },
    maxConnections: 5,
    maxMessages: 10
}));

smtpTransport.sendMail(options, function(err, res){

    if (err){
        console.log(err);
    } else {
        console.log("Message sent : " + res);
    }
    smtpTransport.close();
});

// app.listen(3000, function(){
//     console.log('Conneted 3000 port!');
// });
