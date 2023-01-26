// w, a, s, d로 이동하도록 프로그래밍
// keyup event로 

document.addEventListener('DOMContentLoaded', () => {
    // 별의 초기 설정
    const star = document.querySelector('h1');
    star.style.position = 'absolute';
    // star의 style속성을 조작하여  position 값을 absolute로 지정

    // 별의 이동을 출력하는 기능
    let [x, y] = [0, 0];
    const block = 20;
    const print = () => {
        // x나 y값을 block값 만큼 곱하여 여백으로 추가
        // -> 여백만큼 이동하는것처럼 보임
        star.style.left = `${x * block}px`;
        star.style.top = `${y * block}px`;
    }
    print();    // print() 메소드 호출

    // 별을 이동하는 기능
    const [w, a, s, d] = [87, 65, 83, 68];
    // 방향키 keycode를 쉽게 사용할 수 있게 변수를 사용해서 이름을 붙임
    // left = keycode 37
    // up = keycode 38
    // right = keycode 39
    // down = keycode 40
    document.body.addEventListener('keyup', (event) => {
        switch (event.keyCode){
            case a :
                x -= 1;
                break;
            case w :
                y -= 1;
                break;
            case d :
                x += 1;
                break;
            case s :
                y += 1;
                break;
        }
        print();    // print() 메소드 호출
    });
});