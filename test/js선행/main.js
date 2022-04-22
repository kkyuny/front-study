/* 
 JavaScript 선행 학습
 01. 개요
  1) 표기법
   -dash-case(kebab-case): HTML, CSS에서 주로 사용
   -snake_case: HTML, CSS에서 주로 사용
   -camelCasee: JS에서 주로 사용
   -ParcelCase: JS에서 특정 상황에서 사용(함수 이름 명시)
  2) Zero-based Numbering: 숫자를 0부터 센다.
  3) 주석
   - //, /* 한 줄 메모 */
   /*
   - /*
    여러줄 메모
   */ 
  
  /*
  02. 데이터 종류(자료형)
   1) String: 문자데이터로 따옴표를 사용한다.
    let myName = "HEROPY";
    let hello = `Hello ${myName}?!` -> 백틱도 사용이 가능하다(보간법?)

    console.log(hello); // Hello HEROPY

    2) Number(숫자 데이터)
     let number = 123;
     let opacity = 1.57

    3) Boolean: true, false 두 가지 값 밖에 없는 논리 데이터이다.
     let checked = true;
     let isShow = false;

    4) Undefined: 값이 할당되지 않은 상태를 나타낸다.
      let undef;
      let obj = { abc: 123};

      console.log(undef); // undefined
      console.log(obj.abc); // 123
      console.log(obj.xyz); // undefined

    5) Null: 어떠한 값이 의도적으로 비어있음을 의미한다.
      let empty = null;

      console.log(empty); // null
  
    6) Object(객체 데이터): 여러 데이터를 Key:Value 형태로 저장한다. { }
      let user = {
        //Key: Value,
        name: 'HEROPY',
        age: 85,
        isValid: true
      };

      console.log(user.name); // HEROPY

    7) Array(배열 데이터): 여러 데이터를 순차적으로 저장한다. [ ]
      let fruits = ['Apple', 'Banana', 'Cherry'];
      
      console.log(fruits[0]); // 'Apple'
  03. 변수, 예약어
    1) 변수 var, let, const
      - let : 재사용이 가능한 변수
        let a = 2;
        let b = 5; 
        -> 변수를 선언한다는 표현이다.
        let a = 12;
        a = 999;
        -> 선언한 변수를 재사용이 가능하다.
      - const: 선언한 변수의 재사용이 불가능하다.
      - var: 사용을 지양한다.
    2) 예약어 Reserved Word
      - let this = "hello"; 등이 있다.
       -> 예약어는 변수로서 사용이 불가능하다.
  04. 함수 function
    1) 함수 선언
      function helloFunc(){
        //실행 코드
        console.log(1234);
      }
      function sum(a, b){ // a와 b는 매개변수(Parameters)
        //실행 코드
        return a+b;
      }
    2) 함수 호출
      helloFunc(); // 1234
      let a = sum(1,2); //1과 2는 인수(arguments)
    3) 함수의 종류
      (1) 이름이 있는 함수(함수의 선언)
        function hello(){

        }
      (2) 이름이 없는 함수(함수의 *표현*)
        let world = function(){

        }
        -> 주로 익명 함수는 변수에 담아져 데이터로서 활용된다.
    4) 객체 데이터 내부에 함수 선언이 가능하다 -> 내부에 선언된 함수를 메소드라고 부른다.
      const heropy = {
        name: 'HEROPY',
        getName : function (){
          return this.name;
        } // 메소드
      };
      const hisName = heropy.getName();
  05. 조건문 if, else
    let isShow = true;
    let checked = false;

    if(isShow){ // 조건이 참이면 실행
      console.log('show'!); // show!
    }

    if(isShow){
      console.log('show'!); // show!
    } else { // if의 조건이 거짓이면 실행
      console.log('Hide?'); 
    }

  06. DOM API(1) : js에서 hmtl을 제어하는 일종의 명령문이다.
    - DOM: document object(div, spam, ...) model
    - API: application programming interface

    -HTML 요소(element) 1개 검색/찾기
    const boxEl = document.querySelector('box');

    -HTML 요소에 적용할 수 있는 메소드
    boxEl.addEventListener();

    -인수(Argumnets)를 추가 가능!
    boxEl.addEventListener(1, 2);

     1) 이벤트(event, 상황)
      boxEl.addEventListener('click', 2);
    
     2) 핸들러(handeler, 실행할 함수)
      boxEl.addEventListener('click', function () {
          console.log('Click~!');
      });

    - 요소의 클래스 정보 객체 활용
     boxEl.classList.add('active');
     let isContains = boxEl.classList.contains('active');
     console.log(isContains); // true

     boxEl.classList.remove('active');
     let isContains = boxEl.classList.contains('active');
     console.log(isContains); // false
  
07. DOM API(2)
  - HTML 요소(element) 모두 검색/찾기
  const boxEls = document.querySelectorAll('.box');
  console.log(boxEls);

  - 찾은 요소를 반복해서 함수 실행
  boxEls.forEach(function () {});
   - 첫 번째 매개변수: 반복 중인 요소
   - 두 번째 매개변수: 반복 중인 번호
    boxEls.forEach(function (boxEl, index) {});

  - textContent: Getter 값을 얻는 용도
   console.log(boxEl,textContent); // Box!!
  
  - textContent: Setter, 값을 지정하는 용도
   boxEl.textContent = 'HEROPY?!';
   console.log(boxEl.textContent); // HEROPY?!

08. 메소드 체이닝: 메소드를 체인처럼 사용하는 기능
  const a = 'Hello~';
  // split: 문자를 인수 기준으로 쪼개서 배열로 반환
  // reverse: 배열을 뒤집기
  // join: 배열을 인수 기준으로 문자로 병합해 반환.
  const b = a.split('').reverse().join(''); // 메소드가 체인 형식으로 연결되어있다 -> 메소드 체이닝
  
  */

let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function() {
  console.log('Click!!!');
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  );
});

const boxEls = document.querySelectorAll('.box');
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index+1}`);
  // 보간법을 사용하려면 ``(백틱)을 사용해야한다.
  console.log(index,boxEl);
});

const boxEl2 = document.querySelector('.box');
console.log(boxEl2.textContent);

boxEl2.textContent = 'HEROPY!!';

console.log(boxEl2.textContent);

//메소드 체이닝

const a = 'Hello~';
const b = a.split('').reverse();
const c = a.split('').reverse().join('');

console.log(a);
console.log(b);
console.log(c);
