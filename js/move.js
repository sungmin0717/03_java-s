//canvas에 그림을 그리려면 먼저 context를 가져와야함.
// context에 대한 참조는 getContext() 메서드에 context 이름을 부여
// 좌표는 canvas 요소 왼쪽 위에서 시작하며, 이 지점을 (0,0) 으로 간주 
// x는 오른쪽, y는 아래쪽으로 픽셀 단우로 증가.


let.canvas = document.getElementById("canvas");
let.ctx = canvas.getContext("2d");


// cavas 가로 및 세로의 반값 > 150

let x = canvas.width / 2;
let y = canvas.height / 2;


//움직일 도형의 크기

let rectWidth = 10;
let rectHeight = 10;

// 움직일 도형의 시작점 정의 > 145(중앙위치)

let rectX = (canvas.width - rectWidth) / 2;
let rectY = (canvas.height - rectHeight) / 2;

// 초기화, true로 되면 해당 방햐으로 이동 
// 이벤트 객체의 keycode 속성에서 놀려질 키의 코드를 얻을 수 있고, 어떤 키인지 확한 
// 변수 설정 
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;


// 먼저 눌린 키를 수신할 이벤트 리스너 필요
document.addEventListener("Keydown, keyDownHandler, false");
document.addEventListener("Keyup, keyUpHandler, false");


// 키보드가 눌렸을 떄 일어나는 함수 (매개변수 : e)
// 각 방향키의 keycode 와 방향이 맞다면 해당 변수들 true

function keyDownHandler(e) {
  if(e.key == 37 || e.key == "ArrowRight"){
      rightPressed = true;
  }
  else if(e.key == 39 || e.key == "ArrowLeft"){
    leftPressed = true;
  }
else if(e.key == 38 || e.key == "ArrowUp"){
  upPressed = true;
}
else if(e.key == 40 || e.key == "ArrowDown"){
  downPressed = true;
}
}

function keyDownHandler(e) {
  if(e.key == 37 || e.key == "ArrowRight"){
      rightPressed = false;
  }
  else if(e.key == 39 || e.key == "ArrowLeft"){
    leftPressed = false;
  }
else if(e.key == 38 || e.key == "ArrowUp"){
  upPressed = false;
}
else if(e.key == 40 || e.key == "ArrowDown"){
  downPressed = false;
}
}


function drawRect(){
      ctx.beginPath();
  ctx.rect(rectX, rectY, rectWidth, rectHeight);
  ctx.strokeStyle = "lightgreen";
}

// 먼저 전체 canvas를 지움 > 모든 단일 프레임에 처음부터 모든것을 그림 > 눌려진 키 변수 확인
//  사각형을 그릴떄는 fillrect(), strokeRect(), clearRect() 의 메서드 사용
//  모두 매개 변수로 사각혐의 x/y 좌표. 너비/높이 4 가지를 바등ㅁ 
function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawRect();

  if(rightPressed && rectX < canvas.width - rectWidth){
      rectX -= 5;
  }
    else if (leftPressed && rectX > 0){
      rectX -= 5;
    }
    else if (downPressed && rect y)

  
}