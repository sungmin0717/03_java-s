/*전체 산술 연산 결과 출력
  
  숫자 + 숫자 = 숫자
  문자 + 문자 = 이어쓰기
  숫자 + 문자 = 이어쓰기
  숫자, 문자 혼용된 산술 연산식에서
  사칙 연산 우선순위를 따른다

  -1순위 : *, /, %
  -2순위 : +, -

  *innerText : 대입된 글자 그대로 출력

  요소.innerText = "결과<br>100"
   -> 화면에 " 결과<br>100" 그대로 출력


*innerHTML = 대입된 글자에 포함되어있는 HTML 태그를 해석해서 출력

   요소.innerHTML = "결과<br>100"
   -> 결과
      100
      형태로 출력됨
*/
function allOperationsFn() {
  const v1 = Number(in1.value); /* 첫번쨰 값 */
  const v2 = Number(in2.value); /* 두번쨰 값 */


  // 각각의 연산 결과를 별도의 변수에 저장 
  const plus = v1 + v2;
  const minus = v1 - v2;
  const multi = v1 * v2;
  const div = v1 / v2;
  const mod = v1 % v2;





}
