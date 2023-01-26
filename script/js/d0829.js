// document.addEventListener('DOMContentLoaded', () => {
//     let counter = 0;
//     const h1 = document.querySelector('h1');

//     h1.addEventListener('click', (event) => {
//         counter++;
//         h1.textContent = `클릭 횟수 : ${counter}`;
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     let counter = 0;
//     let isConnect = false;

//     const h1 = document.querySelector('h1');
//     const p = document.querySelector('p');
//     const connectButton = document.querySelector('#connect');
//     const disconnectButton = document.querySelector('#disconnect');

//     const listener = (event) => {
//         h1.textContent = `클릭 횟수 : ${counter++}`;
//     }

//     connectButton.addEventListener('click', () => {
//         if(isConnect === false){
//         h1.addEventListener('click', listener);
//         p.textContent = '이벤트 연결 상태 : 연결';
//         isConnect = true;
//         }
//     });

//     disconnectButton.addEventListener('click', () => {
//         if(isConnect === true){
//         h1.removeEventListener('click', listener);
//         p.textContent = '이벤트 연결 상태 : 해제';
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const textarea = document.querySelector('textarea');
//     const h1 = document.querySelector('h1');

//     textarea.addEventListener('keyup', (event) => {
//     // textarea.addEventListener('keydown', (event) => {
//     // keydown : 글자가 완성되기전엔 count가 안됨
//     // textarea.addEventListener('keypress', (event) => {
//     // keypress : 한글은 잘 안먹히는 문제 발생
//         const length = textarea.value.length;
//         // value 속성으로 입력 양식의 글자를 읽어들일 수 있음
//         h1.textContent = `글자 수 : ${length}`;
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const h1 = document.querySelector('h1');
//     const print = (event) => {
//         let output = '';
//         // output이라는 변수(문자형) 생성
//         output += `alt : ${event.altKey}<br>`;
//         // alt 이벤트가 발생하면(altKey를 누르면) true 반환
//         output += `ctrl : ${event.ctrlKey}<br>`;
//         // ctrl 이벤트가 발생하면 true 반환
//         output += `shift : ${event.shiftKey}<br>`;
//         // shift 이벤트가 발생하면 true 반환
//         output += `code : ${typeof(event.code) !== 'undefined' ? 
//             event.code : event.keyCode}<br>`;
//         // event.code가 있으면 event.code를 출력,
//         // undefined 라면 event.keyCode를 출력
//         h1.innerHTML = output;
//         // h1태그에 HTML형식으로 변수 output에 저장된 문자열 입력
//     }

//     document.addEventListener('keydown', print);
//     // 키가 눌릴 때 print() 함수 호출
//     document.addEventListener('keyup', print);
//     // 키가 떨어질 때 print() 함수 호출

// });


// document.addEventListener('DOMContentLoaded', () => {
//     // 별의 초기 설정
//     const star = document.querySelector('h1');
//     star.style.position = 'absolute';
//     // star의 style속성을 조작하여  position 값을 absolute로 지정

//     // 별의 이동을 출력하는 기능
//     let [x, y] = [0, 0];
//     const block = 20;
//     const print = () => {
//         // x나 y값을 block값 만큼 곱하여 여백으로 추가
//         // -> 여백만큼 이동하는것처럼 보임
//         star.style.left = `${x * block}px`;
//         star.style.top = `${y * block}px`;
//     }
//     print();    // print() 메소드 호출

//     // 별을 이동하는 기능
//     const [left, up, right, down] = [37, 38, 39, 40];
//     // 방향키 keycode를 쉽게 사용할 수 있게 변수를 사용해서 이름을 붙임
//     // left = keycode 37
//     // up = keycode 38
//     // right = keycode 39
//     // down = keycode 40
//     document.body.addEventListener('keydown', (event) => {
//         switch (event.keyCode){
//             case left :
//                 x -= 1;
//                 break;
//             case up :
//                 y -= 1;
//                 break;
//             case right :
//                 x += 1;
//                 break;
//             case down :
//                 y += 1;
//                 break;
//         }
//         print();    // print() 메소드 호출
//     });
// });


//    // error
// const listener = (event) => {
//     const length = textarea.value.length;
//     // textarea -> 내장객체도 아니고, 매개변수도 아니므로 참조 불가
//     h1.textContent = `글자 수 : ${length}`;
// }
// document.addEventListener('DOMContentLoaded', () => {   
//    // 이벤트 리스너가 외부로 분리
//     const textarea = document.querySelector('textarea');
//     const h1 = document.querySelector('h1');
//     textarea.addEventListener('keyup', listener);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const textarea = document.querySelector('textarea');
//     const h1 = document.querySelector('h1');
//     textarea.addEventListener('keyup', (event) => {
//         const length = textarea.value.length;
//         h1.textContent = `글자 수 : ${length}`;
//     });
// });

