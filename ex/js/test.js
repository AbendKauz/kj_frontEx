// 화면 중앙에 "(우리나라 형식)현재 시간은 x시 x분 x초" 표시
let a = window.setInterval(cnt, 1000);
function cnt(){
  let now = new Date();
  document.querySelector("#kim").innerHTML="현재시간은 <br>" + now.toLocaleString();
}

// 화면에 버튼 만들기 => 버튼 클릭시 시 분 초 표시하는 화면 팝업으로

