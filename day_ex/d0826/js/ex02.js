// while문을 이용하여 입력받은 구구단의 단을 출력하기

let a = window.prompt('출력하려는 단을 입력해주세요.','');
document.write(`<h1>${a} 단</h1><br>`);
let i = 1;
while(i <= 9){
    document.write(`${a} * ${i} = ${a * i} <br>`);
    i++;
}