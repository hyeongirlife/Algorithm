function solution(n) {
  let result = [];
  n = String(n).split("");
  n.map((element, index) => {
    result.unshift(Number(element));
  });
  return result;
}
