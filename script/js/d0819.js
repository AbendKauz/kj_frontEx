// const 함수 = function(){
//   console.log('함수 내부의 코드입니다...1');
//   console.log('함수 내부의 코드입니다...2');
//   console.log('함수 내부의 코드입니다...3');
//   console.log('');
// }
//
// 함수();
// 함수();
//
// console.log(typeof 함수);
// console.log(함수);
//
// // 1 ~ 12 line 실행결과
//
// // 함수 내부의 코드입니다...1
// // 함수 내부의 코드입니다...2
// // 함수 내부의 코드입니다...3

// // 함수 내부의 코드입니다...1
// // 함수 내부의 코드입니다...2
// // 함수 내부의 코드입니다...3

// // function
// // f(){
// //   console.log('함수 내부의 코드입니다...1');
// //   console.log('함수 내부의 코드입니다...2');
// //   console.log('함수 내부의 코드입니다...3');
// //   console.log('');
// // }


// 윤년을 확인하는 함수 만들기
// 조건1) 4로 나누어 떨어지는 해는 윤년
// 조건2) 100으로 나누어 떨어지는 해는 윤년이 아님
// 조건3) 400으로 나누어 떨어지는 해는 윤년

// // 1.
// function a(year){
//   let result = "윤년이 아님";
//   if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//     result = "윤년";
//   }
//   return result;
// }

// console.log('2022년은? : ' + a(2022));
// console.log(`2021년은? : ${a(2021)}`);
// console.log(`2020년은? : ${a(2020)}`);

// // 2.
// function isLeapYear(year){
//   return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
// }

// console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`);
// console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`);
// console.log(`2000년은 윤년일까? === ${isLeapYear(2000)}`);
// console.log(`1900년은 윤년일까? === ${isLeapYear(1900)}`);


// A부터 B까지 더하는 함수 만들기
// let a = Number(prompt("첫번째 숫자 : ")), b = Number(prompt("두번째 숫자 : "));
// function odd(a, b){
//   let result = 0;
//   for(a; a <= b; a++){
//     result += a;
//   }
//   return result;
// }

// console.log(`${a} 부터 ${b}까지의 합 === ${odd(a, b)}`)


// 최소값을 구하는 함수

// 1.
// let arr = [52, 273, 32, 103, 275, 24, 57];
// function min(arr){
//   let min = arr[0];
//   for(let i = 1; i < arr.length; i++){
//     if(arr[i] < min){
//       min = arr[i];
//     }
//   }
//   return min;
// }

// console.log(`${arr} 중에서 최소값 === ${min(arr)}`);

// 2.
// function min(array){
//   let output = array[0];
//   for (const item of array) {  // 배열형 변수 array의 번지값을 item에 넣어서 배열 끝까지 반복
//     if(output > item){ // 현재 output보다 더 작은 item이 있다면
//       output = item;   // output의 값을 item으로 변경
//     }
//   }
//   return output;
// }

// const testArray = [52, 273, 32, 103, 275, 24, 57];
// console.log(`${testArray} 중에서 최소값 = ${min(testArray)}`);
