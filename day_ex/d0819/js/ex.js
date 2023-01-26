// A부터 B까지 범위를 지정했을 때 범위안의 숫자를 모두 곱하는 함수

function multiplyAll(a, b){
  let result = 1;
  for(let i = a; i <= b; i++){
    result *= i;
  }
  return result;
}

console.log(multiplyAll(1, 2));
console.log(multiplyAll(1, 3));
