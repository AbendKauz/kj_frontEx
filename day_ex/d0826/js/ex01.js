// 적정 체중 계산법 : (키 - 100) * 0.9  // 오차범위 : +/- 5kg
// 이름, 키, 몸무게를 입력받아 적정 체중 여부 판단
let name = window.prompt('당신의 이름은? ', '');
let height = window.prompt('당신의 신장은? ', '');
let weight = window.prompt('당신의 몸무게는? ', '');

// document.write(`${name}님의 키는 ${height}이고, 몸무게는 ${weight} 입니다.`);
let result;
if(((height - 100) * 0.9) > weight){
    result = ((height - 100) * 0.9) - weight;
}else if(((height - 100) * 0.9) < weight){
    result = weight - ((height - 100) * 0.9);
}
document.write(result);
if(result > 5){
    document.write(`${name}님은 적정 체중이 아닙니다.`);
}else{
    document.write(`${name}님은 적정 체중입니다.`);
}