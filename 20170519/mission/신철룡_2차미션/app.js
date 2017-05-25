function populate() {
  if(quiz.isEnded()) {
    showScores();
  }
  else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for(var i =0; i< choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);

    }
    showProgress();
  }
};

function guess(id, guess){
  var button = document.getElementById(id);
  button.onclick = function(){
    quiz.guess(guess);
    populate();
  }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;

}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHtml;
}


var questions = [
  new Question("[ㅈ ㅏ ㄹ ㅜ ㅁ ㅏ ㄷ ㅣ] 를 </br>  낱말로 만들면 무엇이 될까?", ["동물", "도시", "행성", "물고기"], "동물"),
  new Question("웹의 창시자는?", ["팀 버너스리", "빌 게이츠", "앨런 튜링", "스티브 잡스"], "팀 버너스리"),
  new Question("우리나라 국보 1호는?", ["흥인지문", "숭례문", "원각사지 십층석탑", "유재석"], "숭례문"),
  new Question("노 룩(No Look) 패스의 최고 달인은?", ["호날두", "스테판 커리", "손홍민", "김무성"], "김무성"),
  new Question("이 허접한걸 만든 사람은?", ["김창주", "신철룡", "유시민", "전원책"], "신철룡"),
];

var quiz = new Quiz(questions);

populate();
