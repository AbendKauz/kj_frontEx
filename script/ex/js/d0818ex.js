// 사용자로부터 숫자 2개를 입력받아 언제 입력받은 숫자가 큰지 구하는 프로그램
// const a = Number(prompt("첫번째 숫자",''));
// const b = parseInt(prompt("두번째 숫자",''));
// Number() == parseInt()

// if(a > b){
//   alert("첫번째로 입력한 숫자가 더 큽니다.")
// }else if(a == b){
//   alert("두 숫자가 같습니다.")
// }else{
//   alert("두번째로 입력한 숫자가 더 큽니다.")
// };

// 사용자에게 숫자를 입력받아 양수, 0, 음수를 구분하는 프로그램
// const a = Number(prompt('숫자를 입력해주세요.',''));

// if(a > 0){
//   alert("입력한 숫자는 양수입니다.");
// }else if(a == 0){
//   alert("입력한 숫자는 0입니다.");
// }else{
//   alert("입력한 숫자는 음수입니다.");
// }

// 사용자에게 숫자를 입력받아 홀수와 짝수를 구분하는 프로그램
// const a = Number(prompt('숫자를 입력해주세요.',''));

// if(a % 2 == 0){
//   alert("입력한 숫자는 짝수입니다.");
// }else{
//   alert("입력한 숫자는 홀수입니다.");
// }

// 현재가 몇 월인지 확인하고, 계절을 구분하는 프로그램
// const a = Number(prompt("월을 입력해주세요.", ''));
// if(a > 0 && a <= 12){
//   if(a >= 3 && a <= 5){
//     alert("봄입니다.");
//   }else if(a >= 6 && a <= 8){
//     alert("여름입니다.");
//   }else if(a >= 9 && a <= 11){
//     alert("가을입니다.");
//   }else{
//     alert("겨울입니다.");
//   }
// }else{
//   alert("잘못 입력하셨습니다.");
// }


// 태어난 연도를 입력받아 띠 출력(switch문 사용)
// const rawInput = prompt('태어난 해를 입력해주세요.','');
// const year = Number(rawInput);
// const e = year % 12;
// let result;
// switch (e) {
//   case 4:
//     result = "쥐";
//     break;
//   case 5:
//     result = "소";
//     break;
//   case 6:
//     result = "호랑이";
//     break;
//   case 7:
//     result = "토끼";
//     break;
//   case 8:
//     result = "용";
//     break;
//   case 9:
//     result = "뱀";
//     break;
//   case 10:
//     result = "말";
//     break;
//   case 11:
//     result = "양";
//     break;
//   case 0:
//     result = "원숭이";
//     break;
//   case 1:
//     result = "닭";
//     break;
//   case 2:
//     result = "개";
//     break;
//   case 3:
//     result = "돼지";
//     break;
// }
// alert(`${year}년에 태어났다면 ${result}띠 입니다.`);

// // 태어난 연도를 입력받아 
// // 간(갑,을,병,정,무,기,경,신,임,계)
// // 띠(자,축,인,묘,진,사,오,미,신,유,술,해) 
// // 출력하는 프로그램 작성
// // (ex. 1991년 = 신미년)
// const rawInput = prompt('태어난 해를 입력해주세요.','');
// const year = Number(rawInput);
// let 간 = '경,신,임,계,갑,을,병,정,무,기'.split(',');
// let 띠 = '신,유,술,해,자,축,인,묘,진,사,오,미'.split(',');

// alert(`${year}년은 ${간[year % 10]}${띠[year % 12]}년 입니다.`);


