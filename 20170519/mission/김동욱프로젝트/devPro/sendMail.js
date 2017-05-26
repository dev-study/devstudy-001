var app = require('express')(),
    mailer = require('express-mailer');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});

app.set('views', './views_file');
app.set('view engine', 'jade');

app.get('/send', function(req, res){
  res.render('email');
})

mailer.extend(app, {
  from: 'kdwman3477@gmail',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'kdwman3477@gmail.com',
    pass: '*******'
  }
});

app.post('/send_email', function(req, res, next){

  app.mailer.send('contact', {
    from: req.body.sender,
    to: req.body.receiver,
    subject: req.body.subject,
    description: req.body.description
  }, function (err) {
    if (err) {
      // handle error
      console.log(err);
      res.send('There was an error sending the email');
      return;
    }
    res.send('Email Sent');
  });
});

// app.get('/', function (req, res, next) {
//
//   app.mailer.send('email', {
//     to: 'kdwman3477@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
//     subject: 'Test Email', // REQUIRED.
//     otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
//   }, function (err) {
//     if (err) {
//       // handle error
//       console.log(err);
//       res.send('There was an error sending the email');
//       return;
//     }
//     res.send('Email Sent');
//   });
// });
