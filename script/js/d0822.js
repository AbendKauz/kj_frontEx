// let now = new Date();
// document.write("현재 시각은 " + now + "<br>");
// document.write("현재 시각은 " + now.toString() + "<br>");
// document.write("현재 시각은 " + now.getFullYear() + "<br>");

// document.write("현재 시각은 " + now.toLocaleString() + "<br>");
// toLocaleString : 현재 국가에서 표현하는 날짜형

// let nums = [1, 2, 3];
// let chars = ["a", "b", "c", "d"];


// // concat() : 서로 다른 배열 2개를 합쳐서 새로운 배열을 만듬
// let numsChars = nums.concat(chars);
// let charsNums = chars.concat(nums);

// document.write("nums에 chars 합치면 : ", numsChars,
// "<br> chars에 nums 합치면 : ", charsNums)


// // join() : 배열요소를 연결해서 하나의 문자열로 만듬
// let String1 = nums.join();
// document.write("구분자 없이 : ", String1);
// document.write("<br>");
// let String2 = chars.join('/');
// document.write("'/' 구분자 지정 : ", string2);


// let nums = [1, 2, 3];
// // push() : 배열 맨 끝에 요소 추가
// let ret1 = nums.push(4, 5); // 배열 맨 끝에 새로운 요소 추가
// document.write("length : ", ret1, " | 배열 : ", nums);
// document.write("<br>");


// // unshift() : 배열 맨 앞에 요소 추가
// let ret2 = nums.unshift(0); // 배열 맨 앞에 새로운 요소 추가
// document.write("length : ", ret2, " | 배열 : ", nums);


// // pop() : 배열 뒤쪽에서 요소를 꺼냄
// let chars = ["a", "b", "c", "d"];
// let popped1 = chars.pop();  // 마지막 요소 꺼냄
// document.write("꺼낸 요소 : ", popped1," | 배열 : ", chars);
// document.write("<br>");


// // shift() : 배열 앞쪽에서 요소를 꺼냄
// let popped2 = chars.shift();  // 마지막 요소 꺼냄
// document.write("꺼낸 요소 : ", popped2," | 배열 : ", chars);


// // splice() : 중간에 요소를 추가하거나 삭제
// // 괄호안에 인수가 1개 : 지정한 인덱스의 요소부터 배열의 맨 끝 요소까지 삭제
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.splice(2);
// document.write("반환된 배열 : " + newNumbers + "<br>");
// document.write("변경된 배열 : " + numbers);

// let study = ["html", "css", "web", "jquery"];
// // 괄호안에 인수가 2개 : 인덱스값, 삭제할 요소의 개수
// let newStudy = study.splice(2, 1);
// document.write("반환된 배열 : " + newStudy + "<br>");
// document.write("변경된 배열 : " + study);

// // 괄호안에 인수가 3개 : 삭제할 시작 위치, 삭제할 개수, 삭제한 위치에 새로 추가할 요소
// let newStudy2 = study.splice(2, 1, "js");
// document.write("반환된 배열 : " + newStudy2 + "<br>");
// document.write("변경된 배열 : " + study);

// // 2번째 자리에 0 입력 시 삭제를 하지 않고 해당위치에 새로 요소만 추가함
// let newStudy3 = study.splice(2, 0, "js");
// document.write("반환된 배열 : " + newStudy3 + "<br>");
// document.write("변경된 배열 : " + study);

// // 3번째 자리에 ',' 입력 후 삽입요소 여러개 추가 가능
// let newStudy4 = study.splice(2, 0, "js", "mybatis");
// document.write("반환된 배열 : " + newStudy4 + "<br>");
// document.write("변경된 배열 : " + study);


// // slice() : 기존 배열을 바꾸지 않으면서 삭제
// let colors = ["red", "green", "blue", "white", "black"];
// // 괄호안에 인수가 1개 : 지정한 인덱스의 요소부터 배열의 맨 끝 요소까지 꺼내서 반환
// let colors2 = colors.slice(2);  // 인덱스 값이 2인 요소부터 마지막요소까지 꺼냄
// document.write(colors2);

// // 괄호안에 인수가 2개 : 시작 인덱스, 끝 인덱스 직전의 인덱스
// let colors3 = colors.slice(2, 4);  // 인덱스 값이 2인 요소부터 3까지 요소 꺼냄
// document.write(colors3);

// alert("홍길동");
// window.alert("홍길동");  // 가능하면 붙여서 작성하는 습관 기를 것


// // window.setInterval : 지정한 시간 간격만큼 함수 사용(함수명, 밀리초단위)
// let aa = window.setInterval(cnt, 3000);
// function cnt(){
//   window.alert("하이!");
// }

// 브라우저 화면에 1초간격으로 1씩 증가(숫자가 변해야 함)
let aa = window.setInterval(cnt, 1000);
let num = 0;
function cnt(){
  document.querySelector("#kim").innerHTML=++num;
  if(num >= 15){
    window.clearInterval(aa);
  }
}