// textarea 사용 방법
// 1. event.currentTarget 사용
// document.addEventListener('DOMContentLoaded', () => {
//     const listener = (event) => {
//         const length = event.currentTarget.value.length;
//         h1.textContent = `글자 수 : ${length}`;
//     }
//     const textarea = document.querySelector('textarea');
//     const h1 = document.querySelector('h1');
//     textarea.addEventListener('keyup', listener);
// });

// 2. this 키워드 사용
// document.addEventListener('DOMContentLoaded', () => {
//     const listener = function (event) {
//         const length = this.value.length;
//         // this가 동작이 되려면 익명함수 형태로 만들어야 함
//         // 익명함수의 this : 해당객체
//         // 화살표함수의 this : 윈도우전체
//         h1.textContent = `글자 수 : ${length}`;
//     }
//     const textarea = document.querySelector('textarea');
//     const h1 = document.querySelector('h1');
//     textarea.addEventListener('keyup', listener);
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const input = document.querySelector('input');
//     const button = document.querySelector('button');
//     const p = document.querySelector('p');

//     button.addEventListener('click', () => {
//         // 입력을 숫자로 변환
//         const inch = Number(input.value);

//         // 숫자가 아니라면 바로 리턴
//         if(isNaN(inch)){
//             p.textContent = '숫자를 입력해주세요';
//             return; // 조기 리턴 부분
//         }
//         // 변환해서 출력
//         const cm = inch * 2.54;
//         p.textContent = `${cm}cm`;
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const input = document.querySelector('input');  // input태그
//     const p = document.querySelector('p');  // p태그
//     const isEmail = (value) => {    // 이메일인지 검사하는 함수
//         // 골뱅이(@)를 갖고있고 && 골뱅이 뒤에 점이 있으면 True 리턴
//         return (value.indexOf('@') > 1)
//             && (value.split('@')[1].indexOf('.') > 1);
//     }

//     input.addEventListener('keyup', (event) => {
//         const value = event.currentTarget.value;
//         // event.currentTarget -> input 객체
//         if(isEmail(value)){ // isEmail 함수의 결과가 true이면
//             p.style.color = 'green';
//             p.textContent = `이메일 형식입니다 : ${value}`;
//         }else {
//             p.style.color = 'red';
//             p.textContent = `이메일 형식이 아닙니다 : ${value}`;
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const select = document.querySelector('select');
//     const p = document.querySelector('p');

//     select.addEventListener('change', (event) => {
//         const options = event.currentTarget.options;
//         const index = event.currentTarget.selectedIndex;
//         // selectedIndex -> 선택된 index

//         p.textContent = `선택 : ${options[index].textContent}`;
//         // 선택한 option 태그 추출
//         // -> option의 index번지의 글자
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const select = document.querySelector('select');
//     const p = document.querySelector('p');

//     select.addEventListener('change', (event) => {
//         const options = event.currentTarget.options;
//         const list = [];
//         // 사용자가 선택한 값을 전부 선택하기 위해 배열로 저장
//         for(const option of options){
//             // option에서 선택이 되었는지 확인하기 위해 반복문으로 돌림
//             // -> options 속성에는 forEach() 메소드가 없음
//             if(option.selected){
//                 // selected 속성을 확인
//                 // -> 선택이 된 option인지 체크
//                 list.push(option.textContent);
//             }
//         }
//         p.textContent = `선택 : ${list.join(',')}`;
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     // 변수명은 가능하면 영문으로 작성할 것
//     // -> 한글로도 작성은 가능하나, 한글명으로 문제가 발생할 수 있음
//     let 현재값;
//     let 변환상수 = 10;

//     const select = document.querySelector('select');
//     const input = document.querySelector('input');
//     const span = document.querySelector('span');

//     const calculate = () => {
//         span.textContent = (현재값 * 변환상수).toFixed(2);
//         // 소수점 2번째 자리까지 출력
//     }

//     select.addEventListener('change', (event) => {
//         const options = event.currentTarget.options;
//         const index = event.currentTarget.options.selectedIndex;
//         // 항목을 선택하면 항목의 value 속성을 추출
//         변환상수 = Number(options[index].value);
//         calculate();
//     });

//     input.addEventListener('keyup', (event) => {
//         현재값 = Number(event.currentTarget.value);
//         calculate();
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     let [timer, timerId] = [0, 0];
//     const h1 = document.querySelector('h1');
//     const checkbox = document.querySelector('input');

//     checkbox.addEventListener('change', (event) => {
//         if(event.currentTarget.checked){    // checked 속성 사용
//             // 체크상태
//             timerId = setInterval(() => {
//                 timer += 1;
//                 h1.textContent = `${timer}초`;
//             }, 1000);
//         }else {
//             // 체크 해제 상태
//             clearInterval(timerId);
//         }
//     });
// });



