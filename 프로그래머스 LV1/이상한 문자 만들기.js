function solution(s) {
  // s의 띄어쓰기 부분 인덱스 파악
  // 홀수부분 toLowerCase, 짝수부분 toUpperCase 적용
  let indexArr = s.split(" "); // ["try","hello","world"]
  indexArr
    .map((el, idx) => {
      el.split("")
        .map((val, index) => {
          if (index % 2 === 0) {
            el[index] = el[index].toUpperCase();
          } else {
            el[index] = el[index].toLowerCase();
          }
        })
        .join("");
    })
    .join(" ");
  return indexArr;
}
function solution(s) {
  // s의 띄어쓰기 부분 인덱스 파악
  // 홀수부분 toLowerCase, 짝수부분 toUpperCase 적용
  return s
    .split(" ")
    .map((el) =>
      el
        .split("")
        .map((val, index) =>
          index % 2 === 0
            ? (el[index] = el[index].toUpperCase())
            : (el[index] = el[index].toLowerCase())
        )
        .join("")
    )
    .join(" ");
}
