function solution(n) {
  // n의 제곱근이 존재하면 제곱근+1의 제곱을 리턴한다.
  let sqrtValue = Math.sqrt(n);
  let result;
  Number.isInteger(sqrtValue) ? (result = (sqrtValue + 1) ** 2) : (result = -1);
  return result;
}
