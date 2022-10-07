function solution(n) {
  let result = 0;
  let a = String(n).split("");
  a.forEach((el, _) => {
    result = result + Number(el);
  });
  return result;
}
