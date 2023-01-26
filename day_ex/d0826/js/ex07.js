// 배경색 바꾸기 버튼을 클릭하면 브라우저의 배경색이
// (yellow, white, aqua, purple, red, blue) 중에서 랜덤하게 
// 변경되도록 하시오
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const body = document.querySelector('body');
    button.addEventListener('click', () => {
        let a = ['yellow', 'white', 'aqua', 'purple', 'red', 'blue'];
        let count = Math.floor((Math.random() * 6) + 1);
        // document.write(count);
        body.style.backgroundColor = `${a[count++]}`;
    })
});