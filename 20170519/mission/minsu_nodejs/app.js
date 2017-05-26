var express = require('express');  // express 모듈 가져오기
var app = express();
app.locals.pretty = true;// 코드 정렬
app.set('view engine', 'jade'); // jade 와 express 연결
app.set('views','./views');// 템플릿 파일 위치
//localhost:3000/nodejs.png
app.use(express.static('public'));// public 폴더에 정적인 페이지 연결

app.get('/template',function(req,res){
    // 템플릿 파일 연결
    res.render('temp',{time:Date(),_title:'Jade'});// 템플릿에 객체로 변수 전달
});

app.get('/dynamic',function(req,res){
    var lis = '';
    for( var i =0; i<5; i++){
        lis= lis+'<li>coding_'+i+'</li>';
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body>
            dynamic.html page is restart
            <ul>
            ${lis}
            </ul>
            ${time}
        </body>
        </html>`;

    res.send(output);
});

app.get('/logo',function(req,res){
    res.send('logo image , <img src="/nodejs.png"/>');
});

// 홈으로 접속하면 localhost:3000
app.get('/',function(req,res){
    res.send('Hello home page');
});

// localhost:3000/login
app.get('/login',function(req,res){
    res.send('<h1>Login please</h1>');
});


app.listen(8080,function(){
    console.log('Connected, 3000 port!');
});

