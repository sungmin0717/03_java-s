function random(){
  const input1 = document.getElementById("input1");

  const value = (input1.value);

  Math.floor(random() * 100);
  alert ("${value}입니다.");
}