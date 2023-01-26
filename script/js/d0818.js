// const date = new Date();          // Date() 함수(메소드) 호출
// console.log(date.getFullYear());  // 년도
// console.log(date.getMonth() + 1); // 월(0 ~ 11)
// console.log(date.getDate());      // 날짜
// console.log(date.getHours());     // 시
// console.log(date.getMinutes());   // 분
// console.log(date.getSeconds());   // 초

// 현재 시각에 따라 오전과 오후 구분하는 프로그램
// const date = new Date();
// const hour = date.getHours();

// if(hour < 12){
//   alert("오전입니다.");
// }else{
//   alert("오후입니다.");
// }

// // 중첩조건문으로 시간 파악하기(밥먹을시간)
// const date = new Date();
// const hour = date.getHours();

// if(hour < 11){
//   alert("아침 먹을 시간입니다.");
// }else{
//   if(hour < 15){
//     alert("점심 먹을 시간입니다.");
//   }else{
//     alert("저녁 먹을 시간입니다.");
//   }
// }

// if else if 조건문으로 시간 파악하기(밥먹을시간)
// const date = new Date();
// const hour = date.getHours();

// if(hour < 11){
//   alert("아침 먹을 시간입니다.");
// }else if(hour < 15){
//   alert("점심 먹을 시간입니다.");
// }else{
//   alert("저녁 먹을 시간입니다.");
// }

// 짝수와 홀수 구분하기
// const 입력 = prompt('정수를 입력하세요','');
// const 끝자리 = 입력[입력.length - 1];

// if(끝자리 === "0" ||
//   끝자리 === "2"||
//   끝자리 === "4"||
//   끝자리 === "6"||
//   끝자리 === "8"){
//   alert(`${입력}은 짝수입니다.`);
// }else{
//   alert(`${입력}은 홀수입니다.`);
// }

// const array = [273, 'String', true, function(){}, {}, [273, 103]];
// console.log(array);
// // Array(6)
// // 0 : 273
// // 1 : "String"
// // 2 : true
// // 3 : f ()
// // 4 : {}
// // 5 : (2) [273, 103]
// // length : 6

// const item = ['사과','배','바나나'];
// const index = item.indexOf('바나나');
// console.log(index); // 2
// item.splice(index, 1);
// console.log(item.indexOf('바나나'));  // -1

// // for in 반복문
// const todo = ['우유구매','업무메일확인','필라테스수업'];
// for (const i in todo) {
//     console.log(`${i}번째 할 일 : ${todo[i]}`);
// }
// // 0번째 할 일 : 우유구매
// // 1번째 할 일 : 업무메일확인
// // 2번째 할 일 : 필라테스수업

// // for of 반복문
// const todo = ['우유구매','업무메일확인','필라테스수업'];
// for (const i of todo) {
//     console.log(`오늘의 할 일 : ${todo}`);
// }
// //  -> 오늘의 할 일 : 우유구매,업무메일확인,필라테스수업

