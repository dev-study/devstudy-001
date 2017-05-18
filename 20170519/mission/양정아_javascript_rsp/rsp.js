var score = 0;
var game = 5;
var com_choice = ['s.png','r.png','p.png'];
var com_img = document.getElementById('com_img');
var i = 0;
var c_time;

function change(){                          //게임 시작 전 com 이미지 바뀌는 함수
  com_img.src = com_choice[i];
  i++;
  i%=3;
  c_time = setTimeout("change()",500);
}

function rsp(choice){                       //사용자 입력있으면 실행되는 함수
  clearTimeout(c_time);
  game--;

  var com = Math.floor(Math.random()*3);
  var result = document.getElementById('result');
  var user_score = document.getElementById('score');

  if(game>0){                               //게임 횟수 5번 제한
    if(choice == com){
      com_img.src = com_choice[com];
      result.innerHTML = "비겼습니다.";
      user_score.innerHTML = "남은기회 : "+game+"번 현재점수 : "+score+"점";
    }

    else if((choice == 0 && com == 2)||(choice == 1 && com == 0)||(choice == 2 && com == 1)){
      com_img.src = com_choice[com];
      result.innerHTML = "이겼습니다.";
      score+=5;
      user_score.innerHTML = "남은기회 : "+game+"번 현재점수 : "+score+"점";
    }

    else if((choice == 0 && com == 1)||(choice == 1 && com == 2)||(choice == 2 && com == 0)){
      com_img.src = com_choice[com];
      result.innerHTML = "졌습니다.";
      score-=5;
      user_score.innerHTML = "남은기회 : "+game+"번 현재점수 : "+score+"점";
    }
    if(game<=0) game_End(score);
  }
  
  function game_End(score){
    user_score.innerHTML = "남은기회 : 없음 현재점수 : "+score+"점";
    alert("당신의 점수는 "+score+"입니다!!");
    window.close();
  }
}
