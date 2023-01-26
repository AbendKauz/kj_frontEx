// 오늘부터 올해 연말까지 남은 일수 출력하기

let day = new Date();
let month = day.getFullYear();
let target = new Date(month, 11, 31);

let result = Math.round((target.getTime() - day.getTime()) / (1000 * 60 * 60 * 24));
window.confirm(`D-day : \n${result}일 남았습니다.`);