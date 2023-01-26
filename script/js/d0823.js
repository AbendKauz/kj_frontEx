// let name = '홍길동';
// let pet = {
//   name:'구름',
//   // eat:(food)=>{ // 화살표 함수로 선언 시 this의 의미가 달라짐
//   eat:function(food){ // 익명함수
//     window.alert(this.name + '은/는 ' + food + '을/를 먹습니다.');
//     // == window.alert(pet.name + '은/는 ' + food + '을/를 먹습니다.');
//     // this 키워드를 사용해 자신이 가진 속성에 접근할 수 있음
//     window.alert(name + '은/는 ' + food + '을/를 먹습니다.');
//     // this 키워드를 사용하지 않았을 때 해당 키워드가 바깥에도 같은
//     // 이름으로 선언되어있다면 바깥의 속성으로 접근
//   }
// }
// // document.write(name);     // 홍길동
// // document.write('<br>');
// // document.write(pet.name); // 구름
// // 메소드 호출
// pet.eat('밥');

// // 동적으로 객체 속성 추가
// let student = {}; // 빈 객체 선언
// student.이름 = '윤인성';  // student객체의 이름 속성에 값 추가
// student.취미 = '악기';
// student.장래희망 = '생명공학자';

// console.log(JSON.stringify(student, null, 2));
// // JSON.stringify() : Javascript 값이나 객체를 JSON 문자열로 변환
// // JSON.stringify(value, replacer, space)
// // value : JSON 문자열로 변환할 값
// // replacer : 문자열화 동작방식을 변경하는 함수
// // null : 객체의 모든 속성들이 결과에 포함됨(생략가능)
// // space : 공백(생략가능)

// // 동적으로 객체 속성 제거
// let student = {}; // 빈 객체 선언
// student.이름 = '윤인성';  // student객체의 이름 속성에 값 추가
// student.취미 = '악기';
// student.장래희망 = '생명공학자';

// // 객체의 속성 제거
// delete student.장래희망;

// console.log(JSON.stringify(student, null, 2));

// // 메소드 간단 선언 구문
// let name = '홍길동';
// let pet = {
//   name:'구름',
//   eat (food){
//     window.alert(this.name + '은/는 ' + food + '을/를 먹습니다.');
//   }
// }
// // 메소드 호출
// pet.eat('밥');

// // this 키워드의 차이
// let test = {
//   a: function(){  // a를 익명함수로 선언
//     console.log(this);  // prototype : object 객체(현재 코드에서의 test 객체)
//   },
//   b: ()=>{        // b를 화살표 함수로 선언
//     console.log(this);  // prototype : Window 객체
//   }
// }

// test.a(); // {a: ƒ, b: ƒ}
// test.b(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// // 배열도 객체
// let a = [];
// a.sample = 10
// console.log(a.sample);  // 10

// // 함수도 객체
// function b (){};
// b.sample = 20;
// console.log(b.sample);  // 20

// // 배열인지 확인할 때 Array.isArray() 메소드 사용
// console.log(typeof a);  // object (객체타입)
// console.log(Array.isArray(a));  // true (배열)

// console.log(a.length);  // 0
// a.length = 5; // 배열 a의 길이를 5로 변경 (동적으로 속성 추가)
// console.log(a.length);  // 5
// // 배열 길이가 5로 변경, 값은 undefined로 들어감

// let c = 273;
// c.sample = 10;
// console.log(c.sample);  // undefined

// let d = '안녕하세요';
// d.sample = 10;
// console.log(d.sample);  // undefined

// let e = true;
// e.sample = 10;
// console.log(e.sample);  // undefined

// let f = new Number(273);
// console.log(typeof f);  // object
// f.sample = 10;
// console.log(f.sample);  // 10
// console.log(f);         // Number {273, sample: 10}
// // console에서 단순하게 f 출력 시 객체 형태로 출력
// console.log(f + 0);     // 273
// console.log(f.valueOf()); // 273
// // 숫자와 똑같이 활용할 수 있고 valueOf() 메소드를 사용해서 값 추출 가능

// let h = '안녕하세요';
// h.sample = 10;  // 일시적으로 객체로 승급되어 sample 속성 추가 가능
// console.log(h.sample);  // undefined
// // 일시적으로 승급된 것이라 추가했던 sample 속성은 이미 사라짐


// // prototype으로 power() 메소드 추가
// Number.prototype.power = function(n = 2){ // 매개변수 값이 없으면 n의 값을 2로
//   // Number 타입이면 power 함수를 사용 할 수 있다
//   return this.valueOf() ** n;
//   // ** n : power 함수 호출 시 매개변수의 값을 n승 한다
//   // ex) 매개변수가 3이면 12 * 12 * 12
// }
// // Number 객체의 power() 메소드 사용
// const a = 12;
// console.log('a.power() : ', a.power());   // a.power() : 144
// console.log('a.power(3) : ', a.power(3)); // a.power(3) : 1728
// console.log('a.power(4) : ', a.power(4)); // a.power(4) : 20736

// // indexOf()메소드로 자바스크립트 내에서 문자열 내부에 어떤 문자열이 있는지,
// // 배열 내부에 어떤 자료가 있는지 확인
// const j = '안녕하세요';
// console.log(j.indexOf('안녕')); // 0
// console.log(j.indexOf('하세')); // 2
// // 문자열 내에 있는 문자열이라면 해당 인덱스 출력
// console.log(j.indexOf('가'));   // -1
// // 문자열 내에 없는 문자열이라면 -1 출력

// // 프로토타입으로 문자열 메소드(contain()) 추가
// String.prototype.contain = function(data){
//   return this.indexOf(data) >= 0;
//   // 찾는 문자열이 포함되어있으면 해당 인덱스값을 받고
//   // 값이 0보다 크거나 같으면 true
//   // 아니면 false 리턴
// }

// Array.prototype.contain = function(data){
//   return this.indexOf(data) >= 0
//   // 찾는 값이 배열에 포함되어있으면 해당 인덱스값을 받고
//   // 값이 0보다 크거나 같으면 true
//   // 아니면 false 리턴
// }

// // String 객체의 contain() 메소드 사용
// const a = '안녕하세요';
// console.log('안녕 in 안녕하세요 : ', a.contain('안녕'));      // true
// console.log('없는데 in 안녕하세요 : ', a.contain('없는데'));  // false

// // Array 객체의 contain() 메소드 사용
// const b = [273, 32, 103, 57, 52];
// console.log('273 in [273, 32, 103, 57, 52]',b.contain(273));  // true
// console.log('0 in [273, 32, 103, 57, 52]',b.contain(0));      // false

// // 숫자 N번째 자리수까지 출력
// const l = 123.456789;
// console.log(l.toFixed(2));  // 123.46
// console.log(l.toFixed(3));  // 123.457
// console.log(l.toFixed(4));  // 123.4568

// // NaN과 Infinity 확인
// console.log(m);
// m === NaN;
// console.log(Number.isNaN(m));

// const n = 10 / 0;
// console.log(n); // Infinity (양의 무한대)

// const o = -10 / 0;
// console.log(o); // -Infinity (음의 무한대)
// console.log(Number.isFinite(n));  // false : 무한대는 false로 나옴
// console.log(Number.isFinite(o));  // false
// console.log(Number.isFinite(1));  // true : 일반적인 숫자는 셀 수 있으므로 true
// console.log(Number.isFinite(10)); // true


// const stringA = ' 앞과 뒤에 공백 들어감 ';
// console.log(stringA.trim());  // 공백 제거되서 출력
