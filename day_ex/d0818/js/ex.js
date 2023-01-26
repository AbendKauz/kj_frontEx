let i, j;

for (i = 1; i <= 9; i++) {
  let k="<div>";
  k += `<h3>${i} 단 </h3>`;
  for (let j = 1; j <= 9; j++) {
    let s = i * j;
    k += `${i} * ${j} = ${s} </br>`;
  }
  k += "</div>";
  document.write(k);
}
