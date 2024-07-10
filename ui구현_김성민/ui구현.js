
const box = document.querySelector(".create"); // 도형
const wi = document.querySelector("#width"); //넓이
const he = document.querySelector("#height"); //높이
const bColor = document.querySelector(".bColor"); // input배경
const color = document.querySelector(".color"); // input 폰트
const Apply = document.querySelector("#apply");
const fontSize = document.querySelector("#fontsize"); //출력 문자.
const Text = document.querySelector("#text"); //출력 문자.

Apply.addEventListener("click", function () {
  box.style.backgroundColor = bColor.value; //배경
  box.style.color = color.value; //폰트
  box.style.fontSize = fontSize.value + "px";

  box.style.height = he.value + "px";
  box.style.width = wi.value + "px";

  box.innerText = Text.value; //글 넣기 설정

  const checkBtn
    = document.querySelector("[name = bold]:checked");
  let op;

  if (checkBtn === null) op = 1; //체그가 안되어 있으면1
  else op = checkBtn.value; // 체크된 값


})



