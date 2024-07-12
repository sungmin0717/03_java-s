const lotooBtn = document.querySelector("#lotooBtn");
const lotooBord = document.querySelector("#lotooBord");

let a = 0;

for(let i = 0 ; i < a.length ; i++){
  lotooBord[i].addEventListener("click", () => {
    
    const str = btns[i].innerText;

    switch (lotooBtn){
      case "append":
        const btn1 = createElement("button");
        lotooBtn.innerText = count;
        standard.append(lotooBtn); // #standard 마지막 자식으로 span2 추가 
        div1.className = "BtnCreate";
        break;
    }
    count++;
  });
}
