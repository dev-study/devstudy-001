var _jade = require('jade');
var fs = require('fs');
var smtpPool = require('nodemailer-smtp-pool');

var nodemailer = require("nodemailer");

var FROM_ADDRESS = 'foo@bar.com';
var TO_ADDRESS = 'test@test.com';

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport(smtpPool({
    service: "Gmail",
    auth: {
        user: "kdwman3477",
        pass: "kk672600"
    }
}));

var sendMail = function(toAddress, subject, content, next){
  var mailOptions = {
    from: "SENDERS NAME <" + FROM_ADDRESS + ">",
    to: toAddress,
    replyTo: fromAddress,
    subject: subject,
    html: content
  };

  smtpTransport.sendMail(mailOptions, next);
};

exports.index = function(req, res){
  // res.render('index', { title: 'Express' });

  // specify jade template to load
  var template = process.cwd() + '/views/index.jade';

  // get template from file system
  fs.readFile(template, 'utf8', function(err, file){
    if(err){
      //handle errors
      console.log('ERROR!');
      return res.send('ERROR!');
    }
    else {
      //compile jade template into function
      var compiledTmpl = _jade.compile(file, {filename: template});
      // set context to be used in template
      var context = {title: 'Express'};
      // get html back as a string with the context applied;
      var html = compiledTmpl(context);

      sendMail(TO_ADDRESS, 'test', html, function(err, response){
        if(err){
          console.log('ERROR!');
          return res.send('ERROR');
        }
        res.send("Email sent!");
      });
    }
  });
};
