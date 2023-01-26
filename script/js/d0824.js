// function kj(a){
//   console.log(a);
// }

// let b = 100;
// kj(b);

// let c = '안녕하세요';
// kj(c);

// let d = true;
// kj(d);

// let e = function(){
//   console.log("광주");
// };
// kj(e); 
// // 함수의 매개변수로 함수가 전달될 수 있음
// //  -> e : 콜백함수


// // 함수를 선언
// function callThreeTimes (ca) {
//   for (let i = 0; i < 3; i++) {
//       ca(i);  // == print(i);
//   }           // ca라는 매개변수는 함수이므로 호출할 수 있음
// }

// function print (i) {
//   console.log(`${i}번째 함수 호출`);
// }

// 함수를 호출
// callThreeTimes(print);
// // 0번째 함수 호출
// // 1번째 함수 호출
// // 2번째 함수 호출

// callThreeTimes(100);
// -> Uncaught TypeError : ca is not a function

// callThreeTimes (function print (i){
//   console.log(`${i}번째 함수 호출`);
// });
// // 0번째 함수 호출
// // 1번째 함수 호출
// // 2번째 함수 호출

// callThreeTimes (function (i){ // 익명함수 사용
//   console.log(`${i}번째 함수 호출`);
// });
// // 0번째 함수 호출
// // 1번째 함수 호출
// // 2번째 함수 호출
// // -> 익명함수로 만들어도 정상동작

// callThreeTimes ((i) => { // 화살표 함수 사용
//   console.log(`${i}번째 함수 호출`);
// });
// // 0번째 함수 호출
// // 1번째 함수 호출
// // 2번째 함수 호출
// // -> 화살표 함수로 만들어도 정상동작

// let kkk = function (i){
//   console.log(`${i}번째 함수 호출`);
// }
// callThreeTimes(kkk);
// // 0번째 함수 호출
// // 1번째 함수 호출
// // 2번째 함수 호출

// callThreeTimes(console.log);
// // 0
// // 1
// // 2

// let numbers = [273, 52, 103, 32, 57];

// numbers.forEach(function (value, index, array){
//   // 매개변수로 value, index, array를 갖는 콜백 함수 사용
//   console.log(`${index}번째 요소 : ${value}`);
// });

// let ar = [5, 10, 4, 20];

// ar.forEach(function(){
//   console.log(10);  // 4 10
//   // 매개변수 0개 : 회전 수
// });

// ar.forEach(function(kk){
//   // 매개변수 1개 : 매개변수의 값
//   console.log(kk);
// })

// ar.forEach(function(kk, bb){
//   // 매개변수 2개 : 매개변수의 값, 인덱스 값
//   console.log(`${bb}번째 값 : ${kk}`);
// })


// // 배열을 선언
// let numbers = [273, 52, 103, 32, 57]

// // 배열의 모든 값을 제곱
// numbers = numbers.map(function (value, index, array) {
// // 매개변수로 value, index, array를 갖는 콜백 함수 사용
//   return value * value;
// })

// // 출력
// numbers.forEach(console.log);
// // 74529 0 Array(5)
// // 2704 1 Array(5)
// // 10609 2 Array(5)
// // 1024 3 Array(5)
// // 3249 4 Array(5)

// let numbers = [0, 1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(function (value){
// // 함수 내부에서 value만 사용하므로 value만 매개변수로 넣음
//   return value % 2 === 0
// // 짝수만 추출(true)인 조건식
// });

// console.log(`원래 배열 : ${numbers}`);
// console.log(`짝수만 추출 : ${evenNumbers}`);


// // 배열 선언
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // 배열의 메소드를 연속적으로 사용
// // => 메소드 체이닝
// numbers
//   .filter((value) => value % 2 === 0) // 짝수만 골라서 저장 (0, 2, 4, 6, 8)
//   .map((value) => value * value) // filter()에서 골라진 값을 제곱  (0, 4, 16, 36, 64)
//   .forEach((value) => { // map()에서 처리된 값을 출력
//     console.log(value);
//   });


// setTimeout(() => { // 1초 후에 실행됩니다
//   console.log('1초 후에 실행됩니다')
// }, 1 * 1000);

// let count = 0;
// setInterval(() => { // 1초마다 실행됩니다.(count번째)
//   console.log(`1초마다 실행됩니다.(${count}번째)`);
//   count++;
// }, 1 * 1000);

// let id;
// let count = 0;
// id = setInterval(() => { // 1초마다 실행됩니다.(count번째)
//   console.log(`1초마다 실행됩니다.(${count}번째)`);
//   count++;
// }, 1 * 1000);

// setTimeout(() => { // 5초가 지나면 타이머 종료
//   console.log('타이머를 종료합니다.');
//   clearInterval(id); // 타이머 종료를 위해서 id를 매개값으로 실행
// }, 5 * 1000);

