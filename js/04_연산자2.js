// 
/*비교 연산자 확인*/
// `(벡틱)을 이용한 문자열 + 변수 작성법


//  - 문자열 전처레를 (`)로 감싸고
function check1(){

  const num1 = 100;
  const num2 = 100;
  const num3 = 999;

  const str1 = "100";
  const str2 = "100";
  const str3 = "999";

  console.log("동등 비교(==, !=)");

  // console.log(num1 + " == " + num2 + " => " + (num1 == num2));
  
  // 100 == 100 => true
  console.log(`${num1} == ${num2} => ${num1 == num2}`); //t

  console.log(`${num1} == ${num3} => ${num1 == num3}`); //f

  console.log(`${num1} != ${num3} => ${num1 != num3}`); //t

  //동등 비교 (숫자 == 문자열) 확인
  console.log(`${num1} == "${str1}" => ${num1 == str1}`); //t

  // 문자열끼리 비교
  console.log(`"${str1}" == "${str2}" => ${str1 == str2}`); //100 100 t

  console.log(`"${str1}" == "${str3}" => ${str1 == str3}`); //f

  console.log(`"${str1}" != "${str3}" => ${str1 == str3}`); //f

  console.log("----- 동일 비교(===, !==) 확인 --------");

  console.log(`${num1} === ${num2} => ${num1 === num2}`);

  console.log(`${num1} === ${num3} => ${num1 === num3}`);

  console.log(`${num1} !== ${num3} => ${num1 !== num3}`);

  // 동일 비교 (숫자 === 문자열)
  console.log(`${num1} === "${str1}" => ${num1 === str1}`); 
  //f 숫자 문자열과는 === false 같은 자료 끼리는 X 


  console.log("숫자 끼리 크기 비교 (<, >=, <, <=)");

  console.log(`${num1} > ${num2} --> ${num1 > num2}`); // 같은것은 false

  console.log(`${num3} > ${num2} --> ${num3 > num2}`); //300 > 100 true

  console.log(`${num2} > ${num3} --> ${num2 > num3}`); //100 > 300 false

  //이상/이하
  console.log(`${num1} >= ${num2} --> ${num1 >= num2}`); //true

  /* 복합 기호에서 등호(=)는 무조건 오른쪽 */


  console.log(`${num1} == ${num2} > ${num1 == num2}`); //자료 t

  console.log(`${num1} == ${str1} > ${num1 == str1}`); //자료 문자 t

  console.log(`${num1} === ${str1} > ${num1 === str1}`); // 숫자만 가능 === X f

}



/* 홀/짝 판별 함수 */

function oddEvenCheck(){
  const input1 = document.getElementById("input1");
  
  // #input1 요소에 작성된 값을 열어와
  // Number를 이용해 숫자로 변환 후 
  // value 변수에 대입 (저장)
  const value = Number(input1.value);
  
  //2로 나눴을떄 나머지가 0 === 짝수 (2의 배수)
  // 2로 나눴을 떄 나머지가 1이 아닌 경우 ==== 짝수
  // 2로 나눴을떄 나머지가 1  === 홀수 
  // 2로 나눴을 때 나머지가 0이 아닌 경우 === 홀수 

  console.log(`${value} 은/는 짝수 : ${value % 2 === 0}`);
//-------------------------------------------------------
  console.log(`${value} 은/는 홀수 : ${value % 2 === 1}`); //아닌경우 .1
}



// 배수 확인 함수
function mutipleCheck(){

  // 배수 확인에 필요한 요소를 얻어와 변수에 저장
  const input2 = document.getElementById("input2");

  const input3 = document.getElementById("input3");


  const result2 = document.getElementById("result2");

  
  const num2 = Number(input2.value); /* 입력 값 숫자로 변환 */
  const num3 = Number(input3.value); 

  // ex) 10  5 배수? 10을 5 로 나눴을 떄 나머지가 0인지 확인

  result2.innerText = num2 % num3 == 0
}


// 복합 대입 연산자 확인

function compoundCheck(){
  
  let number = 100;
  console.log(`number : ${number}`);


  number += 20; // number = number + 20; -> 120
  console.log(`number += 20 : ${number}`); //120

  number -= 60;//number = number - 60; 
  console.log(`number -= 60 : ${number}`); //60

  number *= //number = number * 3;
  console.log(`number *= 3 : ${number}`); //180

  number /= 10;
  console.log(`number /= 10 : ${number}`); //18

  number %= 5; /* number = number % 5; */
  console.log(`number %= 5 : ${number}`); //3
}



/* AND 연산자 확인 */
//AND : 둘 다 true인 경우에만 true. (외 모두 false)
//|| (OR) : 둘 다 false인 경우에만 false. (외 모두 ture)



function andCheck(){


// 104는 100 이상의 숫자 이면서 짝수인가?

const bool1 = (104 >= 100) && (104 % 2 === 0);

console.log(`104는 100 이상의 숫자 이면서 짝수인가? ${bool1}`);


// 50은 70이하의 숫자이고, 4의 배수가 맞는가

const bool2 = (50 <= 70) && (50 % 4 === 0)
console.log(`50은 70이하의 숫자이고, 4의 배수가 맞는가? ${bool2}`)

//13은 1부터 10 사이의 숫자가 맞는가

const bool3 = (1 <=13) && (13<= 10)
console.log(`13은 1부터 10 사이의 숫자가 맞는가 ${bool3}`)
}

// OR 연산자 확인
function orCheck(){
  // 4는 10을 초과 하거나 짝수인가?
  const bool1 = (4 > 10) || (4 % 2 ===0); //true 

  console.log(`4는 10을 초과 하거나 짝수인가? ${bool1}`);

  const name = "홍길동"
  const age = 18;

  // 나이가 18세미만 이거나 이름이, "김길동"인 경우

  const bool2 = (age < 18) || (name ==="김길동"); 

  console.log(`나이가 18세미만 이거나 이름이, "김길동"인 경우 ${bool2}`);

}

