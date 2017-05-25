var express = require('express')
  , http = require('http');

var app = express();

app.set('port', process.env.PORT || 8000);
 
app.get('/', function(req, res) {
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>주소창 / 뒤에 아무 단어나 입력해 보세요<br/>예) 13.124.119.184/abcde</h1>');
	res.end();
});

app.get('/:word', function(req, res) {

	var requested_word_letters = req.params.word.split('');

	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1><p id="r">');
	for(var i = 0; i < requested_word_letters.length; i++){
		res.write('<span>' + requested_word_letters[i] + '</span>');
	}
	res.write('</p></h1>');
	res.write('<div><p>입력한 단어를 예쁘게 꾸몄습니다. 잘했나요?</p></div>');
	res.write('<a href="#">예</a> <a href="#">아니오</a>');
	res.write("<script>var colors = ['rgb(21,201,161)', 'rgb(21,201,161)', 'rgb(1,92,76)', 'rgb(17,117,99)', 'rgb(14,142,113)', 'rgb(23,175,148)', 'rgb(21,201,161)', 'rgb(21,201,161)'];target = document.getElementById('r').children;var i;j = colors.length;len = target.length;inter = setInterval(function(){colors.unshift(colors.pop());for (i = 0; i < len; i++){target[i].style.color = colors[i%j];}}, 80);</script>");
	res.end();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
