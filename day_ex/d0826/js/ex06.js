// 배경색 바꾸기 버튼을 클릭하면 브라우저의 배경색이 
// (yellow, white, aqua, purple, red, blue) 순으로 변경되도록 하시오
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const body = document.querySelector('body');
    let count = 0;
    button.addEventListener('click', () => {
        let a = ['yellow', 'white', 'aqua', 'purple', 'red', 'blue'];
        body.style.backgroundColor = `${a[count++]}`;
        if(count > 5){
            count = 0;
        }
    })
});