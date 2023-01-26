// 중첩 for 문을 이용하여 5행 5열 표를 만들고, 
// 데이터가 1부터 25까지 출력되도록 작성하기

let num = 1;
document.write('<table>');
for(let i = 0; i < 5; i++){
    document.write('<tr>');
    for(let j = 0; j < 5; j++){
        document.write(`<td>${num++}</td>`);
    }
    document.write('</tr>');
}
document.write('</table>');