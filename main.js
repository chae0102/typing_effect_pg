let target = document.querySelector("#dynamic");
//#dynamic을 가지고 있는 객체를 선택하라는 의미

function randomString() {
    let stringArr = ["No.3 | Coding Project", "Learn to HTML",
    "Learn to CSS", "Learn to Javascript", "Learn to Vue"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]; 
    // selectString은 배열에 있는 문자열들 중에 랜덤한 문자열을 선택하여 변수에 할당받을 수 있게끔 처리함
    // Math.random() * 4 => 4미만의 랜덤 숫자 / .floor는 소수점을 버리게함
    
    let selectStringArr = selectString.split("");
    //해당 문자열을 "" 기준을 이용해 배열로 분리 시키라는 의미
    //Learn to HTML 단어 하나하나가 쪼개져 배열로 변경됨

    return selectStringArr;
}

//타이핑 리셋 함수
function resetTyping() {
    target.textContent = ""; //3초뒤 텍스트가 사라짐 다시 한번 아래 함수를 실행 시켜야하는데
    dynamic(randomString()); // 그걸 구현하기 위해 함수 randomString를 만듦
    //dynamic(randomString());을 추가해줌으로써 타이핑 출력이 되었다가 3초뒤 지워지고 다시 출력되는 반복행동을 함
}                           
//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length > 0){
    target.textContent += randomArr.shift(); 
    //배열의 앞에부터 빼냄 shift라는 매소드는 배열이 있으면 배열에 앞부터 빼냄
    setTimeout(function(){
        dynamic(randomArr);
    }, 80);
    //재귀함수 원리 이용 randomArr이 아직도 0보다 크다면 다시 dynamic을 호출 
    // >> randomArr이 0보다 클때까지는 함수가 계속 반복될것임(0.08초의 간격)
  }else{
    setTimeout(resetTyping, 3000); //3초뒤
    //randomArr 이 0보다 크지 않다면 >> 담겨있는 문자를 전부 shift하여 출력해서 남아있는게 x
    //더이상 출력될 문자열이 없을때
  }
}
dynamic(randomString()); //쪼개져있는 값이 위에 있는 randomArr매개변수로 전달됨
//최초에 dynamic을 호출할때 매개변수에 사용된 랜덤문자열을 randomString()함수를 바로 호출하도록 바꾸어 호출된 값으로 전달하도록 함
//dynamic(selectStringArr); >> dynamic(randomString());

//커서 깜빡임 효과 함수
function blink(){ 
    target.classList.toggle("active");
} //active라는 속성이 켜졌다 꺼졌다를 반복하게 함

setInterval(blink, 500); 
//반복함수를 통해 blink라는 함수를 0.5초마다 실행