
const box = document.querySelector(".create"); // 도형
const wi = document.getElementById("width"); //넓이
const he = document.getElementById("height"); //높이
const bColor = document.querySelector(".bColor"); // input배경
const color = document.querySelector(".color"); // input 폰트
const apply = document.querySelector("#apply");
const Text = document.getElementById("fontsize"); //폰트 사이즈

apply.addEventListener("click", function () { 
  box.style.backgroundColor = bColor.value; //배경
  box.style.color = color.value; //폰트
  box.style.fontSize = Text.value + "px";

  box.style.height= he.value + "px";
  box.style.width = wi.value + "px";

  box.innerText = Text.value //글 넣기 설정






  
  


  


  
  

})


