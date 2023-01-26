// 입력받은 이메일 주소의 유효성 검사하기
//  - 이메일 주소의 서버 주소는 
//  ( co.kr , .com , .net , .or.kr , .go.kr ) 만 
//  유효한 주소로 판단
let email = window.prompt('당신의 이메일 주소는?', '');

if(email.indexOf('.co.kr') > 1 || email.indexOf('.com') > 1 || email.indexOf('.net') > 1
    || email.indexOf('.or.kr') > 1 || email.indexOf('.go.kr') > 1 ){
        document.write(email);
}else{
    window.alert('이메일 형식이 잘못되었습니다.');
}
